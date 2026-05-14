import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bell,
  Facebook,
  Instagram,
  Mail,
  MonitorPlay,
  Phone,
  Play,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Accordion } from "@/pages/gc/parts/Accordion";
import { watchHowItWorks, watchPageFaqs } from "@/pages/gc/watchContent";
import { lscSite } from "@/pages/gc/lscSiteContent";

const SECTION_NAV = [
  { id: "watch-player", label: "Watch" },
  { id: "watch-steps", label: "How it works" },
  { id: "watch-stay", label: "Stay close" },
  { id: "watch-faq", label: "FAQ" },
] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function WatchEngagingLayout() {
  const [stepIdx, setStepIdx] = useState(0);

  const faqItems = watchPageFaqs.map((f, i) => ({
    key: `watch-faq-${i}`,
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
              "radial-gradient(ellipse 70% 55% at 18% 22%, rgba(249,115,22,0.4), transparent), radial-gradient(ellipse 50% 50% at 88% 72%, rgba(59,130,246,0.22), transparent)",
          }}
          aria-hidden
        />
        <div className="relative container mx-auto px-6 py-16 md:py-24 text-center max-w-4xl">
          <p className="text-church-orange font-semibold tracking-[0.2em] text-xs uppercase mb-4">Watch live</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Worship with {lscSite.churchNameShort}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            {lscSite.serviceTimesNote}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <MonitorPlay className="h-4 w-4 text-church-orange" aria-hidden />
              Stream online
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <Bell className="h-4 w-4 text-church-orange" aria-hidden />
              Alerts on social
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <Youtube className="h-4 w-4 text-church-orange" aria-hidden />
              @RCCGLSCWINNIPEG
            </span>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("watch-player")}
              className="inline-flex items-center gap-2 rounded-full bg-church-orange px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-church-gold"
            >
              <Play className="h-4 w-4" aria-hidden />
              Go to player
            </button>
            <Link
              to="/sermons"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Recent messages
            </Link>
          </div>
        </div>
      </header>

      <nav
        aria-label="Watch page sections"
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

      <section id="watch-player" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">Live &amp; replays</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                When we go live, the stream appears on our YouTube channel. Embed a player here later, or tap below to
                open YouTube in a new tab.
              </p>
              <a
                href={lscSite.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-video w-full overflow-hidden rounded-3xl bg-slate-950 shadow-xl ring-1 ring-slate-200"
              >
                <div
                  className="absolute inset-0 opacity-40 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${lscSite.goingOnSectionImageSrc})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/15 ring-2 ring-white/30 backdrop-blur-sm transition-transform group-hover:scale-110">
                    <Play className="h-8 w-8 text-white" fill="currentColor" aria-hidden />
                  </div>
                  <p className="text-lg font-serif font-bold">Open YouTube</p>
                  <p className="mt-2 max-w-sm text-sm text-slate-300">@{lscSite.socialHandle}</p>
                </div>
              </a>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={lscSite.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-church-orange px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-church-gold"
                >
                  <Youtube className="h-4 w-4" aria-hidden />
                  Watch on YouTube
                </a>
                <Link
                  to="/sermons"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-church-orange hover:text-church-orange"
                >
                  Sermon library <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-church-bg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Need the link?</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  We post go-live links on social and by email. Reach out any time — we are glad to help you tune in.
                </p>
                <a
                  href={`mailto:${lscSite.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-church-orange hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {lscSite.email}
                </a>
              </div>
              <div className="rounded-3xl border border-slate-900 bg-slate-900 p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Prayer &amp; tech help</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Call or text if something will not load — we will walk you through it.
                </p>
                <a href={`tel:${lscSite.phone}`} className="inline-flex items-center gap-2 text-sm font-semibold text-church-orange hover:underline">
                  <Phone className="h-4 w-4" />
                  {lscSite.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="watch-steps" className="scroll-mt-28 border-y border-slate-200/80 bg-church-bg py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3 text-center">How it works</h2>
          <p className="text-slate-600 text-center mb-10 max-w-xl mx-auto">
            Three simple habits that make online worship feel like family.
          </p>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            {watchHowItWorks.map((step, i) => (
              <button
                key={step.title}
                type="button"
                onClick={() => setStepIdx(i)}
                className={cn(
                  "flex items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-all sm:min-w-[200px]",
                  stepIdx === i
                    ? "border-church-orange bg-white shadow-md ring-2 ring-church-orange/20"
                    : "border-slate-200 bg-white/60 hover:border-church-orange/40",
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                    stepIdx === i ? "bg-church-orange text-white" : "bg-slate-200 text-slate-700",
                  )}
                >
                  {i + 1}
                </span>
                <span className="font-serif text-base font-bold text-slate-900">{step.title}</span>
              </button>
            ))}
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-inner">
            <p className="text-slate-700 leading-relaxed text-[17px] md:text-lg">{watchHowItWorks[stepIdx].body}</p>
          </div>
        </div>
      </section>

      <section id="watch-stay" className="scroll-mt-28 bg-slate-900 py-16 md:py-20 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-serif font-bold mb-3 text-center">Stay one tap away</h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-12">
            Follow for reminders, highlights, and behind-the-scenes from {lscSite.cityLine}.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: lscSite.social.youtube, label: "YouTube", Icon: Youtube },
              { href: lscSite.social.instagram, label: "Instagram", Icon: Instagram },
              { href: lscSite.social.facebook, label: "Facebook", Icon: Facebook },
              { href: `mailto:${lscSite.email}`, label: "Email", Icon: Mail },
            ].map((s) => {
              const SocIcon = s.Icon;
              return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-church-orange/40"
              >
                <SocIcon className="mb-3 h-9 w-9 text-church-orange transition-transform group-hover:scale-110" />
                <span className="font-bold">{s.label}</span>
                <span className="mt-2 text-xs text-slate-400">
                  {s.label === "Email" ? lscSite.email : `@${lscSite.socialHandle}`}
                </span>
              </a>
            );
            })}
          </div>
        </div>
      </section>

      <section id="watch-faq" className="scroll-mt-28 bg-white py-16 md:py-20 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3 text-center">Watch FAQ</h2>
          <p className="text-slate-600 text-center mb-10">Quick answers for first-timers.</p>
          <Accordion
            items={faqItems}
            itemClassName="group bg-church-bg border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-church-orange/25 transition-colors"
          />
        </div>
      </section>
    </>
  );
}
