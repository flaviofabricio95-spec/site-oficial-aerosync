import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/aerosync-logo.png.asset.json";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "História", to: "/historia" },
  { label: "Serviços", to: "/servicos" },
  { label: "Contato", to: "/contato" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto w-full px-6 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo.url} alt="AeroSync Consultoria" className="h-10 w-auto" />
            <span className="sr-only">AeroSync Consultoria</span>
          </Link>
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-gray-900 hover:text-gray-700 transition-colors font-medium"
                  activeProps={{ className: "text-gray-900 font-semibold" }}
                  activeOptions={{ exact: true }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-gray-900"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg p-4">
            <ul className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block text-gray-900 hover:text-gray-700 transition-colors font-medium"
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
