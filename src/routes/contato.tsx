import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";



export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — AeroSync Consultoria" },
      { name: "description", content: "Fale com a AeroSync. Análise preliminar do seu projeto em até 24h úteis." },
      { property: "og:title", content: "Contato — AeroSync Consultoria" },
      { property: "og:description", content: "Vamos iniciar sua jornada regulatória." },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

const PHONES = [
  { display: "+55 (11) 95951-2487", wa: "5511959512487" },
  { display: "+55 (74) 99948-1092", wa: "5574999481092" },
];

const INFO: { Icon: React.ElementType; label: string; value?: string; phones?: typeof PHONES }[] = [
  { Icon: Mail, label: "E-mail", value: "aerosync.consultoria@gmail.com" },
  { Icon: Phone, label: "WhatsApp / Telefone", phones: PHONES },
];


function Contato() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif", background: "#F8F9FB" }}>
      <Navbar />
      <main className="flex-1 py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14">
            <span
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "rgba(232,98,26,0.08)", border: "1px solid rgba(232,98,26,0.2)", color: "#E8621A" }}
            >
              Fale Conosco
            </span>
            <h1
              className="font-extrabold leading-tight mb-4 uppercase"
              style={{ fontFamily: "'Playfair Display', serif", color: "#1E3A5F", fontSize: "clamp(2rem,4vw,2.8rem)" }}
            >
              VAMOS INICIAR SUA&nbsp;<em className="not-italic" style={{ color: "#E8621A" }}>JORNADA REGULATÓRIA ?</em>
            </h1>
            <p className="text-base leading-relaxed max-w-[600px]" style={{ color: "#6B7A90" }}>
              Entre em contato. Respondemos em até 24h úteis com uma análise preliminar do seu projeto.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
            <div>
              {INFO.map((item) => (
                <div key={item.label} className="flex gap-4 items-start mb-7">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#1E3A5F" }}
                  >
                    <item.Icon size={20} strokeWidth={1.75} color="#E8621A" />
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#E8621A" }}>
                      {item.label}
                    </div>
                    <div className="text-sm font-medium whitespace-pre-line" style={{ color: "#3A4A5C" }}>
                      {item.phones ? (
                        <div className="flex flex-col gap-1">
                          {item.phones.map((p) => (
                            <a
                              key={p.wa}
                              href={`https://wa.me/${p.wa}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#E8621A] transition-colors"
                            >
                              {p.display}
                            </a>
                          ))}
                        </div>
                      ) : (
                        item.value
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <form
              action="https://formspree.io/f/maqgvyjd"
              method="POST"
              className="bg-white rounded-3xl p-10 shadow-[0_4px_32px_rgba(30,58,95,0.08)]"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nome Completo *">
                  <input required type="text" name="name" placeholder="Seu nome" className={inputClass} />
                </Field>
                <Field label="Empresa / Organização">
                  <input type="text" name="empresa" placeholder="Nome da empresa" className={inputClass} />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="E-mail *">
                  <input required type="email" name="email" placeholder="seu@email.com" className={inputClass} />
                </Field>
                <Field label="Telefone / WhatsApp">
                  <input type="tel" name="telefone" placeholder="(00) 00000-0000" className={inputClass} />
                </Field>
              </div>
              <Field label="Serviço de Interesse">
                <select className={inputClass} name="servico" defaultValue="">
                  <option value="">Selecione um serviço…</option>
                  <option>Certificação de Táxi Aéreo (RBAC 135)</option>
                  <option>Oficina de Manutenção (RBAC 145)</option>
                  <option>Centro de Instrução (RBAC 141)</option>
                  <option>Auditoria Interna / Externa</option>
                  <option>Consultoria SGSO</option>
                  <option>Assessoria Regulatória Geral</option>
                  <option>RBAC 133</option>
                  <option>RBAC 91</option>
                  <option>Treinamentos</option>
                  <option>Outro</option>
                </select>
              </Field>
              <Field label="Mensagem">
                <textarea
                  required
                  name="message"
                  placeholder="Descreva sua necessidade ou situação atual. Quanto mais detalhe, melhor podemos ajudá-lo."
                  className={`${inputClass} min-h-[120px] resize-y`}
                />
              </Field>
              <button
                type="submit"
                className="w-full text-white font-bold text-base py-4 rounded-xl transition-all hover:-translate-y-0.5"
                style={{ background: "#E8621A" }}
              >
                Enviar Mensagem ✈
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:bg-white focus:shadow-[0_0_0_3px_rgba(30,58,95,0.08)]";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <label className="block text-xs font-semibold mb-2" style={{ color: "#1E3A5F" }}>
        {label}
      </label>
      <div
        className="rounded-xl"
        style={{ border: "1px solid #D9E0EA", background: "#F8F9FB" }}
      >
        {children}
      </div>
    </div>
  );
}
