import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import logo from "@/assets/aerosync-logo-v2.png.asset.json";

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
            className="rounded-3xl p-12 flex flex-col items-center justify-center relative overflow-hidden min-h-[400px]"
            style={{ background: "linear-gradient(135deg,#1E3A5F 0%,#2A4F7E 100%)" }}
          >
            <div
              className="absolute -top-10 -right-10 w-44 h-44 rounded-full"
              style={{ background: "rgba(232,98,26,0.15)" }}
            />
            <img src={logo.url} alt="AeroSync" className="w-64 relative z-10" />
            <p className="text-white/70 text-sm italic text-center mt-5 relative z-10 whitespace-pre-line">
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
      </main>
      <Footer />
    </div>
  );
}
