import { useEffect, useRef } from 'react';

export default function FireAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;

    function spawnEmber() {
      if (!container) return;
      const ember = document.createElement('div');
      const x = 20 + Math.random() * 60;
      const size = 2 + Math.random() * 5;
      const duration = 1.5 + Math.random() * 2.5;
      const drift = (Math.random() - 0.5) * 80;
      const opacity = 0.6 + Math.random() * 0.4;

      ember.style.cssText = `
        position: absolute;
        bottom: 30%;
        left: ${x}%;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: radial-gradient(circle, #fff7e6 0%, #ff9500 40%, #ff4500 100%);
        box-shadow: 0 0 ${size * 2}px ${size}px rgba(255, 149, 0, 0.8);
        pointer-events: none;
        animation: emberRise ${duration}s ease-out forwards;
        --drift: ${drift}px;
        opacity: ${opacity};
        z-index: 10;
      `;

      container.appendChild(ember);

      setTimeout(() => {
        if (container.contains(ember)) {
          container.removeChild(ember);
        }
      }, duration * 1000 + 100);
    }

    intervalId = setInterval(spawnEmber, 120);

    return () => {
      if (intervalId !== null) clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '280px',
        height: '320px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      {/* Ground glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '260px', height: '40px',
        background: 'radial-gradient(ellipse, rgba(220,80,10,0.5) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(8px)',
        animation: 'groundGlow 1.8s ease-in-out infinite alternate',
      }} />

      {/* Logs */}
      <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '180px', height: '28px' }}>
        <div style={{ position: 'absolute', width: '110px', height: '14px', bottom: 0, left: '10px', transform: 'rotate(-20deg)', borderRadius: '7px', background: 'linear-gradient(180deg, #3a2010 0%, #1a0e08 100%)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.6)' }} />
        <div style={{ position: 'absolute', width: '110px', height: '14px', bottom: 0, right: '10px', transform: 'rotate(20deg)', borderRadius: '7px', background: 'linear-gradient(180deg, #3a2010 0%, #1a0e08 100%)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.6)' }} />
        <div style={{ position: 'absolute', width: '90px', height: '14px', bottom: '8px', left: '50%', transform: 'translateX(-50%)', borderRadius: '7px', background: 'linear-gradient(180deg, #3a2010 0%, #1a0e08 100%)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.6)' }} />
      </div>

      {/* Coals */}
      <div style={{ position: 'absolute', bottom: '18px', left: '50%', transform: 'translateX(-50%)', width: '120px', height: '16px' }}>
        <div style={{ position: 'absolute', width: '28px', height: '10px', left: '15px', bottom: '2px', borderRadius: '50%', background: 'radial-gradient(ellipse, #ffb830 0%, #e85010 50%, #5a1e08 100%)', animation: 'coalGlow 1.2s ease-in-out infinite alternate' }} />
        <div style={{ position: 'absolute', width: '36px', height: '12px', left: '42px', bottom: 0, borderRadius: '50%', background: 'radial-gradient(ellipse, #ffd060 0%, #f06020 50%, #6a2810 100%)', animation: 'coalGlow 1.2s ease-in-out infinite alternate 0.4s' }} />
        <div style={{ position: 'absolute', width: '24px', height: '9px', right: '10px', bottom: '3px', borderRadius: '50%', background: 'radial-gradient(ellipse, #ffaa28 0%, #d84808 50%, #501808 100%)', animation: 'coalGlow 1.2s ease-in-out infinite alternate 0.8s' }} />
      </div>

      {/* Back flames */}
      <div style={{ position: 'absolute', bottom: '22px', left: '50%', transform: 'translateX(-50%)', width: '160px', height: '260px', zIndex: 1 }}>
        <div style={{ position: 'absolute', bottom: 0, left: '45px', width: '70px', height: '200px', borderRadius: '50% 50% 20% 20% / 60% 60% 40% 40%', background: 'linear-gradient(0deg, #8b2500 0%, #c04000 30%, #d06000 60%, rgba(180,120,40,0.3) 100%)', filter: 'blur(2px)', opacity: 0.7, animation: 'flameFlicker1 2.1s ease-in-out infinite', transformOrigin: 'bottom center' }} />
        <div style={{ position: 'absolute', bottom: 0, left: '20px', width: '55px', height: '170px', borderRadius: '50% 50% 20% 20% / 60% 60% 40% 40%', background: 'linear-gradient(0deg, #8b2500 0%, #b03800 40%, rgba(160,100,30,0.4) 100%)', filter: 'blur(2px)', opacity: 0.6, animation: 'flameFlicker2 1.8s ease-in-out infinite', transformOrigin: 'bottom center' }} />
        <div style={{ position: 'absolute', bottom: 0, right: '20px', width: '55px', height: '160px', borderRadius: '50% 50% 20% 20% / 60% 60% 40% 40%', background: 'linear-gradient(0deg, #8b2500 0%, #b03800 40%, rgba(160,100,30,0.4) 100%)', filter: 'blur(2px)', opacity: 0.6, animation: 'flameFlicker3 2.4s ease-in-out infinite', transformOrigin: 'bottom center' }} />
      </div>

      {/* Mid flames */}
      <div style={{ position: 'absolute', bottom: '22px', left: '50%', transform: 'translateX(-50%)', width: '160px', height: '260px', zIndex: 2 }}>
        <div style={{ position: 'absolute', bottom: 0, left: '40px', width: '80px', height: '180px', borderRadius: '50% 50% 20% 20% / 60% 60% 40% 40%', background: 'linear-gradient(0deg, #a03000 0%, #d06000 35%, #e09030 65%, rgba(220,160,60,0.2) 100%)', filter: 'blur(1.5px)', animation: 'flameFlicker2 1.6s ease-in-out infinite', transformOrigin: 'bottom center' }} />
        <div style={{ position: 'absolute', bottom: 0, left: '15px', width: '60px', height: '150px', borderRadius: '50% 50% 20% 20% / 60% 60% 40% 40%', background: 'linear-gradient(0deg, #a03000 0%, #d06000 40%, rgba(200,130,40,0.3) 100%)', filter: 'blur(1.5px)', animation: 'flameFlicker1 2.2s ease-in-out infinite', transformOrigin: 'bottom center' }} />
        <div style={{ position: 'absolute', bottom: 0, right: '15px', width: '60px', height: '140px', borderRadius: '50% 50% 20% 20% / 60% 60% 40% 40%', background: 'linear-gradient(0deg, #a03000 0%, #d06000 40%, rgba(200,130,40,0.3) 100%)', filter: 'blur(1.5px)', animation: 'flameFlicker3 1.9s ease-in-out infinite', transformOrigin: 'bottom center' }} />
        <div style={{ position: 'absolute', bottom: 0, left: '57px', width: '45px', height: '120px', borderRadius: '50% 50% 20% 20% / 60% 60% 40% 40%', background: 'linear-gradient(0deg, #b04000 0%, #e07020 50%, rgba(230,160,60,0.2) 100%)', filter: 'blur(1px)', animation: 'flameFlicker4 1.4s ease-in-out infinite', transformOrigin: 'bottom center' }} />
      </div>

      {/* Front flames */}
      <div style={{ position: 'absolute', bottom: '22px', left: '50%', transform: 'translateX(-50%)', width: '160px', height: '260px', zIndex: 3 }}>
        <div style={{ position: 'absolute', bottom: 0, left: '47px', width: '65px', height: '130px', borderRadius: '50% 50% 20% 20% / 60% 60% 40% 40%', background: 'linear-gradient(0deg, #c05010 0%, #e08030 40%, rgba(240,190,80,0.3) 100%)', filter: 'blur(1px)', animation: 'flameFlicker1 1.3s ease-in-out infinite', transformOrigin: 'bottom center' }} />
        <div style={{ position: 'absolute', bottom: 0, left: '25px', width: '45px', height: '100px', borderRadius: '50% 50% 20% 20% / 60% 60% 40% 40%', background: 'linear-gradient(0deg, #b84808 0%, #d87020 50%, rgba(230,170,60,0.2) 100%)', filter: 'blur(1px)', animation: 'flameFlicker3 1.7s ease-in-out infinite', transformOrigin: 'bottom center' }} />
        <div style={{ position: 'absolute', bottom: 0, right: '25px', width: '45px', height: '95px', borderRadius: '50% 50% 20% 20% / 60% 60% 40% 40%', background: 'linear-gradient(0deg, #b84808 0%, #d87020 50%, rgba(230,170,60,0.2) 100%)', filter: 'blur(1px)', animation: 'flameFlicker2 2s ease-in-out infinite', transformOrigin: 'bottom center' }} />
      </div>

      {/* Core */}
      <div style={{ position: 'absolute', bottom: '22px', left: '50%', transform: 'translateX(-50%)', width: '50px', height: '70px', borderRadius: '50% 50% 20% 20% / 60% 60% 40% 40%', background: 'linear-gradient(0deg, #fff0c0 0%, #fffae0 40%, rgba(255,240,180,0.5) 100%)', filter: 'blur(3px)', animation: 'coreFlicker 0.9s ease-in-out infinite', zIndex: 4 }} />

      {/* Smoke */}
      <div style={{ position: 'absolute', bottom: '60%', left: '40%', width: '20px', height: '20px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,60,50,0.3) 0%, transparent 70%)', filter: 'blur(6px)', animation: 'smokeRise 3.5s ease-out infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '65%', left: '55%', width: '20px', height: '20px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,60,50,0.3) 0%, transparent 70%)', filter: 'blur(6px)', animation: 'smokeRise 4s ease-out infinite 1.2s', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '58%', left: '48%', width: '20px', height: '20px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,60,50,0.3) 0%, transparent 70%)', filter: 'blur(6px)', animation: 'smokeRise 3.2s ease-out infinite 2.1s', pointerEvents: 'none' }} />
    </div>
  );
}
