import { Link } from "@tanstack/react-router";
import logo from "@/assets/aerosync-logo-v2.png.asset.json";

export function Footer() {
  return (
    <footer style={{ background: "#142B48", color: "rgba(255,255,255,0.65)" }} className="px-[5%] pt-14 pb-8">
      <div className="max-w-[1200px] mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <img src={logo.url} alt="AeroSync" className="h-20 mb-4" />
          <p className="text-sm leading-relaxed max-w-[260px]">
            Seu parceiro estratégico para certificações, auditorias e segurança operacional.
          </p>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Navegação</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><Link to="/" className="hover:text-[#F5A623] transition-colors">Início</Link></li>
            <li><Link to="/historia" className="hover:text-[#F5A623] transition-colors">Nossa História</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">Serviços</Link></li>
            <li><Link to="/contato" className="hover:text-[#F5A623] transition-colors">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Serviços</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">Táxi Aéreo (RBAC 135)</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">Manutenção (Parte 145)</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">Instrução (RBAC 141)</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">SGSO / SMS</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">Auditorias</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Regulações</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">RBAC 135</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">RBAC 141</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">RBAC 145</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">RBAC 120 (SGSO)</Link></li>
            <li><Link to="/servicos" className="hover:text-[#F5A623] transition-colors">Normativos ANAC</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-12 pt-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-3">
        <p className="text-xs">© 2026 AeroSync Consultoria Aeronáutica. Todos os direitos reservados.</p>
        <span className="text-xs font-semibold" style={{ color: "#F5A623" }}>🛡 Especialistas em Regulamentação ANAC</span>
      </div>
    </footer>
  );
}
