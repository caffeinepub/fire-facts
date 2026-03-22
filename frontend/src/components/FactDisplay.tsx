import { useState, useCallback } from 'react';
import { useRandomFact } from '../hooks/useQueries';
import { Flame, Loader2, Sparkles } from 'lucide-react';

export default function FactDisplay() {
  const { mutate: fetchFact, isPending, isError } = useRandomFact();
  const [displayedFact, setDisplayedFact] = useState<string | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleFetchFact = useCallback(() => {
    fetchFact(undefined, {
      onSuccess: (newFact: string) => {
        setVisible(false);
        setTimeout(() => {
          setDisplayedFact(newFact);
          setAnimKey((k) => k + 1);
          setVisible(true);
        }, 80);
      },
    });
  }, [fetchFact]);

  return (
    <div className="w-full">
      <div
        className="relative overflow-hidden rounded-2xl border p-8"
        style={{
          background: 'linear-gradient(145deg, #1a0e06 0%, #0e0804 100%)',
          borderColor: 'rgba(180,80,10,0.4)',
          boxShadow: '0 0 0 1px rgba(180,80,10,0.1), 0 4px 24px rgba(0,0,0,0.5), 0 0 60px rgba(140,60,10,0.08), inset 0 1px 0 rgba(200,100,20,0.15)',
        }}
      >
        {/* Top shimmer line */}
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(220,120,20,0.6), transparent)' }}
        />

        {/* Header */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <Sparkles size={20} style={{ color: '#d06010', filter: 'drop-shadow(0 0 4px rgba(200,90,10,0.6))' }} />
          <span
            className="text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ fontFamily: 'Cinzel, serif', color: '#a05020' }}
          >
            Random Fact
          </span>
          <Sparkles size={20} style={{ color: '#d06010', filter: 'drop-shadow(0 0 4px rgba(200,90,10,0.6))' }} />
        </div>

        {/* Content area */}
        <div className="mb-7 flex min-h-[120px] items-center justify-center px-2">
          {!displayedFact && !isPending && !isError && (
            <p className="m-0 text-center text-base italic" style={{ color: '#5a3010' }}>
              Click the button below to ignite a random fact!
            </p>
          )}

          {isPending && (
            <div className="flex flex-col items-center gap-3" style={{ color: '#a05020' }}>
              <Loader2 size={28} style={{ color: '#d06010', animation: 'spin 1s linear infinite' }} />
              <span className="text-sm tracking-wide">Stoking the flames...</span>
            </div>
          )}

          {isError && !isPending && (
            <p className="m-0 text-center text-base" style={{ color: '#c04020' }}>
              The fire went out! Try again.
            </p>
          )}

          {displayedFact && !isPending && (
            <p
              key={animKey}
              className="m-0 text-center leading-relaxed"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                color: '#f0d0a0',
                animation: visible ? 'factReveal 0.5s cubic-bezier(0.22,1,0.36,1) forwards' : 'none',
                opacity: visible ? 1 : 0,
              }}
            >
              <span style={{ color: '#c06020', fontSize: '1.4em', fontFamily: 'Cinzel, serif', lineHeight: 0, verticalAlign: '-0.2em', margin: '0 0.1em' }}>&ldquo;</span>
              {displayedFact}
              <span style={{ color: '#c06020', fontSize: '1.4em', fontFamily: 'Cinzel, serif', lineHeight: 0, verticalAlign: '-0.2em', margin: '0 0.1em' }}>&rdquo;</span>
            </p>
          )}
        </div>

        {/* Button */}
        <button
          onClick={handleFetchFact}
          disabled={isPending}
          aria-label="Get a random fact"
          className="relative flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border-none py-4 text-base font-bold uppercase tracking-widest transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70"
          style={{
            fontFamily: 'Cinzel, serif',
            color: '#1a0800',
            background: 'linear-gradient(135deg, #ffd060 0%, #e07020 35%, #c04808 65%, #902000 100%)',
            boxShadow: '0 0 0 1px rgba(200,100,20,0.4), 0 4px 16px rgba(160,60,10,0.5), 0 0 40px rgba(180,80,10,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
          }}
        >
          {isPending ? (
            <>
              <Loader2 size={18} style={{ animation: 'spin 1s linear infinite', flexShrink: 0 }} />
              <span>Burning...</span>
            </>
          ) : (
            <>
              <Flame size={18} style={{ flexShrink: 0 }} />
              <span>{displayedFact ? 'Another Fact!' : 'Ignite a Fact!'}</span>
              <Flame size={18} style={{ flexShrink: 0 }} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
