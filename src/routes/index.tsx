import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkyElite — Premium Private Jets" },
      { name: "description", content: "Premium. Accessible. Private jet charters that recognize your dedication." },
      { property: "og:title", content: "SkyElite — Premium Private Jets" },
      { property: "og:description", content: "Premium. Accessible. Private jet charters that recognize your dedication." },
    ],
  }),
  component: Index,
});

const NAV_ITEMS = ["Start", "Story", "Rates", "Benefits", "FAQ"];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Inter', sans-serif" }}>
      <section className="relative h-screen overflow-hidden">
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

        <div className="relative h-full flex flex-col">
          <nav className="max-w-7xl mx-auto w-full px-8 py-6">
            <div className="flex items-center justify-between">
              <a href="#" className="text-2xl font-semibold text-gray-900">SkyElite</a>
              <ul className="hidden md:flex items-center gap-8">
                {NAV_ITEMS.map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-900 hover:text-gray-700 transition-colors font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setOpen((v) => !v)}
                className="md:hidden text-gray-900"
                aria-label="Toggle menu"
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {open && (
              <div className="md:hidden mt-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg p-4">
                <ul className="flex flex-col gap-3">
                  {NAV_ITEMS.map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="block text-gray-900 hover:text-gray-700 transition-colors font-medium"
                        onClick={() => setOpen(false)}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>

          <div className="flex-1 flex items-center justify-center px-6">
            <div className="text-center -mt-80">
              <p className="text-sm font-semibold text-gray-600 tracking-wider mb-4 uppercase">
                Private Jets
              </p>
              <h1 className="leading-none tracking-tighter">
                <span className="block text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500">
                  Premium.
                </span>
                <span
                  className="block text-6xl md:text-7xl lg:text-8xl font-normal"
                  style={{ color: "#202A36", marginTop: "-12px" }}
                >
                  Accessible.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mt-6 mb-6 max-w-2xl mx-auto">
                Your dedication deserves recognition.
              </p>
              <div className="flex items-center justify-center gap-4">
                <button className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors">
                  Discover
                </button>
                <button
                  className="px-4 py-2 rounded-full text-white font-medium transition-colors"
                  style={{ backgroundColor: "#202A36" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a2229")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#202A36")}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
