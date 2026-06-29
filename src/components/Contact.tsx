import { useState, FormEvent } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  ShieldAlert,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  const contactOptions = [
    {
      label: "Official Email",
      value: "amalshiyazabdulrahman@gmail.com",
      link: "mailto:amalshiyazabdulrahman@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone Contact",
      value: "+91 9037101027",
      link: "tel:+919037101027",
      icon: Phone,
    },
    {
      label: "LinkedIn Professional",
      value: "linkedin.com/in/amal-shiyas-316b73211",
      link: "https://www.linkedin.com/in/amal-shiyas-316b73211/",
      icon: Linkedin,
    },
    {
      label: "GitHub Repositories",
      value: "github.com/amalgotbusiness",
      link: "https://github.com/amalgotbusiness",
      icon: Github,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#181818] border-b border-white/[0.03]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-[#D32F2F]" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#D32F2F]">
            07 / Communication & Inquiries
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-5 space-y-6">

            <div>
              <h3 className="text-3xl font-bold text-white mb-3">
                Let's Partner Down the Road
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Looking to discuss a CAD project, internship opportunity,
                graduate engineering role or any collaboration? Feel free to
                contact me using any of the channels below.
              </p>
            </div>

            <div className="space-y-3">
              {contactOptions.map((opt, index) => {
                const Icon = opt.icon;

                return (
                  <a
                    key={index}
                    href={opt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded bg-[#202020] border border-white/[0.02] hover:border-[#D32F2F]/40 hover:bg-[#252525] transition-all duration-200 flex items-center gap-4 group"
                  >
                    <div className="p-2.5 rounded bg-[#181818] border border-white/[0.05] text-[#D32F2F]">
                      <Icon size={18} />
                    </div>

                    <div>
                      <span className="block text-[9px] uppercase font-mono tracking-wider text-gray-500">
                        {opt.label}
                      </span>

                      <span className="text-sm text-white group-hover:text-[#EF5350] transition">
                        {opt.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="p-4 bg-black/40 rounded border border-white/[0.03]">
              <div className="flex items-center gap-2 text-[#EF5350] text-xs font-bold font-mono mb-2">
                <ShieldAlert size={14} />
                OFFICIAL CAD ASSURANCE
              </div>

              <p className="text-xs text-gray-400">
                All communications remain confidential. Engineering files,
                design concepts and project discussions are treated securely.
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-lg bg-[#202020] border border-white/[0.03]">

              <h3 className="text-xl font-bold text-white mb-6">
                Send Direct CAD or Hiring Inquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-black/50 border border-white/10 rounded px-4 py-3 text-white outline-none focus:border-[#D32F2F]"
                  />

                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-black/50 border border-white/10 rounded px-4 py-3 text-white outline-none focus:border-[#D32F2F]"
                  />

                </div>

                <input
                  type="text"
                  required
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white outline-none focus:border-[#D32F2F]"
                />

                <textarea
                  rows={5}
                  required
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white outline-none resize-none focus:border-[#D32F2F]"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#D32F2F] hover:bg-[#EF5350] rounded text-white font-semibold flex justify-center items-center gap-2 transition"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={16} />
                      Dispatch Inquiry
                    </>
                  )}
                </button>

                {success && (
                  <div className="text-green-400 text-center text-sm mt-4">
                    ✓ Message sent successfully!
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}