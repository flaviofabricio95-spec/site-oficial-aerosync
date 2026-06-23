import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import logo from "@/assets/aerosync-logo-v2.png.asset.json";
import { PlaneTakeoff, Telescope, ShieldCheck, Check } from "lucide-react";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "Nossa História — AeroSync Consultoria" },
      { name: "description", content: "A trajetória da AeroSync: paixão pela aviação e compromisso com a segurança e conformidade ANAC." },
      { property: "og:title", content: "Nossa História — AeroSync Consultoria" },
      { property: "og:description", content: "Uma história construída sobre excelência em consultoria aeronáutica." },
    ],
    links: [{ rel: "canonical", href: "/historia" }],
  }),
  component: Historia,
});

const TIMELINE = [
  {
    icon: "✦",
    year: "Fundação",
    heading: "Nasce a AeroSync",
    text: "Fundada por especialistas com a missão de simplificar o processo regulatório aeronáutico.",
    accent: true,
  },
  {
    icon: "◈",
    year: "Expansão",
    heading: "Ampliação dos Serviços",
    text: "Incorporamos consultoria SGSO e auditorias internas, atendendo todo o ecossistema: táxi aéreo, manutenção e instrução.",
  },
];

const VALUES = [
  { icon: "🎯", title: "Precisão Técnica" },
  { icon: "🔒", title: "Segurança" },
  { icon: "🤝", title: "Parceria" },
];

function Historia() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif", background: "#F8F9FB" }}>
      <Navbar />
      <main className="flex-1 py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div
            className="rounded-3xl p-12 flex flex-col items-center justify-center relative overflow-hidden min-h-[400px] shadow-2xl"
            style={{ background: "#FFFFFF", boxShadow: "0 20px 60px -15px rgba(30,58,95,0.25)", border: "1px solid rgba(30,58,95,0.08)" }}
          >
            <div
              className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-2xl"
              style={{ background: "rgba(232,98,26,0.18)" }}
            />
            <div
              className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full blur-3xl"
              style={{ background: "rgba(30,58,95,0.10)" }}
            />
            <img src={logo.url} alt="AeroSync" className="w-64 relative z-10" />
            <p className="text-sm italic text-center mt-5 relative z-10 whitespace-pre-line font-semibold" style={{ color: "#1E3A5F" }}>
              "Voar com segurança começa{"\n"}com regulamentação de excelência."
            </p>
          </div>
          <div>
            <span
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "rgba(232,98,26,0.08)", border: "1px solid rgba(232,98,26,0.2)", color: "#E8621A" }}
            >
              Nossa Trajetória
            </span>
            <h1
              className="font-extrabold leading-tight mb-4 uppercase"
              style={{ fontFamily: "'Playfair Display', serif", color: "#1E3A5F", fontSize: "clamp(2rem,4vw,2.8rem)" }}
            >
              UMA HISTÓRIA CONSTRUÍDA SOBRE&nbsp;<em className="not-italic" style={{ color: "#E8621A" }}>EXCELÊNCIA</em>
            </h1>
            <div className="w-16 h-[3px] rounded mb-6" style={{ background: "#E8621A" }} />
            <p className="text-base leading-relaxed mb-8" style={{ color: "#6B7A90" }}>
              A AeroSync nasceu da paixão pela aviação e do compromisso com a segurança. Tornamo-nos referência
              nacional em consultoria aeronáutica, auxiliando empresas a conquistarem e manterem suas certificações
              junto à ANAC.
            </p>

            <div className="flex flex-col">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-5 relative">
                  {i < TIMELINE.length - 1 && (
                    <span className="absolute left-[19px] top-10 bottom-0 w-0.5" style={{ background: "#D9E0EA" }} />
                  )}
                  <div
                    className="w-[38px] h-[38px] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm mt-0.5 z-10"
                    style={{ background: item.accent ? "#E8621A" : "#1E3A5F" }}
                  >
                    {item.icon}
                  </div>
                  <div className="pb-8">
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#E8621A" }}>
                      {item.year}
                    </div>
                    <div className="text-base font-bold mb-1.5" style={{ color: "#1E3A5F" }}>
                      {item.heading}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: "#6B7A90" }}>
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl p-6 text-center border transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: "#D9E0EA" }}
                >
                  <div className="text-3xl mb-2.5">{v.icon}</div>
                  <div className="text-sm font-bold" style={{ color: "#1E3A5F" }}>
                    {v.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Nossa Essência */}
        <section className="mt-24 max-w-[1200px] mx-auto">
          <h2
            className="text-center font-bold mb-12"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#1E3A5F", fontSize: "clamp(1.8rem,3.5vw,2.4rem)" }}
          >
            Nossa Essência
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Missão */}
            <div className="bg-white rounded-2xl p-8 border shadow-sm" style={{ borderColor: "#E5E9F0" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(30,58,95,0.08)" }}>
                <PlaneTakeoff size={24} style={{ color: "#1E3A5F" }} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#1E3A5F" }}>Missão</div>
              <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                Elevar a performance da aviação brasileira por meio de consultoria especializada, conectando as melhores práticas internacionais à realidade operacional de cada cliente — com precisão, segurança e comprometimento.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white rounded-2xl p-8 border shadow-sm" style={{ borderColor: "#E5E9F0" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(232,98,26,0.10)" }}>
                <Telescope size={24} style={{ color: "#E8621A" }} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#1E3A5F" }}>Visão</div>
              <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                Ser referência nacional em consultoria aeronáutica até 2030, reconhecida pela excelência técnica, inovação contínua e pelo impacto direto na eficiência e segurança do setor aéreo.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-2xl p-8 border shadow-sm" style={{ borderColor: "#E5E9F0" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(34,139,90,0.10)" }}>
                <ShieldCheck size={24} style={{ color: "#228B5A" }} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#1E3A5F" }}>Valores</div>
              <ul className="space-y-2.5">
                {[
                  "Segurança em primeiro lugar",
                  "Excelência técnica",
                  "Integridade e transparência",
                  "Inovação aplicada",
                  "Parceria com o cliente",
                  "Comprometimento com resultados",
                ].map((v) => (
                  <li key={v} className="flex items-start gap-2 text-sm leading-snug" style={{ color: "#4A5568" }}>
                    <Check size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#228B5A" }} />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
