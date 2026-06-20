import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — AeroSync Consultoria" },
      { name: "description", content: "Certificação RBAC 135/141/145, SGSO/SMS, auditorias e assessoria regulatória ANAC." },
      { property: "og:title", content: "Serviços — AeroSync Consultoria" },
      { property: "og:description", content: "Soluções completas para sua operação aérea." },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: Servicos,
});

const SERVICES = [
  {
    icon: "✈️",
    name: "CERTIFICAÇÃO DE TÁXI AÉREO (RBAC 135)",
    desc: "Assessoria completa para obtenção e renovação do COA e Especificações de Operações. Elaboramos Manuais Operacionais, planos de treinamento e toda documentação exigida pela ANAC.",
    tag: "RBAC 135",
  },
  {
    icon: "🔧",
    name: "OFICINAS DE MANUTENÇÃO AERONÁUTICA (RBAC 145)",
    desc: "Consultoria para homologação e renovação de Organizações de Manutenção. Estruturação de SGQ, elaboração de manuais, procedimentos técnicos e adequação à Parte 145.",
    tag: "RBAC 145",
  },
  {
    icon: "🎓",
    name: "OPERADORES PRIVADOS / SAE\u00a0\n(RBAC 91)",
    desc: "Assessoria completa para gestão regulatória de aeronaves privadas, obtenção de LOA e Serviços Aéreos Especializados. Garantimos a conformidade com as normas da ANAC, auxiliando na estruturação de manuais, controle de documentação e processos de auditoria interna.",
    tag: "*****\n",
  },
  {
    icon: "📋",
    name: "AUDITORIAS",
    desc: "Realização de auditorias de conformidade regulatória, identificando não conformidades e oportunidades de melhoria. Preparação para inspeções da ANAC.",
    tag: "Compliance",
  },
  {
    icon: "🛡️",
    name: "CONSULTORIA SGSO",
    desc: "Implementação e fortalecimento do Sistema de Gerenciamento da Segurança Operacional. Cultura de segurança, relatórios de ocorrências e análise de risco conforme RBAC.",
    tag: "SGSO",
  },
  {
    icon: "📐",
    name: "TREINAMENTOS",
    desc: "criar texto",
    tag: "CAPACITAÇÃO",
  },
];

function Servicos() {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main className="flex-1 py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center">
            <span
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "rgba(232,98,26,0.08)", border: "1px solid rgba(232,98,26,0.2)", color: "#E8621A" }}
            >
              O que fazemos
            </span>
            <h1
              className="font-extrabold leading-tight mb-4 uppercase"
              style={{ fontFamily: "'Playfair Display', serif", color: "#1E3A5F", fontSize: "clamp(2rem,4vw,2.8rem)" }}
            >
              Soluções completas para sua{" "}
              <em className="not-italic" style={{ color: "#E8621A" }}>operação aérea</em>
            </h1>
            <p className="text-base leading-relaxed max-w-[600px] mx-auto" style={{ color: "#6B7A90" }}>
              Da aprovação inicial à manutenção da certificação, suporte especializado em todas as frentes regulatórias
              exigidas pela ANAC.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="group rounded-2xl p-8 border relative overflow-hidden transition-all hover:bg-white hover:-translate-y-1.5 hover:shadow-2xl"
                style={{ background: "#F8F9FB", borderColor: "#D9E0EA" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-colors group-hover:bg-[rgba(232,98,26,0.1)]"
                  style={{ background: "rgba(30,58,95,0.08)" }}
                >
                  {s.icon}
                </div>
                <h3 className="text-base font-bold mb-3 leading-snug" style={{ color: "#1E3A5F" }}>
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7A90" }}>
                  {s.desc}
                </p>
                <span
                  className="inline-block mt-4 text-[0.7rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{ color: "#E8621A", border: "1px solid rgba(232,98,26,0.25)" }}
                >
                  {s.tag}
                </span>
              </div>
            ))}
          </div>

          <div
            className="mt-14 rounded-3xl p-12 flex flex-wrap items-center justify-between gap-8"
            style={{ background: "linear-gradient(135deg,#1E3A5F 0%,#2A4F7E 100%)" }}
          >
            <div>
              <h3
                className="text-white font-extrabold leading-tight max-w-[480px] uppercase"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem" }}
              >
                PRECISA DE UMA SOLUÇÃO SOB MEDIDA PARA SUA OPERAÇÃO?
              </h3>
              <p className="text-white/65 text-sm mt-2">
                Nossa equipe analisa seu contexto e desenvolve um plano de ação personalizado.
              </p>
            </div>
            <Link
              to="/contato"
              className="text-white font-bold text-sm px-7 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
              style={{ background: "#E8621A" }}
            >
              Solicitar Diagnóstico →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
