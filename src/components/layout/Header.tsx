import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const isV2 = location.pathname.startsWith('/v2');
  const isV3 = location.pathname.startsWith('/v3');
  const isV1 = !isV2 && !isV3;

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="glass-panel px-6 py-3 rounded-full flex items-center gap-8">
        <span className="font-sans font-medium tracking-tight text-white/90 text-lg">RIA</span>
        <div className="w-[1px] h-4 bg-white/20" />
        <div className="flex gap-6 text-[10px] md:text-xs uppercase tracking-[0.25em] font-mono text-zinc-400 font-medium">
          <Link to="/v1" className={isV1 ? "text-white" : "hover:text-white transition-colors text-zinc-500"}>V1</Link>
          <Link to="/v2" className={isV2 ? "text-white" : "hover:text-white transition-colors text-zinc-500"}>V2</Link>
          <Link to="/v3" className={isV3 ? "text-cyan-400" : "hover:text-cyan-400 transition-colors text-zinc-500"}>V3</Link>
          <div className="w-[1px] h-4 bg-white/10 mx-2" />
          <a href="#" className="hover:text-white transition-colors">Vision</a>
          <a href="#" className="hover:text-white transition-colors">Staging</a>
          <a href="#" className="hover:text-white transition-colors">Lighting</a>
          {(isV2 || isV3) && <a href="#" className="hover:text-white transition-colors text-cyan-400">Command Center</a>}
        </div>
      </nav>
    </header>
  );
}
