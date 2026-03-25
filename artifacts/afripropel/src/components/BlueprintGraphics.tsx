import React from 'react';
import { motion } from 'framer-motion';

// Simulates a hand-drawn / architectural blueprint skyline of Accra
export function SkylineBlueprint({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 560" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="800" height="560" fill="url(#blueprint-grid)" />
      
      {/* Ground line */}
      <line x1="0" y1="490" x2="800" y2="490" stroke="currentColor" strokeWidth="1" opacity="0.3" />

      {/* FAR LEFT - Small buildings */}
      <rect x="10" y="380" width="55" height="110" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <rect x="20" y="360" width="35" height="20" stroke="currentColor" strokeWidth="0.8" fill="none" />
      {/* windows */}
      <rect x="18" y="395" width="8" height="8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
      <rect x="30" y="395" width="8" height="8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
      <rect x="42" y="395" width="8" height="8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
      <rect x="18" y="420" width="8" height="8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
      <rect x="30" y="420" width="8" height="8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
      <rect x="42" y="420" width="8" height="8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* LEFT cluster */}
      <rect x="75" y="310" width="70" height="180" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <rect x="85" y="290" width="50" height="20" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <rect x="105" y="275" width="10" height="15" stroke="currentColor" strokeWidth="0.8" fill="none" />
      {/* window grid */}
      {[0,1,2,3,4].map(row => [0,1,2].map(col => (
        <rect key={`l-${row}-${col}`} x={83 + col * 18} y={318 + row * 22} width="10" height="14" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.5" />
      )))}

      {/* CENTER-LEFT tall tower (under construction) */}
      <rect x="185" y="160" width="110" height="330" stroke="currentColor" strokeWidth="1.2" fill="none" />
      {/* Structural lines */}
      <line x1="240" y1="160" x2="240" y2="490" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 3" opacity="0.4" />
      {/* window grid large */}
      {[0,1,2,3,4,5,6,7,8].map(row => [0,1,2].map(col => (
        <rect key={`ct-${row}-${col}`} x={193 + col * 32} y={170 + row * 35} width="22" height="26" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.45" />
      )))}
      {/* top crown */}
      <rect x="200" y="130" width="80" height="30" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <rect x="215" y="110" width="50" height="20" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <rect x="228" y="95" width="24" height="15" stroke="currentColor" strokeWidth="0.8" fill="none" />

      {/* CRANE 1 on center tower */}
      <line x1="295" y1="490" x2="295" y2="50" stroke="currentColor" strokeWidth="1" />
      <line x1="295" y1="90" x2="440" y2="55" stroke="currentColor" strokeWidth="0.8" />
      <line x1="295" y1="90" x2="195" y2="110" stroke="currentColor" strokeWidth="0.8" />
      <line x1="440" y1="55" x2="440" y2="130" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
      <circle cx="440" cy="130" r="3" fill="currentColor" />
      {/* crane cable */}
      <line x1="380" y1="62" x2="380" y2="105" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />

      {/* CENTER MAIN tower - tallest */}
      <rect x="330" y="110" width="140" height="380" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <line x1="400" y1="110" x2="400" y2="490" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 4" opacity="0.3" />
      {/* facade grid */}
      {[0,1,2,3,4,5,6,7,8,9].map(row => [0,1,2,3].map(col => (
        <rect key={`m-${row}-${col}`} x={338 + col * 32} y={120 + row * 37} width="22" height="28" stroke="currentColor" strokeWidth="0.35" fill="none" opacity="0.4" />
      )))}
      {/* Top of building */}
      <rect x="345" y="78" width="110" height="32" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="362" y="55" width="76" height="23" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <rect x="378" y="38" width="44" height="17" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <line x1="400" y1="38" x2="400" y2="18" stroke="currentColor" strokeWidth="0.8" />

      {/* CRANE 2 on main tower */}
      <line x1="468" y1="490" x2="468" y2="30" stroke="currentColor" strokeWidth="1.2" />
      <line x1="468" y1="65" x2="600" y2="38" stroke="currentColor" strokeWidth="0.8" />
      <line x1="468" y1="65" x2="350" y2="82" stroke="currentColor" strokeWidth="0.8" />
      <line x1="580" y1="40" x2="580" y2="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
      <circle cx="580" cy="120" r="3" fill="currentColor" />

      {/* RIGHT cluster - mid-height */}
      <rect x="490" y="240" width="95" height="250" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="505" y="215" width="65" height="25" stroke="currentColor" strokeWidth="0.8" fill="none" />
      {[0,1,2,3,4].map(row => [0,1].map(col => (
        <rect key={`r-${row}-${col}`} x={500 + col * 38} y={250 + row * 38} width="26" height="28" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.45" />
      )))}

      {/* FAR RIGHT lower buildings */}
      <rect x="600" y="320" width="80" height="170" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <rect x="615" y="300" width="50" height="20" stroke="currentColor" strokeWidth="0.8" fill="none" />
      {[0,1,2].map(row => [0,1].map(col => (
        <rect key={`fr-${row}-${col}`} x={608 + col * 32} y={330 + row * 38} width="20" height="28" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.45" />
      )))}

      <rect x="695" y="380" width="60" height="110" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <rect x="705" y="362" width="40" height="18" stroke="currentColor" strokeWidth="0.6" fill="none" />

      {/* Topographic curves at ground */}
      <path d="M 0 520 Q 200 505 400 515 T 800 510" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M 0 535 Q 200 520 400 530 T 800 525" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="6 4" opacity="0.2" />
      
      {/* Geospatial data label point */}
      <circle cx="400" cy="490" r="4" fill="currentColor" opacity="0.6" />
      <line x1="400" y1="490" x2="460" y2="440" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <rect x="455" y="420" width="90" height="22" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <text x="462" y="434" fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.6">5°33'N 0°12'W</text>
    </svg>
  );
}

// Simulates the UI Dashboard interface in a skeletal wireframe style — white line-art on black
export function DashboardWireframe({ className }: { className?: string }) {
  const W = "rgba(255,255,255,0.9)";
  const WD = "rgba(255,255,255,0.4)";
  return (
    <svg viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ background: "#000" }}>
      <defs>
        <pattern id="dash-grid-dark" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
        </pattern>
      </defs>

      {/* Background grid */}
      <rect width="1000" height="600" fill="url(#dash-grid-dark)" />
      
      {/* Base Window */}
      <rect x="20" y="20" width="960" height="560" stroke={WD} strokeWidth="1" fill="none" />
      
      {/* Sidebar */}
      <line x1="220" y1="20" x2="220" y2="580" stroke={WD} strokeWidth="1" />
      <line x1="20" y1="80" x2="220" y2="80" stroke={WD} strokeWidth="1" />
      
      {/* Logo area */}
      <text x="40" y="58" fontSize="11" fontFamily="Space Mono, monospace" fill={W} letterSpacing="0.15em">AFRIPROPEL</text>
      
      {/* Sidebar Items */}
      {["DASHBOARD", "PARCELS", "DISPUTES", "OWNERSHIP", "VALUATION", "REPORTS"].map((label, i) => (
        <g key={i}>
          <rect x="40" y={110 + i * 40} width="8" height="8" stroke={i === 0 ? W : WD} strokeWidth="1" fill={i === 0 ? W : "none"} />
          <text x="60" y={122 + i * 40} fontSize="9" fontFamily="Space Mono, monospace" fill={i === 0 ? W : WD} letterSpacing="0.1em">{label}</text>
        </g>
      ))}

      {/* Main Header */}
      <line x1="220" y1="80" x2="980" y2="80" stroke={WD} strokeWidth="1" />
      <text x="250" y="57" fontSize="12" fontFamily="Space Mono, monospace" fill={W} letterSpacing="0.1em">PARCEL_ID: GH-ACC-8492-A</text>
      
      <rect x="830" y="40" width="100" height="22" stroke={W} strokeWidth="1" fill="none" />
      <text x="880" y="55" fontSize="9" fontFamily="Space Mono, monospace" textAnchor="middle" fill={W} letterSpacing="0.15em">✓ VERIFIED</text>

      {/* Main Content Area - Map Grid */}
      <rect x="250" y="110" width="450" height="410" stroke={WD} strokeWidth="1" fill="none" />
      
      {/* Highlighted Parcel */}
      <motion.path 
        initial={{ fillOpacity: 0 }}
        animate={{ fillOpacity: 0.12 }}
        transition={{ delay: 1, duration: 1.5 }}
        d="M 380 240 L 520 220 L 580 350 L 420 400 Z" 
        stroke={W} 
        strokeWidth="1.5" 
        fill={W}
      />
      <circle cx="490" cy="300" r="5" fill={W} />
      <line x1="490" y1="300" x2="580" y2="190" stroke={W} strokeWidth="1" />
      <rect x="575" y="168" width="120" height="28" stroke={W} strokeWidth="1" fill="#000" />
      <text x="585" y="185" fontSize="9" fontFamily="Space Mono, monospace" fill={W} letterSpacing="0.05em">NO DISPUTES FOUND</text>

      {/* Neighboring parcels */}
      <path d="M 260 300 L 380 240" stroke={WD} strokeWidth="0.5" strokeDasharray="4 4" />
      <path d="M 580 350 L 680 380 L 660 480 L 580 520 L 480 490 Z" stroke={WD} strokeWidth="0.5" fill="none" />
      <path d="M 260 200 L 380 240 L 300 350 Z" stroke={WD} strokeWidth="0.5" fill="none" />

      {/* Coordinates */}
      <text x="260" y="525" fontSize="8" fontFamily="Space Mono, monospace" fill={WD} letterSpacing="0.1em">5°33'N 0°12'W — ACC CENTRAL DISTRICT</text>

      {/* Side Panel Data */}
      <rect x="720" y="110" width="240" height="130" stroke={WD} strokeWidth="1" fill="none" />
      <text x="740" y="138" fontSize="10" fontFamily="Space Mono, monospace" fill={W} letterSpacing="0.1em">OWNERSHIP CHAIN</text>
      <line x1="720" y1="150" x2="960" y2="150" stroke={WD} strokeWidth="1" />
      <circle cx="740" cy="175" r="3" fill={W} />
      <line x1="753" y1="175" x2="870" y2="175" stroke={WD} strokeWidth="1" />
      <text x="755" y="179" fontSize="8" fontFamily="Space Mono, monospace" fill={WD}>Kwame A. — 2019</text>
      <circle cx="740" cy="205" r="3" fill={W} />
      <line x1="753" y1="205" x2="850" y2="205" stroke={WD} strokeWidth="1" />
      <text x="755" y="209" fontSize="8" fontFamily="Space Mono, monospace" fill={WD}>Estate Trust — 2012</text>
      <circle cx="740" cy="230" r="3" fill={W} />
      <line x1="753" y1="230" x2="820" y2="230" stroke={WD} strokeWidth="1" />
      <text x="755" y="234" fontSize="8" fontFamily="Space Mono, monospace" fill={WD}>Land Commission — 1998</text>

      {/* Valuation Panel */}
      <rect x="720" y="260" width="240" height="160" stroke={WD} strokeWidth="1" fill="none" />
      <text x="740" y="288" fontSize="10" fontFamily="Space Mono, monospace" fill={W} letterSpacing="0.1em">AI VALUATION</text>
      <line x1="720" y1="300" x2="960" y2="300" stroke={WD} strokeWidth="1" />
      <text x="740" y="338" fontSize="26" fontFamily="Space Mono, monospace" fill={W}>GHS 1.2M</text>
      <text x="740" y="360" fontSize="8" fontFamily="Space Mono, monospace" fill={WD}>≈ USD 84,500</text>
      
      {/* Mini chart */}
      <path d="M 740 400 L 775 388 L 810 395 L 850 375 L 890 360 L 930 345 L 950 340" fill="none" stroke={W} strokeWidth="1.5" />
      <path d="M 740 400 L 775 388 L 810 395 L 850 375 L 890 360 L 930 345 L 950 340 L 950 420 L 740 420 Z" fill={W} fillOpacity="0.05" />

      {/* AI Signal Panel */}
      <rect x="720" y="440" width="240" height="90" stroke={WD} strokeWidth="1" fill="none" />
      <text x="740" y="466" fontSize="10" fontFamily="Space Mono, monospace" fill={W} letterSpacing="0.1em">FRAUD SIGNAL: NONE</text>
      <line x1="720" y1="478" x2="960" y2="478" stroke={WD} strokeWidth="1" />
      <rect x="740" y="488" width="60" height="8" fill={W} fillOpacity="0.15" stroke="none" />
      <text x="810" y="497" fontSize="8" fontFamily="Space Mono, monospace" fill={WD}>RISK SCORE: 0.02</text>
      <rect x="740" y="505" width="180" height="8" fill="none" stroke={WD} strokeWidth="0.5" />
      <rect x="740" y="505" width="8" height="8" fill={W} />
    </svg>
  );
}
