import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Baby,
  BookOpen,
  Droplets,
  Gift,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Play,
  Sparkles,
  UsersRound,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Accordion } from "@/pages/gc/parts/Accordion";
import { connectPageFaqs } from "@/pages/gc/connectContent";
import { connectModules } from "@/pages/gc/content";
import { lscSite } from "@/pages/gc/lscSiteContent";

const SECTION_NAV = [
  { id: "connect-ministries", label: "Ministries" },
  { id: "connect-pathways", label: "Pathways" },
  { id: "connect-faq", label: "FAQ" },
] as const;

const CONNECT_ICONS: Record<string, LucideIcon> = {
  "/generation-101": BookOpen,
  "/kids": Baby,
  "/youth": Zap,
  "/life-groups": UsersRound,
  "/alpha": MessageCircle,
  "/chosen": HeartHandshake,
  "/baptism": Droplets,
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ConnectEngagingLayout() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const faqItems = connectPageFaqs.map((f, i) => ({
    key: `connect-faq-${i}`,
    title: f.q,
    content: f.a,
  }));

  return (
    <>
      <header className="relative overflow-hidden bg-slate-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 55% at 15% 25%, rgba(249,115,22,0.38), transparent), radial-gradient(ellipse 55% 45% at 90% 70%, rgba(59,130,246,0.2), transparent)",
          }}
          aria-hidden
        />
        <div className="relative container mx-auto px-6 py-16 md:py-24 text-center max-w-4xl">
          <p className="text-church-orange font-semibold tracking-[0.2em] text-xs uppercase mb-4">Connect</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">Find your place</h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Ministries, next steps, and community rhythms at {lscSite.churchNameShort}. Tap a card to explore — we will
            help you get plugged in, online and in person when we launch our next home.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <UsersRound className="h-4 w-4 text-church-orange" aria-hidden />
              Life groups &amp; growth
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <MapPin className="h-4 w-4 text-church-orange" aria-hidden />
              {lscSite.cityLine}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <Sparkles className="h-4 w-4 text-church-orange" aria-hidden />
              Next steps
            </span>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("connect-ministries")}
              className="inline-flex items-center gap-2 rounded-full bg-church-orange px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-church-gold"
            >
              Explore ministries <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={`mailto:${lscSite.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ask a question
            </a>
          </div>
        </div>
      </header>

      <nav
        aria-label="Connect page sections"
        className="sticky top-20 z-30 border-b border-slate-200/90 bg-white/90 backdrop-blur-md shadow-sm"
      >
        <div className="container mx-auto px-4 md:px-6">
          <ul className="flex gap-1 overflow-x-auto py-3 md:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SECTION_NAV.map((item) => (
              <li key={item.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-church-bg hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-church-orange"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="connect-ministries" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3 text-center">Ministries</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Hover a tile for a quick highlight — click through for full details on each ministry page.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {connectModules.map((m, i) => {
              const Icon = CONNECT_ICONS[m.href] ?? Sparkles;
              const isActive = activeIdx === i;
              return (
                <Link
                  key={m.href}
                  to={m.href}
                  onMouseEnter={() => setActiveIdx(i)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onFocus={() => setActiveIdx(i)}
                  onBlur={() => setActiveIdx(null)}
                  className={cn(
                    "group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300",
                    isActive
                      ? "border-church-orange/50 bg-gradient-to-br from-orange-50/80 to-white shadow-lg -translate-y-1"
                      : "border-slate-100 bg-church-bg/50 hover:border-church-orange/35 hover:shadow-md hover:-translate-y-0.5",
                  )}
                >
                  <div
                    className={cn(
                      "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors",
                      isActive ? "bg-church-orange text-white" : "bg-white text-church-orange ring-1 ring-slate-200",
                    )}
                  >
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-church-orange transition-colors mb-3">
                    {m.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{m.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-church-orange">
                    Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="connect-pathways" className="scroll-mt-28 border-y border-slate-200/80 bg-church-bg py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3 text-center">Pathways</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Not sure where to start? Try one of these front doors — each opens into the same family.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { to: "/visit", label: "Plan a visit", sub: "Online & in-person rhythm", icon: MapPin },
              { to: "/watch", label: "Watch live", sub: "Worship with us remotely", icon: Play },
              { to: "/sermons", label: "Catch up", sub: "Messages on demand", icon: BookOpen },
              { to: "/give", label: "Partner", sub: "Fuel the mission", icon: Gift },
            ].map((p) => {
              const PathIcon = p.icon;
              return (
              <Link
                key={p.to}
                to={p.to}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-church-orange/35 hover:shadow-lg"
              >
                <PathIcon className="mb-4 h-8 w-8 text-church-orange transition-transform group-hover:scale-110" />
                <div className="text-lg font-bold text-slate-900 group-hover:text-church-orange">{p.label}</div>
                <div className="mt-1 text-sm text-slate-500">{p.sub}</div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-church-orange">
                  Go <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
            })}
          </div>
        </div>
      </section>

      <section id="connect-faq" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3 text-center">Questions about connecting</h2>
          <p className="text-slate-600 text-center mb-10">Tap to expand an answer.</p>
          <Accordion
            items={faqItems}
            itemClassName="group bg-church-bg border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-church-orange/25 transition-colors"
          />
        </div>
      </section>
    </>
  );
}
