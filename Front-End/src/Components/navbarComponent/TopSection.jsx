import React, { useRef, useEffect, useCallback, useState } from "react";
import "../../pages/Styles/TopSectionStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PROMOS = [
  { titre: "La marketplace des pièces auto", description: "Achetez et vendez des pièces automobiles d'occasion ou neuves entre particuliers et professionnels", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80&fit=crop", overlay: "rgba(0,0,0,0.52)" },
  { titre: "Devenez vendeur en 2 minutes", description: "Publiez vos annonces gratuitement et touchez des milliers d'acheteurs partout au Maroc", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80&fit=crop", overlay: "rgba(10,20,40,0.58)" },
  { titre: "Des milliers de références disponibles", description: "Moteurs, carrosserie, freinage, suspension — trouvez la pièce exacte pour votre véhicule", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80&fit=crop", overlay: "rgba(5,15,10,0.55)" },
  { titre: "Vendeurs particuliers & professionnels", description: "Garagistes, casses auto ou particuliers — notre plateforme s'adapte à tous les profils de vendeurs", image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1400&q=80&fit=crop", overlay: "rgba(0,0,0,0.54)" },
  { titre: "Recherche rapide par véhicule", description: "Entrez votre marque, modèle et année — on affiche uniquement les pièces compatibles avec votre voiture", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=80&fit=crop", overlay: "rgba(0,10,30,0.56)" },
  { titre: "Pièces vérifiées, transactions sécurisées", description: "Achetez en toute confiance grâce à nos vendeurs notés et notre système de paiement sécurisé", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80&fit=crop", overlay: "rgba(0,0,0,0.50)" },
];

// ms timings
const T_DRIVE_IN      = 1800;
const T_SMOKE_SHOW    = 400;
const T_MECH_WALK     = 700;
const T_FIX           = 2400;
const T_MECH_LEAVE    = 600;
const T_DRIVE_OUT     = 1500;
const T_PAUSE         = 350;

// Car stops at this fraction of road width (left edge of car)
const CAR_STOP_FRAC = 0.38;
const CAR_W = 230; // px width of car wrapper

const SPOKES = [0, 60, 120, 180, 240, 300];

/* ── WHEEL ── */
const Wheel = ({ cx, cy }) => (
  <g>
    <ellipse cx={cx} cy={cy+3} rx="16" ry="4.5" fill="rgba(0,0,0,0.25)" />
    <circle cx={cx} cy={cy} r="15" fill="#111" />
    <circle cx={cx} cy={cy} r="13.5" fill="#181818" />
    <path d={`M${cx-14} ${cy-4} A15 15 0 0 1 ${cx+14} ${cy-4}`} stroke="rgba(255,255,255,0.06)" strokeWidth="3" fill="none"/>
    <circle cx={cx} cy={cy} r="10" fill="url(#rimGrad)" />
    {SPOKES.map((deg,i) => {
      const rad=(deg-90)*Math.PI/180, m1=(deg-98)*Math.PI/180, m2=(deg-82)*Math.PI/180;
      const ox=cx+9.5*Math.cos(rad), oy=cy+9.5*Math.sin(rad);
      const i1x=cx+4*Math.cos(m1), i1y=cy+4*Math.sin(m1);
      const i2x=cx+4*Math.cos(m2), i2y=cy+4*Math.sin(m2);
      return <path key={i} d={`M${i1x} ${i1y} L${ox} ${oy} L${i2x} ${i2y}`} fill="none" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round"/>;
    })}
    <circle cx={cx} cy={cy} r="5.5" fill="#2a2a2a" />
    <circle cx={cx} cy={cy} r="3.5" fill="#3a3a3a" />
    <path d={`M${cx-9} ${cy-6} L${cx-12} ${cy-5} L${cx-12} ${cy+1} L${cx-9} ${cy+2} Z`} fill="#cc0000"/>
    <rect x={cx-12} y={cy-4} width="3" height="5" rx="0.5" fill="#aa0000"/>
    <circle cx={cx} cy={cy} r="2.5" fill="#ccc" />
    <circle cx={cx} cy={cy} r="1.5" fill="#888" />
  </g>
);

/* ── CAR SVG ── */
const CarSVG = () => (
  <svg viewBox="0 0 220 78" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <defs>
      <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3a3a3a"/><stop offset="35%" stopColor="#1c1c1c"/><stop offset="100%" stopColor="#080808"/>
      </linearGradient>
      <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2e2e2e"/><stop offset="100%" stopColor="#0a0a0a"/>
      </linearGradient>
      <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="rgba(180,220,255,0.72)"/><stop offset="100%" stopColor="rgba(60,130,200,0.30)"/>
      </linearGradient>
      <linearGradient id="sillGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#222"/><stop offset="100%" stopColor="#050505"/>
      </linearGradient>
      <linearGradient id="shineGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(255,255,255,0.42)"/><stop offset="100%" stopColor="rgba(255,255,255,0)"/>
      </linearGradient>
      <linearGradient id="chromeGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ddd"/><stop offset="50%" stopColor="#888"/><stop offset="100%" stopColor="#ccc"/>
      </linearGradient>
      <radialGradient id="rimGrad" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#e0e0e0"/><stop offset="60%" stopColor="#666"/><stop offset="100%" stopColor="#222"/>
      </radialGradient>
      <radialGradient id="hlGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(255,255,230,1)"/><stop offset="100%" stopColor="rgba(200,220,255,0)"/>
      </radialGradient>
      <linearGradient id="amgRed" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#cc0000"/><stop offset="100%" stopColor="#ff2200"/>
      </linearGradient>
      <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="1.8" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <ellipse cx="112" cy="74" rx="95" ry="5.5" fill="rgba(0,0,0,0.28)" />
    <path d="M17 54 L17 64 L32 64 L32 54 Z" fill="#111" />
    <rect x="18" y="55" width="3" height="8" rx="0.5" fill="#0a0a0a" />
    <rect x="22.5" y="55" width="3" height="8" rx="0.5" fill="#0a0a0a" />
    <rect x="27" y="55" width="3" height="8" rx="0.5" fill="#0a0a0a" />
    <ellipse cx="20" cy="63" rx="3" ry="1.8" fill="#252525"/><ellipse cx="20" cy="63" rx="1.8" ry="1" fill="#111"/>
    <ellipse cx="27" cy="63" rx="3" ry="1.8" fill="#252525"/><ellipse cx="27" cy="63" rx="1.8" ry="1" fill="#111"/>
    <rect x="17" y="52" width="15" height="2" rx="1" fill="url(#chromeGrad)" />
    <path d="M20 55 L196 55 L202 62 L16 62 Z" fill="url(#sillGrad)" />
    <path d="M35 55 L175 55 L177 57 L33 57 Z" fill="url(#amgRed)" opacity="0.85" />
    <path d="M18 55 L18 36 L28 26 L55 18 L90 13 L140 13 L168 17 L188 27 L198 38 L198 55 Z" fill="url(#bodyGrad)" />
    <path d="M50 19 L90 13 L140 13 L165 17 L148 24 L90 24 L58 24 Z" fill="url(#shineGrad)" />
    <path d="M25 47 L65 43 L155 43 L185 45 L198 50 L18 50 Z" fill="rgba(0,0,0,0.28)" />
    <path d="M62 24 L170 24 L172 26 L60 26 Z" fill="url(#chromeGrad)" />
    <path d="M158 34 L174 30 L174 42 L158 44 Z" fill="#141414" />
    <rect x="159" y="31" width="2" height="12" rx="0.5" fill="#0a0a0a" />
    <rect x="163" y="31" width="2" height="12" rx="0.5" fill="#0a0a0a" />
    <rect x="167" y="31" width="2" height="12" rx="0.5" fill="#0a0a0a" />
    <rect x="171" y="31" width="2" height="12" rx="0.5" fill="#0a0a0a" />
    <path d="M62 24 L75 11 L96 6 L140 6 L160 10 L172 24 Z" fill="url(#roofGrad)" />
    <path d="M82 8 L96 6 L140 6 L156 9 L138 14 L96 14 Z" fill="rgba(255,255,255,0.16)" />
    <path d="M75 11 L160 10 L162 12 L74 13 Z" fill="url(#chromeGrad)" opacity="0.7" />
    <line x1="75" y1="11" x2="62" y2="24" stroke="#111" strokeWidth="3.5" />
    <path d="M160 10 L172 24 L168 24 L158 12 Z" fill="#0d0d0d" />
    <path d="M78 12 L65 23 L116 23 L113 8 L97 7 Z" fill="url(#glassGrad)" />
    <path d="M82 12 L72 21 L95 21 L94 9 Z" fill="rgba(255,255,255,0.15)" />
    <rect x="117" y="7" width="3" height="17" fill="#0d0d0d" />
    <path d="M121 8 L120 23 L165 23 L168 14 L160 10 Z" fill="url(#glassGrad)" />
    <path d="M124 9 L123 21 L148 21 L151 11 Z" fill="rgba(255,255,255,0.12)" />
    <path d="M166 14 L168 24 L172 24 L170 16 Z" fill="url(#glassGrad)" opacity="0.6" />
    <rect x="105" y="39" width="18" height="3" rx="1.5" fill="#2a2a2a" />
    <rect x="106" y="39.5" width="16" height="2" rx="1" fill="rgba(255,255,255,0.18)" />
    <path d="M192 36 L210 34 L210 60 L192 60 Z" fill="#151515" />
    <path d="M194 38 L208 36 L208 50 L194 51 Z" fill="#0a0a0a" />
    <line x1="196" y1="38" x2="195.5" y2="51" stroke="#2a2a2a" strokeWidth="1.2" />
    <line x1="199" y1="37.5" x2="198.5" y2="51" stroke="#2a2a2a" strokeWidth="1.2" />
    <line x1="202" y1="37.2" x2="201.5" y2="51" stroke="#2a2a2a" strokeWidth="1.2" />
    <line x1="205" y1="37" x2="204.5" y2="51" stroke="#2a2a2a" strokeWidth="1.2" />
    <path d="M194 38 L208 36 L208 37 L194 39 Z" fill="url(#chromeGrad)" opacity="0.6" />
    <path d="M194 50 L208 49 L208 50 L194 51 Z" fill="url(#chromeGrad)" opacity="0.4" />
    <path d="M194 52 L208 50.5 L208 57 L194 58 Z" fill="#0a0a0a" />
    <path d="M192 57 L212 55 L212 62 L192 62 Z" fill="#0d0d0d" />
    <path d="M192 57 L212 55 L212 56.5 L192 58.5 Z" fill="url(#amgRed)" opacity="0.7" />
    <path d="M190 26 L208 24 L208 38 L190 39 Z" fill="#181818" />
    <path d="M190 26 L208 24 L208 25.5 L190 27.5 Z" fill="url(#chromeGrad)" />
    <path d="M191 26.5 L207 24.8 L207 26.5 L191 28.2 Z" fill="#e8f4ff" filter="url(#glow)" opacity="0.95" />
    <ellipse cx="196" cy="33" rx="2.2" ry="1.8" fill="url(#hlGlow)" filter="url(#glow)" />
    <ellipse cx="202" cy="33" rx="1.8" ry="1.5" fill="url(#hlGlow)" filter="url(#glow)" />
    <path d="M191 36 L207 35 L207 37 L191 38 Z" fill="rgba(255,180,0,0.55)" />
    <path d="M15 24 L24 24 L24 40 L15 40 Z" fill="#120000" />
    <rect x="15.5" y="25" width="7" height="14" rx="1.5" fill="#c00000" />
    <rect x="16" y="25.5" width="6" height="4" rx="0.8" fill="#ff3333" />
    <rect x="16" y="30.5" width="6" height="4" rx="0.8" fill="#dd2222" />
    <rect x="16" y="35.5" width="6" height="3.5" rx="0.8" fill="#aa1111" />
    <rect x="15" y="23" width="9" height="2" rx="1" fill="url(#chromeGrad)" opacity="0.8" />
    <Wheel cx={162} cy={60} />
    <Wheel cx={52}  cy={60} />
  </svg>
);

/* ── MECHANIC SVG — fully JS-driven props, no CSS class transitions ── */
const MechanicSVG = ({ phase }) => {
  const isFix     = phase === 'fix';
  const isWalking = phase === 'walk-in' || phase === 'walk-out';
  const bodyY     = isFix ? 6 : 0;   // crouch — whole body shifts down
  const armRot    = isFix ? 55 : 10; // arm swings down toward engine
  const legA      = isWalking ? 28  : 0;
  const legB      = isWalking ? -22 : 0;

  return (
    <svg viewBox="0 0 44 80" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',overflow:'visible'}}>
      {/* ground shadow */}
      <ellipse cx="22" cy="78" rx="12" ry="3.5" fill="rgba(0,0,0,0.3)" />

      <g style={{ transform: `translateY(${bodyY}px)`, transition: 'transform 0.35s ease' }}>

        {/* ── HEAD + HELMET ── */}
        <circle cx="22" cy="14" r="8" fill="#f5c09a" />
        {/* helmet top */}
        <path d="M13 13 Q22 3 31 13" fill="#ffcc00" />
        <rect x="13" y="12" width="18" height="4" rx="2" fill="#ffcc00" />
        {/* visor */}
        <rect x="15" y="14" width="14" height="5" rx="2" fill="rgba(30,30,60,0.55)" />
        {/* helmet brim */}
        <rect x="11" y="15" width="22" height="2" rx="1" fill="#e6b800" />

        {/* ── BODY / JUMPSUIT ── */}
        <rect x="14" y="24" width="16" height="22" rx="4" fill="#1e4db7" />
        {/* hi-vis chest stripe */}
        <rect x="14" y="30" width="16" height="4" rx="1" fill="#ffcc00" opacity="0.85" />
        {/* collar */}
        <rect x="18" y="23" width="8" height="4" rx="2" fill="#163a8a" />

        {/* ── LEFT ARM (faces car = right in SVG since we flip) — wrench arm ── */}
        <g style={{
          transformOrigin: '14px 26px',
          transform: `rotate(${armRot}deg)`,
          transition: 'transform 0.3s ease'
        }}>
          {/* upper arm */}
          <rect x="5" y="24" width="10" height="5" rx="2.5" fill="#1e4db7" />
          {/* forearm */}
          <rect x="2" y="27" width="8" height="4" rx="2" fill="#f5c09a" />
          {/* WRENCH */}
          <g>
            {/* handle */}
            <rect x="-8" y="26" width="11" height="3" rx="1.5" fill="#888" />
            {/* head open end */}
            <rect x="-11" y="23" width="5" height="3" rx="1" fill="#666" />
            <rect x="-11" y="29" width="5" height="3" rx="1" fill="#666" />
            {/* highlight */}
            <rect x="-8" y="26.5" width="9" height="1" rx="0.5" fill="rgba(255,255,255,0.35)" />
          </g>
        </g>

        {/* ── RIGHT ARM ── */}
        <rect x="24" y="24" width="10" height="5" rx="2.5" fill="#1e4db7" />
        <rect x="28" y="27" width="8" height="4" rx="2" fill="#f5c09a" />

        {/* ── SPARKS — only when fixing ── */}
        {isFix && (
          <g>
            <circle cx="-5" cy="30" r="2.5" fill="#ffe000" className="sp1" />
            <circle cx="-10" cy="26" r="1.8" fill="#ff8800" className="sp2" />
            <circle cx="-3"  cy="22" r="1.5" fill="#ffff44" className="sp3" />
            <circle cx="-13" cy="30" r="1.2" fill="#ff4400" className="sp4" />
            <line x1="-5" y1="28" x2="-12" y2="22" stroke="#ffcc00" strokeWidth="1.5" className="sl1" />
            <line x1="-3" y1="30" x2="-1"  y2="20" stroke="#ff8800" strokeWidth="1.2" className="sl2" />
            <line x1="-8" y1="28" x2="-16" y2="26" stroke="#ffee00" strokeWidth="1"   className="sl3" />
          </g>
        )}

        {/* ── LEGS ── */}
        <g style={{
          transformOrigin: '18px 46px',
          transform: `rotate(${legA}deg)`,
          transition: 'transform 0.25s ease'
        }}>
          <rect x="15" y="45" width="7" height="18" rx="3" fill="#163a8a" />
          <rect x="14" y="61" width="10" height="5" rx="2" fill="#1a1a1a" />
        </g>
        <g style={{
          transformOrigin: '26px 46px',
          transform: `rotate(${legB}deg)`,
          transition: 'transform 0.25s ease'
        }}>
          <rect x="22" y="45" width="7" height="18" rx="3" fill="#163a8a" />
          <rect x="21" y="61" width="10" height="5" rx="2" fill="#1a1a1a" />
        </g>
      </g>
    </svg>
  );
};

/* ── SMOKE SVG ── */
const SmokeSVG = () => (
  <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',overflow:'visible'}}>
    <circle cx="15" cy="48" r="10" fill="rgba(180,180,180,0.6)" className="puff1" />
    <circle cx="30" cy="36" r="13" fill="rgba(160,160,160,0.5)" className="puff2" />
    <circle cx="50" cy="26" r="11" fill="rgba(200,200,200,0.4)" className="puff3" />
    <circle cx="68" cy="18" r="9"  fill="rgba(220,220,220,0.28)" className="puff4" />
  </svg>
);

function TopSection() {
  const swiperRef   = useRef(null);
  const roadRef     = useRef(null);
  const carRef      = useRef(null);
  const mechanicRef = useRef(null);
  const smokeRef    = useRef(null);
  const timers      = useRef([]);
  const [mechPhase, setMechPhase] = useState('hidden');

  const kill = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  const after = (ms, fn) => { const t = setTimeout(fn, ms); timers.current.push(t); return t; };

  const runCycle = useCallback(() => {
    const car      = carRef.current;
    const mechanic = mechanicRef.current;
    const smoke    = smokeRef.current;
    const road     = roadRef.current;
    if (!car || !road) return;

    const roadW = road.getBoundingClientRect().width;
    // pixel position where car left-edge stops
    const carStopPx = roadW * CAR_STOP_FRAC;
    // mechanic stops just to the RIGHT of car (car right edge + small gap)
    const mechStopPx = carStopPx + CAR_W + 10; // px from left
    // smoke sits above the car hood (right third of car)
    const smokePx = carStopPx + CAR_W * 0.65;

    // ── RESET ──
    car.style.transition = 'none';
    car.style.left = '-240px';
    mechanic.style.transition = 'none';
    mechanic.style.left = `${roadW + 60}px`; // off screen right
    mechanic.style.opacity = '0';
    smoke.style.transition = 'none';
    smoke.style.opacity = '0';
    smoke.style.left = `${smokePx}px`;
    setMechPhase('hidden');
    void car.offsetWidth;

    // ── 1. CAR DRIVES IN ──
    car.style.transition = `left ${T_DRIVE_IN}ms cubic-bezier(0.3,0,0.5,1)`;
    car.style.left = `${carStopPx}px`;

    after(T_DRIVE_IN + 200, () => {
      // ── 2. SMOKE APPEARS above hood ──
      smoke.style.transition = 'opacity 0.5s ease';
      smoke.style.opacity = '1';

      after(T_SMOKE_SHOW, () => {
        // ── 3. MECHANIC WALKS IN (from right toward car) ──
        setMechPhase('walk-in');
        mechanic.style.opacity = '1';
        mechanic.style.transition = `left ${T_MECH_WALK}ms linear`;
        mechanic.style.left = `${mechStopPx}px`;

        after(T_MECH_WALK + 100, () => {
          // ── 4. MECHANIC CROUCHES AND FIXES ──
          setMechPhase('fix');
          // smoke fades as fix progresses
          after(T_FIX * 0.5, () => {
            smoke.style.transition = 'opacity 1.2s ease';
            smoke.style.opacity = '0';
          });

          after(T_FIX, () => {
            // ── 5. MECHANIC WALKS OUT (to right) ──
            setMechPhase('walk-out');
            mechanic.style.transition = `left ${T_MECH_LEAVE}ms linear`;
            mechanic.style.left = `${roadW + 80}px`;

            after(T_MECH_LEAVE + 80, () => {
              mechanic.style.opacity = '0';
              setMechPhase('hidden');

              // ── 6. CAR ZOOMS OUT ──
              car.style.transition = `left ${T_DRIVE_OUT}ms cubic-bezier(0.55,0,1,0.85)`;
              car.style.left = `${roadW + 30}px`;

              after(T_DRIVE_OUT, () => {
                if (swiperRef.current) swiperRef.current.slideNext();
                after(T_PAUSE, runCycle);
              });
            });
          });
        });
      });
    });
  }, []);

  useEffect(() => {
    const t = setTimeout(runCycle, 600);
    return () => { kill(); clearTimeout(t); };
  }, [runCycle]);

  return (
    <div className="top-section-wrapper">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        
        navigation
        loop
        className="top-section-swiper"
        onSwiper={sw => { swiperRef.current = sw; }}
      >
        {PROMOS.map((promo, i) => (
          <SwiperSlide key={i}>
            <div className="top-section" style={{ backgroundImage:`url(${promo.image})`, backgroundSize:'cover', backgroundPosition:'center' }}>
              <div className="top-section-overlay" style={{ background: promo.overlay }} />
              <div className="top-section-content">
                <h1 className="top-section-promo">{promo.titre}</h1>
                <div className="top-section-desc">{promo.description}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── ROAD SCENE ── */}
      <div className="car-road" ref={roadRef}>
        <div className="road-dashes" />

        {/* Smoke — position set by JS */}
        <div className="smoke-wrapper" ref={smokeRef}>
          <SmokeSVG />
        </div>

        {/* Car — position set by JS */}
        <div className="car-wrapper" ref={carRef}>
          <CarSVG />
        </div>

        {/* Mechanic — position set by JS, faces LEFT (toward car) */}
        <div className="mechanic-wrapper" ref={mechanicRef}>
          <MechanicSVG phase={mechPhase} />
        </div>
      </div>
    </div>
  );
}

export default TopSection;