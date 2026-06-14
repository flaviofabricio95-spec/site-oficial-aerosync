import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "História — AeroSync Consultoria" },
      { name: "description", content: "Conheça a trajetória e os valores da AeroSync Consultoria." },
      { property: "og:title", content: "História — AeroSync Consultoria" },
      { property: "og:description", content: "Conheça a trajetória e os valores da AeroSync Consultoria." },
    ],
    links: [{ rel: "canonical", href: "/historia" }],
  }),
  component: Historia,
});

function Historia() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 md:px-8 py-20">
        <p className="text-sm font-semibold text-gray-600 tracking-wider mb-4 uppercase">Nossa História</p>
        <h1 className="text-4xl md:text-6xl font-normal tracking-tighter mb-8" style={{ color: "#202A36" }}>
          Construída sobre experiência e excelência.
        </h1>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            A AeroSync Consultoria nasceu do propósito de unir conhecimento técnico aeronáutico
            com gestão estratégica de alto nível. Há anos atendemos operadores, escolas de
            aviação e empresas que buscam eficiência, segurança e conformidade regulatória.
          </p>
          <p>
            Nosso time é composto por especialistas com vivência em operações, manutenção,
            certificação e gestão de qualidade — sempre alinhados às melhores práticas da
            ANAC, FAA e EASA.
          </p>
          <p>
            Acreditamos que cada cliente merece soluções sob medida, com clareza, agilidade
            e o cuidado de quem conhece o setor por dentro.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
