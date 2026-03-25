import React from 'react';
import { Button } from '@/components/ui/button';
import { SkylineBlueprint, DashboardWireframe } from '@/components/BlueprintGraphics';
import { Link } from 'wouter';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';

export default function Home() {
  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Action triggered");
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <img src="/afripropel-logo.png" alt="AfriPropel" style={{ height: '180px', marginTop: '-50px', marginBottom: '-50px' }} />
          </Link>
          
          <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
            <a href="#solutions" className="hover:underline underline-offset-4 decoration-1">Solutions</a>
            <a href="#platform" className="hover:underline underline-offset-4 decoration-1">Platform</a>
            <a href="#company" className="hover:underline underline-offset-4 decoration-1">Company</a>
            <a href="#pricing" className="hover:underline underline-offset-4 decoration-1">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <Button onClick={handleAction} className="hidden sm:inline-flex">
              Get Early Access <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative w-full pt-20 pb-32 overflow-hidden border-b border-border bg-dot-grid">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 z-10">
            <div className="inline-block border border-border px-3 py-1 mb-8">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
                AI · Blockchain · Geospatial · Ghana
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[68px] leading-[1.1] tracking-tight mb-8">
              The verified, intelligent, and secure future of real estate in Africa.
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10 max-w-lg">
              Ghana's first AI property graph. Blockchain land verification. Geospatial intelligence to secure your land and investments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleAction} size="lg">
                Request Demo
              </Button>
              <Button onClick={handleAction} variant="outline" size="lg">
                View Platform <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 h-[500px] w-full relative border border-border bg-background overflow-hidden">
            <img
              src="/hero-drawing.png"
              alt="Architectural drawing"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-4 right-4 bg-background border border-border px-3 py-2">
              <span className="font-mono text-[10px] uppercase tracking-widest">FIG 1. ACCRA SECTOR GRID</span>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <div className="w-full border-b border-border bg-background overflow-hidden py-4">
        <div className="flex w-[200%] animate-[slide_30s_linear_infinite]">
          {/* Repeating for infinite scroll effect */}
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex-1 flex items-center justify-around font-mono text-xs md:text-sm tracking-widest uppercase opacity-60">
              <span>Lands Commission</span>
              <span>•</span>
              <span>Ghana Card</span>
              <span>•</span>
              <span>MoMo</span>
              <span>•</span>
              <span>Polygon</span>
              <span>•</span>
              <span>PostGIS</span>
              <span>•</span>
              <span>Neo4j</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM SECTION */}
      <section className="w-full py-32 bg-graph-paper border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase border-b border-foreground pb-1 mb-6 inline-block">The Problem</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Ghana loses billions annually to land fraud, duplicate titles, and rental disputes.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { num: "$6B+", label: "Real estate market size" },
              { num: "47%", label: "Land disputes unresolved" },
              { num: "3.2M", label: "Unverified parcels" },
              { num: "80%", label: "Paper-based transactions" }
            ].map((stat, i) => (
              <div key={i} className="bg-background p-8 lg:p-12 flex flex-col justify-center hover-invert group cursor-default">
                <span className="font-mono text-4xl lg:text-5xl font-bold mb-4">{stat.num}</span>
                <span className="font-serif text-muted-foreground group-hover:text-background/80 transition-colors text-lg">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section id="solutions" className="w-full py-32 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase border-b border-foreground pb-1 mb-6 inline-block">The Architecture</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                A six-layered infrastructure to digitize and secure physical land.
              </h2>
            </div>
            <Button variant="outline" onClick={handleAction}>Read Whitepaper</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { id: "01", title: "AI PROPERTY GRAPH", over: "The Intelligence Layer", desc: "Ghana's first living knowledge graph linking every parcel, owner, transaction, dispute, and valuation. Fraud rings detected automatically." },
              { id: "02", title: "BLOCKCHAIN VERIFICATION", over: "The Trust Layer", desc: "Immutable land certificates. Smart contract escrow. Timestamped indentures. Complements the Lands Commission." },
              { id: "03", title: "RENTING OS", over: "The Rental Layer", desc: "AI tenant scoring. Rent default prediction. MoMo-integrated payments. The credit score for Ghana's renters." },
              { id: "04", title: "GEOSPATIAL ENGINE", over: "The Map Layer", desc: "Satellite & drone boundary detection. Encroachment alerts. Flood risk. Price heatmaps. Real-time." },
              { id: "05", title: "DEVELOPER OS", over: "The Build Layer", desc: "AI cost estimation from drawings. Drone construction monitoring. Off-plan buyer scoring. Blockchain payment milestones." },
              { id: "06", title: "AI ANALYST COPILOT", over: "The Interface Layer", desc: "Ask: 'Is this land safe to buy?' 'Best ROI under $80k?' 'Analyze this indenture.' Ghana-specific answers, instantly." }
            ].map((sol) => (
              <div key={sol.id} className="border border-border p-8 lg:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-graph-paper border-b border-l border-border flex items-center justify-center font-mono text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                  {sol.id}
                </div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
                  {sol.over}
                </span>
                <h3 className="font-serif text-2xl mb-4">{sol.title}</h3>
                <p className="font-sans text-muted-foreground font-light leading-relaxed max-w-md">
                  {sol.desc}
                </p>
                <div className="mt-8 flex items-center text-xs font-mono tracking-widest uppercase cursor-pointer group-hover:underline underline-offset-4">
                  Explore Layer <ChevronRight className="ml-1 w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM PREVIEW - INVERTED SECTION */}
      <section id="platform" className="w-full py-32 bg-black text-white border-b border-white/20 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase border-b border-white/40 pb-1 mb-6 inline-block text-white/60">Platform</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-white">
              An inside look at how we protect land.
            </h2>
            <p className="mt-6 font-sans text-white/60 font-light text-lg">
              Institutional-grade tools designed for clarity, speed, and absolute truth.
            </p>
          </div>

          <div className="w-full aspect-[16/9] border border-white/20 bg-black overflow-hidden">
            <DashboardWireframe className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* WHO ITS FOR */}
      <section className="w-full py-32 bg-background border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="font-serif text-3xl">Built for the entire ecosystem.</h2>
        </div>
        
        <div className="flex overflow-x-auto pb-8 hide-scrollbar px-6 gap-4">
          {[
            "Government & Lands Commission",
            "Banks & Mortgage Providers",
            "Real Estate Developers",
            "Agencies & Agents",
            "Landlords",
            "Investors",
            "Legal Professionals"
          ].map((aud, i) => (
            <div key={i} className="flex-none border border-border px-8 py-4 whitespace-nowrap font-serif text-lg hover-invert cursor-default">
              {aud}
            </div>
          ))}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="w-full py-32 bg-dot-grid border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase border-b border-foreground pb-1 mb-6 inline-block">Access</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Plans designed for every stakeholder.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Starter", target: "Landlords & Agents", price: "Free", feat: ["Basic Title Lookup", "Property Listing", "Standard Support"] },
              { name: "Professional", target: "Agencies & Developers", price: "$99/mo", feat: ["AI Valuations", "Geospatial Boundary Checks", "Smart Contracts Escrow", "Priority Support"] },
              { name: "Enterprise", target: "Banks, Govt & Inst.", price: "Custom", feat: ["Full AI Property Graph API", "Blockchain Node Access", "Dedicated Analyst Copilot", "White-label OS"] }
            ].map((plan, i) => (
              <div key={i} className="bg-background border border-border p-10 flex flex-col">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  {plan.target}
                </span>
                <h3 className="font-serif text-3xl mb-6">{plan.name}</h3>
                <div className="text-4xl font-mono font-bold mb-8 pb-8 border-b border-border">
                  {plan.price}
                </div>
                <ul className="flex-1 space-y-4 mb-8">
                  {plan.feat.map((f, idx) => (
                    <li key={idx} className="flex items-start font-sans text-sm font-light">
                      <Check className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={i === 1 ? "default" : "outline"} className="w-full" onClick={handleAction}>
                  Select Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="w-full bg-background border-b border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {[
            { num: "142,867", label: "Verified titles in system" },
            { num: "38", label: "Fraud rings dismantled" },
            { num: "$6B+", label: "Market monitored daily" },
            { num: "94", label: "Encroachments tracked" }
          ].map((stat, i) => (
            <div key={i} className="p-8 text-center bg-graph-paper">
              <div className="font-mono text-3xl font-bold mb-2">{stat.num}</div>
              <div className="font-serif text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-background pt-32 pb-12 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none -z-10">
          <SkylineBlueprint className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-32">
            <h2 className="font-serif text-5xl md:text-7xl leading-none mb-10">
              Build Ghana's property future starting today.
            </h2>
            <Button size="lg" onClick={handleAction}>
              Request Early Access <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-border font-mono text-xs uppercase tracking-widest">
            <div className="col-span-1 md:col-span-2">
              <div className="font-serif font-semibold text-xl tracking-wide normal-case mb-2">AFRIPROPEL</div>
              <div className="text-[9px] text-muted-foreground">PROPERTY INTELLIGENCE · GHANA</div>
            </div>
            
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:underline">Solutions</a>
              <a href="#" className="hover:underline">Platform</a>
              <a href="#" className="hover:underline">API Documentation</a>
            </div>
            
            <div className="flex flex-col space-y-4 text-muted-foreground">
              <span>info@afripropel.com</span>
              <span>Osu, Accra, Ghana</span>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <div>© 2025 AfriPropel Ltd.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global override for specific custom animations if needed */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
