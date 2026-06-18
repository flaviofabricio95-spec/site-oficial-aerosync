import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/aerosync-logo-v2.png.asset.json";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/aerosync", Icon: Instagram },
  { label: "Facebook", href: "https://facebook.com/aerosync", Icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com/company/aerosync", Icon: Linkedin },
  { label: "WhatsApp", href: "https://wa.me/5500000000000", Icon: MessageCircle },
] as const;

export function Footer() {
  return (
    <footer style={{ background: "#FFFFFF", color: "#1E3A5F" }} className="px-[5%] pt-14 pb-8">
      <div className="max-w-[1200px] mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <img src={logo.url} alt="AeroSync" className="h-20 mb-4" />
          <p className="text-sm leading-relaxed max-w-[260px]">
            Seu parceiro estratégico para certificações, auditorias e segurança operacional.
          </p>
          <div className="flex gap-3 mt-5">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#E8621A] hover:bg-[#F5A623] text-white transition-colors shadow-md"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Navegação</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><Link to="/" className="hover:text-[#F5A623] transition-colors">INÍCIO</Link></li>
            <li><Link to="/historia" className="hover:text-[#F5A623] transition-colors">HISTÓRIA</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">SERVIÇOS</Link></li>
            <li><Link to="/contato" className="hover:text-[#F5A623] transition-colors">CONTATO</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Serviços</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">Táxi Aéreo (RBAC 135)</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">Manutenção (RBAC 145)</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">SGSO</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">Auditorias</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">Treinamentos</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Regulações</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">RBAC 135</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">RBAC 141*</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">RBAC 145</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">RBAC 133</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">RBAC 91</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-12 pt-6 border-t border-[#1E3A5F]/15 flex flex-wrap justify-between items-center gap-3">
        <p className="text-xs">© 2026 AeroSync Consultoria Aeronáutica. Todos os direitos reservados.</p>
        <span className="text-xs font-semibold" style={{ color: "#F5A623" }}>🛡 Especialistas em Regulamentação ANAC</span>
      </div>
    </footer>
  );
}
