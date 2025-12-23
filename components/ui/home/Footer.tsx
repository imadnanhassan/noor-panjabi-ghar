import { Facebook, Globe, Instagram, Lock, Twitter } from "lucide-react";

type PageType =
  | "home"
  | "Men's Panjabi"
  | "Women's Panjabi"
  | "Kids' Panjabi"
  | "Ramadan Collection";

const Footer = ({ onNavigate }: { onNavigate?: (p: PageType) => void }) => {
  const footerLinks = [
    {
      title: "Atelier",
      links: [
        "Men's Panjabi",
        "Women's Panjabi",
        "Kids' Panjabi",
        "Ramadan Collection",
      ],
    },
    {
      title: "Concierge",
      links: [
        "Size Guide",
        "Care Registry",
        "Bespoke Request",
        "Store Locator",
      ],
    },
    {
      title: "Legal Maison",
      links: [
        "Privacy Policy",
        "Terms of Sale",
        "Ethics Manifesto",
        "Shipping",
      ],
    },
  ];

  return (
    <footer className="bg-emerald-950 text-white pt-32 pb-16 px-6 overflow-hidden relative">
      {/* Decorative Brand Text Backdrop */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-serif font-bold text-white/2 pointer-events-none whitespace-nowrap leading-none">
        NOOR
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div
              onClick={() => onNavigate?.("home")}
              className="flex items-center gap-4 mb-10 cursor-pointer group"
            >
              <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-emerald-950 font-black text-2xl shadow-2xl group-hover:rotate-360deg transition-transform duration-1000">
                N
              </div>
              <div>
                <span className="text-3xl font-serif font-bold tracking-tighter block leading-none">
                  NOOR
                </span>
                <span className="text-[9px] font-black uppercase tracking-[0.6em] text-amber-500">
                  Panjabi Ghar
                </span>
              </div>
            </div>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-10 italic max-w-sm">
              Weaving the thread of tradition through the tapestry of time since
              1995.
            </p>
            <div className="flex gap-6">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-emerald-950 transition-all duration-500"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {footerLinks.map((col, i) => (
                <div key={i}>
                  <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500 mb-10">
                    {col.title}
                  </h5>
                  <ul className="space-y-5">
                    {col.links.map((link) => (
                      <li
                        key={link}
                        onClick={() =>
                          (link === "Men's Panjabi" ||
                            link === "Women's Panjabi" ||
                            link === "Kids' Panjabi" ||
                            link === "Ramadan Collection") &&
                          onNavigate?.(link as PageType)
                        }
                        className="text-sm font-medium text-white/40 hover:text-amber-500 cursor-pointer transition-colors capitalize flex items-center gap-2 group"
                      >
                        <span className="w-0 h-[1px] bg-amber-500 group-hover:w-4 transition-all" />
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3" /> Global Shipping
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-3 h-3" /> Secure Checkout
            </div>
          </div>

          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10 text-center">
            © 2025 NOOR PANJABI GHAR. CRAFTED BY HAND IN DHAKA.
          </p>

          <div className="flex gap-4 opacity-20 hover:opacity-100 transition-opacity">
            <div className="h-6 w-10 bg-white/20 rounded-sm" />
            <div className="h-6 w-10 bg-white/20 rounded-sm" />
            <div className="h-6 w-10 bg-white/20 rounded-sm" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
