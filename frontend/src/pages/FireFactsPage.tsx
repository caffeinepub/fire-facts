import FireAnimation from '../components/FireAnimation';
import FactDisplay from '../components/FactDisplay';

const appId = encodeURIComponent(
  typeof window !== 'undefined' ? window.location.hostname : 'fire-facts'
);
const caffeineUrl = `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`;

export default function FireFactsPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#0a0806]">
      {/* Background radial glow */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(180,80,10,0.18)_0%,transparent_70%)]" />

      {/* Header */}
      <header className="relative z-10 px-4 pb-4 pt-10 text-center">
        <div className="mb-2 flex items-center justify-center gap-3">
          <span className="animate-pulse text-4xl drop-shadow-[0_0_12px_rgba(251,146,60,0.8)]">🔥</span>
          <h1
            className="font-display m-0 bg-gradient-to-b from-yellow-100 via-orange-300 to-orange-700 bg-clip-text text-5xl font-black leading-tight tracking-widest text-transparent drop-shadow-[0_0_30px_rgba(251,146,60,0.5)] md:text-6xl"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Fire Facts
          </h1>
          <span className="animate-pulse text-4xl drop-shadow-[0_0_12px_rgba(251,146,60,0.8)]" style={{ animationDelay: '1s' }}>🔥</span>
        </div>
        <p className="m-0 text-sm font-light uppercase tracking-[0.25em] text-orange-800">
          Ignite your curiosity
        </p>
      </header>

      {/* Main */}
      <main className="relative z-10 flex flex-1 flex-col items-center gap-0 px-4 pb-8">
        {/* Fire animation */}
        <div className="relative z-20 -mb-8 flex w-full max-w-sm justify-center">
          <FireAnimation />
        </div>

        {/* Fact display */}
        <section className="relative z-30 w-full max-w-xl">
          <FactDisplay />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto border-t border-orange-950/50 px-4 pb-8 pt-6 text-center">
        <p className="m-0 mb-1 flex flex-wrap items-center justify-center gap-1 text-sm text-orange-950">
          <span>Built with</span>
          <span className="drop-shadow-[0_0_4px_rgba(251,146,60,0.7)]">🔥</span>
          <span>using</span>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-700 transition-colors hover:text-orange-500 hover:underline"
          >
            caffeine.ai
          </a>
        </p>
        <p className="m-0 text-xs text-orange-950/50">
          © {new Date().getFullYear()} Fire Facts
        </p>
      </footer>
    </div>
  );
}
