/**
 * ==========================================================
 * VANILLA JAVASCRIPT SLIDERS - PORTFOLIO SYSTEM
 * Engineered Precision for Amal Shiyas Static Page
 * ==========================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    // Elegant Setup for Project Sliders
    const initializeSlideShow = (containerId, sliderId, nextBtnId, prevBtnId) => {
        const slider = document.getElementById(sliderId);
        const nextBtn = document.getElementById(nextBtnId);
        const prevBtn = document.getElementById(prevBtnId);
        
        if (!slider || !nextBtn || !prevBtn) return;
        
        let currentIndex = 0;
        const slides = slider.children;
        const totalSlides = slides.length;
        
        const updateSlides = () => {
            for (let i = 0; i < totalSlides; i++) {
                if (i === currentIndex) {
                    slides[i].classList.remove("hidden");
                } else {
                    slides[i].classList.add("hidden");
                }
            }
        };
        
        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlides();
        });
        
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlides();
        });
        
        // Initial Draw
        updateSlides();
    };

    // Instantiate Slides
    initializeSlideShow("project-velostat-frame", "velostat-gallery", "velostat-next", "velostat-prev");
    initializeSlideShow("project-fsr-frame", "fsr-gallery", "fsr-next", "fsr-prev");
    
    // Smooth sticky navigation highlight tracking
    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const id = section.getAttribute("id");
            if (scrollPos >= section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
                const navLink = document.querySelector(`a[href="#\${id}"]`);
                if (navLink) {
                    document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("text-red-500"));
                    navLink.classList.add("text-red-500");
                }
            }
        });
    });
});
