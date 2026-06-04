import CinematicHero from './components/CinematicHero';
import ProductReveal from './components/ProductReveal';

export default function App() {
  return (
    <div className="cinematic-grain">
      <CinematicHero />
      <ProductReveal />
      <footer className="bg-black py-12 text-center border-t border-zinc-900">
        <p className="text-zinc-600 tracking-[0.3em] text-xs uppercase">Maison · Est. 2026</p>
      </footer>
    </div>
  );
}