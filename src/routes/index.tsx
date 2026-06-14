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
          <div className="flex-1 flex items-start justify-center px-6 pt-32 md:pt-40">
            <div className="text-center">
              <p className="font-semibold tracking-[0.18em] uppercase mb-6 whitespace-pre-line" style={{ color: "#202A36", fontSize: "clamp(1rem,2.4vw,1.6rem)", lineHeight: 1.15 }}>
                AEROSYNC{"\n"}CONSULTORIA AERONÁUTICA
              </p>
              <h1
                className="font-normal uppercase leading-[0.95]"
                style={{
                  fontSize: "clamp(2.75rem,8vw,5.5rem)",
                  color: "#202A36",
                  letterSpacing: "-0.03em",
                }}
              >
                Sua operação aérea em conformidade{" "}
                <span style={{ color: "#E8621A" }}>TOTAL</span>
              </h1>

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
