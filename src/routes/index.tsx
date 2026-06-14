import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AeroSync — Consultoria Aeronáutica ANAC" },
      { name: "description", content: "Certificações, auditorias e SGSO/SMS com precisão. Consultoria aeronáutica em conformidade total com a ANAC." },
      { property: "og:title", content: "AeroSync — Consultoria Aeronáutica ANAC" },
      { property: "og:description", content: "Sua operação aérea em conformidade total com a ANAC." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <section className="relative h-screen overflow-hidden" style={{ background: "#f9fafb" }}>
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 z-[1]" style={{ background: "rgba(255,255,255,0.10)" }} />

        <div className="relative z-10 h-full flex flex-col">
          <Navbar variant="hero" />
          <div className="flex-1 flex items-center justify-center px-6 -mt-20">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4" style={{ color: "#4B5563" }}>
                Consultoria Aeronáutica
              </p>
              <h1 className="leading-none">
                <span
                  className="block font-normal"
                  style={{
                    fontSize: "clamp(3.5rem,9vw,6rem)",
                    color: "#6B7280",
                    letterSpacing: "-0.04em",
                  }}
                >
                  Expertise.
                </span>
                <span
                  className="block font-normal"
                  style={{
                    fontSize: "clamp(3.5rem,9vw,6rem)",
                    color: "#202A36",
                    letterSpacing: "-0.04em",
                    marginTop: "-10px",
                  }}
                >
                  Resultados.
                </span>
              </h1>
              <p
                className="mt-5 mb-7 mx-auto leading-relaxed"
                style={{ color: "#4B5563", maxWidth: "560px", fontSize: "clamp(1rem,2.5vw,1.2rem)" }}
              >
                Sua operação aérea em conformidade total com a ANAC. Certificações, auditorias e SGSO com precisão e segurança.
              </p>
              <div className="flex gap-3.5 justify-center flex-wrap">
                <Link
                  to="/servicos"
                  className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
                  style={{ background: "#D1D5DB", color: "#1F2937" }}
                >
                  Nossos Serviços
                </Link>
                <Link
                  to="/contato"
                  className="px-6 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
                  style={{ background: "#202A36" }}
                >
                  Fale Conosco
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
