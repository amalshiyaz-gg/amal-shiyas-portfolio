import { useEffect, useRef, useState } from "react";

export default function CADCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMouse((prev) => ({
        ...prev,
        targetX: x,
        targetY: y,
      }));
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    // Grid points for an aerodynamic car body line illustration
    const points: { x: number; y: number; originalZ: number }[] = [];
    const rows = 12;
    const cols = 24;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Base coordinate in normalized space [0, 1]
        const nx = c / (cols - 1);
        const ny = r / (rows - 1);

        // Generate a mechanical wave/aerodynamics flow effect
        const zMultiplier = Math.sin(nx * Math.PI) * Math.cos(ny * Math.PI * 1.5);
        points.push({
          x: nx,
          y: ny,
          originalZ: zMultiplier * 45,
        });
      }
    }

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Interpolate mouse coordinates for fluid animation
      setMouse((prev) => {
        const dx = prev.targetX - prev.x;
        const dy = prev.targetY - prev.y;
        return {
          ...prev,
          x: prev.x + dx * 0.08,
          y: prev.y + dy * 0.08,
        };
      });

      // Draw technical blueprint grid rules in red accent
      ctx.strokeStyle = "rgba(211, 47, 47, 0.04)";
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw grid coordinates crosshairs
      ctx.strokeStyle = "rgba(211, 47, 47, 0.15)";
      ctx.beginPath();
      // Horizontal cursor crosshair
      ctx.moveTo(0, mouse.y);
      ctx.lineTo(width, mouse.y);
      // Vertical cursor crosshair
      ctx.moveTo(mouse.x, 0);
      ctx.lineTo(mouse.x, height);
      ctx.stroke();

      // Label coordinate next to cursor like CAD crosshair
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.font = "9px 'JetBrains Mono', monospace";
      ctx.fillText(
        `X:${Math.round(mouse.x)} Y:${Math.round(mouse.y)}`,
        mouse.x + 12,
        mouse.y - 12
      );

      // Render the aerodynamic wireframe mesh in red/grey tones
      const mouseInfluenceRadius = 180;
      const getMeshProj = (p: typeof points[0]) => {
        const baseX = p.x * width;
        const baseY = p.y * height * 0.8 + height * 0.1;

        // Dynamic offset based on time/frame & mouse
        const dist = Math.hypot(baseX - mouse.x, baseY - mouse.y);
        let zInfluence = 0;
        if (dist < mouseInfluenceRadius) {
          zInfluence = (1 - dist / mouseInfluenceRadius) * 20;
        }

        const z = p.originalZ + Math.sin(p.x * 5 + frame * 0.02) * 12 + zInfluence;
        return {
          px: baseX,
          py: baseY - z,
        };
      };

      // Draw lines between columns
      ctx.lineWidth = 1;
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          const { px, py } = getMeshProj(points[idx]);
          if (c === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = r % 2 === 0 ? "rgba(211, 47, 47, 0.12)" : "rgba(255, 255, 255, 0.05)";
        ctx.stroke();
      }

      // Draw lines between rows
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const idx = r * cols + c;
          const { px, py } = getMeshProj(points[idx]);
          if (r === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = c % 2 === 0 ? "rgba(211, 47, 47, 0.12)" : "rgba(255, 255, 255, 0.05)";
        ctx.stroke();
      }

      // Accent target ring at cursor intersection
      ctx.strokeStyle = "#D32F2F";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = "rgba(211, 47, 47, 0.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 16, 0, Math.PI * 2);
      ctx.stroke();

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationId);
    };
  }, [mouse.targetX, mouse.targetY]);

  return (
    <canvas
      id="cad-viewport-canvas"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto cursor-crosshair z-0 opacity-45"
    />
  );
}
