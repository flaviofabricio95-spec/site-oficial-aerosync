import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Plane, ShieldCheck, ClipboardCheck, GraduationCap, Wrench, FileSearch } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — AeroSync Consultoria" },
      { name: "description", content: "Consultoria aeronáutica especializada: operações, certificação, treinamento e mais." },
      { property: "og:title", content: "Serviços — AeroSync Consultoria" },
      { property: "og:description", content: "Consultoria aeronáutica especializada: operações, certificação, treinamento e mais." },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: Servicos,
});

const SERVICES = [
  { icon: Plane, title: "Operações Aéreas", desc: "Estruturação e otimização de operações para máxima eficiência." },
  { icon: ShieldCheck, title: "Segurança Operacional", desc: "Implantação de SGSO e cultura de segurança." },
  { icon: ClipboardCheck, title: "Certificação ANAC", desc: "Suporte completo em processos de homologação e certificação." },
  { icon: GraduationCap, title: "Treinamento", desc: "Capacitação técnica para tripulação e equipes de solo." },
  { icon: Wrench, title: "Manutenção", desc: "Consultoria em programas de manutenção e aeronavegabilidade." },
  { icon: FileSearch, title: "Auditorias", desc: "Auditorias internas e preparação para auditorias regulatórias." },
];

function Servicos() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-6 md:px-8 py-20">
        <p className="text-sm font-semibold text-gray-600 tracking-wider mb-4 uppercase">Nossos Serviços</p>
        <h1 className="text-4xl md:text-6xl font-normal tracking-tighter mb-12" style={{ color: "#202A36" }}>
          Soluções completas em aviação.
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "#202A36" }}
              >
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
