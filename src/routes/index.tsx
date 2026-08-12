import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Play, Check, X } from "lucide-react";

import heroWeightlifter from "../assets/hero-weightlifter.png.asset.json";
import gymEquipment from "../assets/gym-equipment.png.asset.json";
import faviconAsset from "../assets/favicon.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IronLogic — Premium Strength Facility" },
      {
        name: "description",
        content:
          "Join IronLogic. 140+ machines, 24/7 access, three membership tiers. Engineered for high-performance athletes.",
      },
      { property: "og:title", content: "IronLogic — Premium Strength Facility" },
      {
        property: "og:description",
        content:
          "Join IronLogic. 140+ machines, 24/7 access, three membership tiers. Engineered for high-performance athletes.",
      },
      { property: "og:image", content: faviconAsset.url },
      { name: "twitter:image", content: faviconAsset.url },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <MembershipSection />
        <FacilitySection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-semibold tracking-tighter text-2xl uppercase">
          Iron<span className="text-primary">Logic</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#membership" className="hover:text-primary transition-colors">
            Memberships
          </a>
          <a href="#facility" className="hover:text-primary transition-colors">
            Facility
          </a>
          <a href="#hours" className="hover:text-primary transition-colors">
            Hours
          </a>
        </div>
        <button className="text-sm font-semibold bg-primary text-primary-foreground py-2 px-5 rounded-[4px] ring-1 ring-primary hover:bg-primary/90 transition-transform active:scale-95">
          Join Now
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-[60%]">
            <span className="inline-block px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase mb-8">
              Premium Strength Facility
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-none tracking-tighter text-foreground mb-8 text-balance uppercase">
              Refuse to be <br /> <span className="text-primary italic">Ordinary</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[40ch] leading-relaxed mb-10 text-balance">
              Engineered for high-performance athletes. No fluff, no distractions. Just heavy steel and scientific methodology.
            </p>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground py-3 pl-3 pr-4 rounded-[4px] font-semibold text-sm ring-1 ring-primary hover:ring-offset-2 hover:ring-offset-background transition-all">
                <Play className="size-4 shrink-0" fill="currentColor" />
                Get Started
              </button>
              <button className="py-3 px-6 rounded-[4px] font-semibold text-sm text-foreground ring-1 ring-muted hover:bg-muted/50 transition-colors">
                Tour Facility
              </button>
            </div>
          </div>

          <div className="relative lg:w-[40%] aspect-[4/5] w-full">
            <img
              src={heroWeightlifter.url}
              alt="Professional weightlifter training in a dark industrial gym"
              width={800}
              height={1000}
              className="w-full h-full object-cover bg-muted rounded-[min(1vw,12px)] ring-1 ring-border shadow-2xl shadow-primary/5"
              loading="eager"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 ring-1 ring-border rounded-[min(1vw,12px)]">
              <div className="flex gap-8">
                <div>
                  <div className="text-2xl font-display font-bold text-primary uppercase">140+</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Machines</div>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <div className="text-2xl font-display font-bold text-primary uppercase">24/7</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { label: "Opening Hours", value: "04:00 — 23:00 Daily" },
    { label: "Cardio Suite", value: "32 Assorted Units" },
    { label: "Free Weights", value: "Up to 80kg DBs" },
    { label: "Facility Size", value: "12,000 SQFT" },
  ];

  return (
    <section id="hours" className="py-12 border-y border-border/50 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1">
              {stat.label}
            </span>
            <span className="text-lg font-medium">{stat.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const tiers = [
  {
    name: "Standard",
    slug: "standard",
    price: 49,
    accent: false,
    features: [
      { text: "Access to all free weights", included: true },
      { text: "Locker room access", included: true },
      { text: "24/7 extended access", included: false },
    ],
  },
  {
    name: "Performance",
    slug: "performance",
    price: 89,
    accent: true,
    popular: true,
    features: [
      { text: "Full facility access 24/7", included: true },
      { text: "4 Group classes per month", included: true },
      { text: "Free guest pass monthly", included: true },
    ],
  },
  {
    name: "Elite",
    slug: "elite",
    price: 149,
    accent: false,
    features: [
      { text: "Unlimited group classes", included: true },
      { text: "Monthly session with PT", included: true },
      { text: "Full nutrition planning", included: true },
    ],
  },
];

function MembershipSection() {
  return (
    <section id="membership" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground uppercase tracking-tighter text-balance">
            Commit to Excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.slug}
              className={`group relative p-8 rounded-[16px] transition-all ${
                tier.accent
                  ? "bg-card ring-2 ring-primary"
                  : "bg-card ring-1 ring-border hover:ring-border/70"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3
                  className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
                    tier.accent ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="text-4xl font-display font-bold">
                  ${tier.price}
                  <span className="text-sm text-muted-foreground font-medium lowercase">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 text-sm text-muted-foreground">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="size-4 shrink-0 text-primary" strokeWidth={2.5} />
                    ) : (
                      <X className="size-4 shrink-0 text-muted" strokeWidth={2.5} />
                    )}
                    <span className={feature.included ? undefined : "text-muted-foreground/60"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-[4px] font-semibold text-sm transition-colors ${
                  tier.accent
                    ? "bg-primary text-primary-foreground ring-1 ring-primary hover:bg-primary/90"
                    : "bg-muted text-foreground ring-1 ring-border hover:bg-muted/70"
                }`}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilitySection() {
  return (
    <section id="facility" className="pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[min(2vw,24px)] overflow-hidden">
          <img
            src={gymEquipment.url}
            alt="Rows of premium power racks and weight benches in the IronLogic facility"
            width={1920}
            height={800}
            className="w-full aspect-[21/9] object-cover bg-muted"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h3 className="text-3xl font-display font-bold uppercase text-foreground mb-2">
                Professional Ordinance
              </h3>
              <p className="text-muted-foreground text-balance max-w-[48ch]">
                Equipped with Eleiko plates, Hammer Strength racks, and specialized recovery suites for serious athletic preparation.
              </p>
            </div>
            <div className="text-4xl font-display font-bold text-primary tabular-nums">12,000 SQFT</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <span className="font-display font-semibold tracking-tighter text-xl uppercase">
            Iron<span className="text-primary">Logic</span>
          </span>
          <p className="text-muted-foreground text-xs tracking-wide uppercase">© 2024 Strength Foundry Inc.</p>
        </div>
        <div className="flex gap-12 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
