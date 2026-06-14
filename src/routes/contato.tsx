import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — AeroSync Consultoria" },
      { name: "description", content: "Entre em contato com a AeroSync Consultoria." },
      { property: "og:title", content: "Contato — AeroSync Consultoria" },
      { property: "og:description", content: "Entre em contato com a AeroSync Consultoria." },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 md:px-8 py-20">
        <p className="text-sm font-semibold text-gray-600 tracking-wider mb-4 uppercase">Contato</p>
        <h1 className="text-4xl md:text-6xl font-normal tracking-tighter mb-12" style={{ color: "#202A36" }}>
          Vamos conversar.
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-gray-700 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600">aerosync.consultoria@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-gray-700 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Telefone</p>
                <p className="text-gray-600">
                  +55 (11) 95951-2487
                  <br />
                  +55 (74) 99948-1092
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-gray-700 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Endereço</p>
                <p className="text-gray-600">São Paulo, Brasil</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                required
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                required
                type="email"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea
                required
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-full text-white font-medium transition-colors"
              style={{ backgroundColor: "#202A36" }}
            >
              Enviar mensagem
            </button>
            {sent && (
              <p className="text-sm text-green-700">Obrigado! Em breve entraremos em contato.</p>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
