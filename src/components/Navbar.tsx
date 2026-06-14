import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/aerosync-logo-v2.png.asset.json";

const NAV_ITEMS = [
  { label: "Início", to: "/" },
  { label: "História", to: "/historia" },
  { label: "Serviços", to: "/servicos" },
  { label: "Contato", to: "/contato" },
] as const;

type NavbarProps = {
  variant?: "solid" | "hero";
};

export function Navbar({ variant = "solid" }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const isHero = variant === "hero";

  const wrapperClass = isHero
    ? "absolute top-0 left-0 right-0 z-50"
    : "sticky top-0 z-50 border-b";
  const wrapperStyle = isHero
    ? undefined
    : { background: "rgba(255,255,255,0.95)", borderColor: "rgba(30,58,95,0.08)", backdropFilter: "blur(12px)" };

  const linkBase = isHero
    ? "text-gray-900 hover:text-gray-700"
    : "text-[#1E3A5F] hover:text-[#E8621A]";

  return (
    <header className={wrapperClass} style={wrapperStyle}>
      <nav className="max-w-7xl mx-auto w-full px-6 md:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo.url} alt="AeroSync Consultoria" className="h-24 md:h-32 w-auto" />
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`text-sm font-medium px-3.5 py-2 rounded-md transition-colors ${linkBase}`}
                  activeProps={{
                    className: isHero
                      ? "text-sm font-semibold px-3.5 py-2 rounded-md text-gray-900"
                      : "text-sm font-semibold px-3.5 py-2 rounded-md text-[#E8621A]",
                  }}
                  activeOptions={{ exact: true }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {!isHero && (
            <Link
              to="/contato"
              className="hidden md:inline-flex text-sm font-semibold px-5 py-2.5 rounded-lg text-white transition-colors"
              style={{ background: "#E8621A" }}
            >
              Fale Conosco
            </Link>
          )}

          <button
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden ${isHero ? "text-gray-900" : "text-[#1E3A5F]"}`}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div
            className="md:hidden mt-3 rounded-2xl p-3 shadow-xl"
            style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)" }}
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block px-4 py-3 rounded-lg text-sm font-medium text-[#1E3A5F] hover:bg-[#F8F9FB] hover:text-[#E8621A]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
