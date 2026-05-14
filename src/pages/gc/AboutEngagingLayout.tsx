import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  Flame,
  Globe,
  MapPin,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  aboutBeliefs,
  aboutMandate,
  aboutPastor,
  aboutStory,
  aboutValueBlurbs,
  aboutValues,
  aboutVision,
} from "@/pages/gc/aboutContent";
import { lscSite } from "@/pages/gc/lscSiteContent";

const SECTION_NAV = [
  { id: "about-story", label: "Story" },
  { id: "about-mandate", label: "Mandate" },
  { id: "about-vision", label: "Vision" },
  { id: "about-values", label: "Values" },
  { id: "about-beliefs", label: "Beliefs" },
  { id: "about-pastor", label: "Pastors" },
] as const;

const mandateIcons = [Sparkles, BookOpen, Shield, Award, Flame] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function AboutEngagingLayout() {
  const [beliefIdx, setBeliefIdx] = useState(0);
  const activeBelief = aboutBeliefs[beliefIdx];

  return (
    <>
      {/* Hero */}
      <header className="relative overflow-hidden bg-slate-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(249,115,22,0.35), transparent), radial-gradient(ellipse 60% 50% at 85% 60%, rgba(59,130,246,0.22), transparent)",
          }}
          aria-hidden
        />
        <div className="relative container mx-auto px-6 py-16 md:py-24 text-center max-w-4xl">
          <p className="text-church-orange font-semibold tracking-[0.2em] text-xs uppercase mb-4">About</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">About Us</h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Our story, mandate, vision, values, beliefs, and pastors — {lscSite.churchName}, a Young Adults and Youth
            movement of RCCG in {lscSite.cityLine}.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <Globe className="h-4 w-4 text-church-orange" aria-hidden />
              RCCG worldwide
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <Users className="h-4 w-4 text-church-orange" aria-hidden />
              Young adults &amp; youth
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <MapPin className="h-4 w-4 text-church-orange" aria-hidden />
              {lscSite.cityLine}
            </span>
          </div>
        </div>
      </header>

      {/* Sticky section nav */}
      <nav
        aria-label="About page sections"
        className="sticky top-20 z-30 border-b border-slate-200/90 bg-white/90 backdrop-blur-md shadow-sm"
      >
        <div className="container mx-auto px-4 md:px-6">
          <ul className="flex gap-1 overflow-x-auto py-3 md:justify-center md:flex-wrap scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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

      {/* Story + pull quote */}
      <section id="about-story" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">{aboutStory.heading}</h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">{aboutStory.p1}</p>
              <p className="text-slate-700 leading-relaxed text-lg">{aboutStory.p2}</p>
            </div>
            <aside className="lg:col-span-5 lg:sticky lg:top-36">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-church-bg via-white to-orange-50/40 p-8 md:p-10 shadow-sm">
                <div className="absolute right-4 top-4 text-8xl font-serif leading-none text-church-orange/15 select-none" aria-hidden>
                  “
                </div>
                <p className="relative text-lg md:text-xl font-serif font-semibold text-slate-900 leading-snug mb-4">
                  {aboutVision.lead}
                </p>
                <p className="relative text-slate-600 text-sm leading-relaxed border-l-2 border-church-orange pl-4">
                  A snapshot of where God is taking us — read the full vision below.
                </p>
                <button
                  type="button"
                  onClick={() => scrollToSection("about-vision")}
                  className="relative mt-6 text-sm font-semibold text-church-orange hover:underline"
                >
                  Jump to vision →
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Mandate — interactive cards */}
      <section id="about-mandate" className="scroll-mt-28 border-y border-slate-200/80 bg-church-bg py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">{aboutMandate.heading}</h2>
            <p className="text-slate-600">Hover each pillar to explore what we are building toward together.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {aboutMandate.items.map((item, i) => {
              const Icon = mandateIcons[i];
              return (
                <div
                  key={item}
                  tabIndex={0}
                  className={cn(
                    "group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm outline-none transition-all duration-300",
                    "hover:-translate-y-1 hover:border-church-orange/40 hover:shadow-lg",
                    "focus-visible:ring-2 focus-visible:ring-church-orange focus-visible:ring-offset-2",
                  )}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-church-bg text-church-orange transition-colors group-hover:bg-church-orange group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-900 leading-snug">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision band */}
      <section id="about-vision" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="overflow-hidden rounded-[2rem] bg-slate-900 px-8 py-12 md:px-14 md:py-16 text-center text-white shadow-xl">
            <p className="text-church-orange text-xs font-bold tracking-[0.3em] uppercase mb-4">{aboutVision.heading}</p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-snug mb-8 text-white/95">
              {aboutVision.lead}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">{aboutVision.body}</p>
          </div>
        </div>
      </section>

      {/* Values — hover lift cards */}
      <section id="about-values" className="scroll-mt-28 bg-church-bg py-16 md:py-20 border-t border-slate-200/60">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 text-center">
            {aboutValues.heading}
          </h2>
          <p className="text-slate-600 text-center max-w-xl mx-auto mb-12">
            These aren’t slogans — they shape how we treat people, make decisions, and serve our city.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {aboutValues.items.map((name) => (
              <div
                key={name}
                className={cn(
                  "rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300",
                  "hover:-translate-y-1 hover:border-church-orange/35 hover:shadow-md",
                )}
              >
                <p className="text-lg font-bold tracking-wide text-slate-900 mb-3">{name}</p>
                <p className="text-sm text-slate-600 leading-relaxed text-left">{aboutValueBlurbs[name]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs — tabbed panel */}
      <section id="about-beliefs" className="scroll-mt-28 bg-white py-16 md:py-24 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 text-center">OUR BELIEF</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
            Choose a topic to read our statement of faith. Scripture references are included for further study.
          </p>

          <div
            role="tablist"
            aria-label="Statement of faith topics"
            className="mb-8 flex flex-wrap justify-center gap-2 md:gap-3"
          >
            {aboutBeliefs.map((b, i) => (
              <button
                key={b.title}
                type="button"
                role="tab"
                aria-selected={beliefIdx === i}
                id={`belief-tab-${i}`}
                aria-controls={`belief-panel-${i}`}
                onClick={() => setBeliefIdx(i)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                  beliefIdx === i
                    ? "bg-church-orange text-white shadow-md scale-[1.02]"
                    : "bg-church-bg text-slate-700 border border-slate-200 hover:border-church-orange/50 hover:text-slate-900",
                )}
              >
                {b.title}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`belief-panel-${beliefIdx}`}
            aria-labelledby={`belief-tab-${beliefIdx}`}
            className="rounded-3xl border border-slate-200 bg-church-bg/50 p-8 md:p-10 shadow-inner min-h-[220px] transition-opacity duration-300"
          >
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{activeBelief.title}</h3>
            <p className="text-slate-700 leading-relaxed text-[17px] mb-6">{activeBelief.body}</p>
            <p className="border-l-2 border-church-orange pl-4 text-sm font-medium not-italic text-slate-700">
              {activeBelief.scripture}
            </p>
          </div>
        </div>
      </section>

      {/* Pastors + photo */}
      <section id="about-pastor" className="scroll-mt-28 bg-church-bg py-16 md:py-20 border-t border-slate-200/80">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-12 text-center md:text-left">
            {aboutPastor.heading}
          </h2>
          <div className="grid gap-10 md:grid-cols-2 md:gap-14 md:items-center">
            <div className="order-2 md:order-1 space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>{aboutPastor.p1}</p>
              <p>{aboutPastor.p2}</p>
              <Link
                to="/meet-the-pastor"
                className="inline-flex items-center gap-2 text-sm font-semibold text-church-orange hover:underline"
              >
                Meet the pastors page →
              </Link>
            </div>
            <div className="order-1 md:order-2 mx-auto w-full max-w-md md:max-w-none">
              <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200/80 bg-[#e8dcc8]">
                <img
                  src={lscSite.welcomePastorPhotoSrc}
                  alt={lscSite.welcomePastorPhotoAlt}
                  className="aspect-[4/5] w-full object-cover object-[center_12%]"
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
