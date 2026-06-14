import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AeroSync Consultoria — Home" },
      { name: "description", content: "Consultoria aeronáutica premium. Sua dedicação merece reconhecimento." },
      { property: "og:title", content: "AeroSync Consultoria — Home" },
      { property: "og:description", content: "Consultoria aeronáutica premium. Sua dedicação merece reconhecimento." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <section className="relative h-[calc(100vh-72px)] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-700 tracking-wider mb-4 uppercase">
              Consultoria Aeronáutica
            </p>
            <h1 className="leading-none tracking-tighter">
              <span className="block text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500">
                Premium.
              </span>
              <span
                className="block text-6xl md:text-7xl lg:text-8xl font-normal"
                style={{ color: "#202A36", marginTop: "-12px" }}
              >
                Acessível.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mt-6 mb-6 max-w-2xl mx-auto">
              Sua dedicação merece reconhecimento.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/servicos"
                className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors"
              >
                Descobrir
              </Link>
              <Link
                to="/contato"
                className="px-4 py-2 rounded-full text-white font-medium transition-colors"
                style={{ backgroundColor: "#202A36" }}
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
