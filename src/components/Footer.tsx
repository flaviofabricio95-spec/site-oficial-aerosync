import logo from "@/assets/aerosync-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-[#202A36] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo.url} alt="AeroSync Consultoria" className="h-10 w-auto bg-white rounded-md p-1" />
          <span className="font-semibold text-white">AeroSync Consultoria</span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} AeroSync Consultoria. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
