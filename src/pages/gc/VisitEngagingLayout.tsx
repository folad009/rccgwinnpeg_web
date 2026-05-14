import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Mail,
  MapPin,
  MessageCircle,
  MonitorPlay,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Accordion } from "@/pages/gc/parts/Accordion";
import { visitExpectationTabs, visitFaqs, visitJourneySteps } from "@/pages/gc/visitContent";
import { lscSite } from "@/pages/gc/lscSiteContent";

const SECTION_NAV = [
  { id: "visit-journey", label: "Your journey" },
  { id: "visit-expect", label: "What to expect" },
  { id: "visit-online", label: "Online" },
  { id: "visit-connect", label: "Connect" },
  { id: "visit-faq", label: "FAQ" },
] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function VisitEngagingLayout() {
  const [stepIdx, setStepIdx] = useState(0);
  const [expectIdx, setExpectIdx] = useState(0);
  const activeExpect = visitExpectationTabs[expectIdx];

  const faqAccordionItems = visitFaqs.map((f, i) => ({
    key: `visit-faq-${i}`,
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
          <p className="text-church-orange font-semibold tracking-[0.2em] text-xs uppercase mb-4">Visit</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">Visit Living Seed</h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you are new to church or new to Winnipeg, we would love to meet you. We are online for now — here
            is how to plan your first connection with {lscSite.churchNameShort}.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <MonitorPlay className="h-4 w-4 text-church-orange" aria-hidden />
              Online gatherings
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <MapPin className="h-4 w-4 text-church-orange" aria-hidden />
              {lscSite.cityLine}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <Users className="h-4 w-4 text-church-orange" aria-hidden />
              Young adults &amp; youth
            </span>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("visit-online")}
              className="inline-flex items-center gap-2 rounded-full bg-church-orange px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-church-gold"
            >
              <Calendar className="h-4 w-4" aria-hidden />
              See how to join online
            </button>
            <a
              href={`mailto:${lscSite.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email us first
            </a>
          </div>
        </div>
      </header>

      <nav
        aria-label="Visit page sections"
        className="sticky top-20 z-30 border-b border-slate-200/90 bg-white/90 backdrop-blur-md shadow-sm"
      >
        <div className="container mx-auto px-4 md:px-6">
          <ul className="flex gap-1 overflow-x-auto py-3 md:justify-center md:flex-wrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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

      {/* Journey stepper */}
      <section id="visit-journey" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">Your first connection</h2>
            <p className="text-slate-600 leading-relaxed">
              Three simple moves — tap a step to read more. When we launch in-person rhythms, we will add campus
              details here too.
            </p>
          </div>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            {visitJourneySteps.map((step, i) => (
              <button
                key={step.title}
                type="button"
                onClick={() => setStepIdx(i)}
                className={cn(
                  "flex items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-all sm:min-w-[200px]",
                  stepIdx === i
                    ? "border-church-orange bg-orange-50 shadow-md ring-2 ring-church-orange/25"
                    : "border-slate-200 bg-church-bg/50 hover:border-church-orange/40 hover:bg-white",
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

          <div className="rounded-3xl border border-slate-200 bg-church-bg/60 p-8 md:p-10 shadow-inner">
            <p className="text-slate-700 leading-relaxed text-[17px] md:text-lg">
              {visitJourneySteps[stepIdx].body}
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-church-orange/40 bg-orange-50/30 p-6 text-center">
            <p className="text-slate-700 text-sm md:text-base">
              <Sparkles className="inline h-4 w-4 text-church-orange -mt-0.5 mr-1" aria-hidden />
              <span className="font-semibold text-slate-900">Pro tip:</span> introduce yourself in the chat or by
              email — we read every message.
            </p>
          </div>
        </div>
      </section>

      {/* Expectations — image + tabs */}
      <section id="visit-expect" className="scroll-mt-28 border-y border-slate-200/80 bg-church-bg py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 text-center">
            What you can expect
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Curious about culture, worship, and teaching? Pick a topic — content updates as our rhythms grow.
          </p>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200/80">
              <img
                src={lscSite.goingOnSectionImageSrc}
                alt={lscSite.goingOnSectionImageAlt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="font-serif text-xl md:text-2xl font-bold leading-snug mb-2">
                  “Come hungry — God meets us where we are.”
                </p>
                <p className="text-sm text-white/75">A welcoming home for young adults &amp; youth in Winnipeg.</p>
              </div>
            </div>

            <div>
              <div
                role="tablist"
                aria-label="What to expect topics"
                className="mb-6 flex flex-wrap gap-2"
              >
                {visitExpectationTabs.map((tab, i) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={expectIdx === i}
                    onClick={() => setExpectIdx(i)}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-xs font-bold uppercase tracking-wide transition-all sm:text-sm",
                      expectIdx === i
                        ? "bg-church-orange text-white shadow-md"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-church-orange/45",
                    )}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              <div
                role="tabpanel"
                className="min-h-[200px] rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">{activeExpect.title}</h3>
                <p className="text-slate-700 leading-relaxed text-[17px]">{activeExpect.body}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-church-orange hover:underline"
                  >
                    Our story &amp; beliefs <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/connect"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-church-orange"
                  >
                    Explore ministries <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online */}
      <section id="visit-online" className="scroll-mt-28 bg-slate-900 py-16 md:py-20 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-church-orange text-xs font-bold tracking-[0.25em] uppercase mb-3">Gather with us</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Join online for now</h2>
              <p className="text-slate-300 leading-relaxed mb-6">{lscSite.serviceTimesNote}</p>
              <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-church-orange pl-4 mb-8">
                Stream links rotate with announcements — follow{" "}
                <span className="text-slate-200 font-semibold">@{lscSite.socialHandle}</span> for the latest.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/watch"
                  className="inline-flex items-center gap-2 rounded-full bg-church-orange px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-church-gold"
                >
                  <MonitorPlay className="h-4 w-4" aria-hidden />
                  Watch live
                </Link>
                <Link
                  to="/sermons"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Browse sermons
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white/90 mb-4">Stay notified</h3>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex gap-3">
                  <MessageCircle className="h-5 w-5 shrink-0 text-church-orange" aria-hidden />
                  <span>
                    DM or comment on{" "}
                    <a
                      href={lscSite.social.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-white underline-offset-2 hover:underline"
                    >
                      Instagram
                    </a>{" "}
                    /{" "}
                    <a
                      href={lscSite.social.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-white underline-offset-2 hover:underline"
                    >
                      Facebook
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-church-orange" aria-hidden />
                  <a href={`mailto:${lscSite.email}`} className="hover:text-white underline-offset-2 hover:underline">
                    {lscSite.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-church-orange" aria-hidden />
                  <a href={`tel:${lscSite.phone}`} className="hover:text-white underline-offset-2 hover:underline">
                    {lscSite.phoneDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Connect strip */}
      <section id="visit-connect" className="scroll-mt-28 bg-white py-16 md:py-20 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3 text-center">We are here for you</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
            Pastors in charge: <span className="font-semibold text-slate-900">{lscSite.pastors}</span>. Reach out any
            time — we would love to pray with you and help you get connected.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${lscSite.email}`}
              className="group rounded-2xl border border-slate-200 bg-church-bg p-6 text-center transition-all hover:-translate-y-0.5 hover:border-church-orange/35 hover:shadow-md"
            >
              <Mail className="mx-auto mb-3 h-8 w-8 text-church-orange transition-transform group-hover:scale-110" />
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Email</div>
              <div className="text-sm font-semibold text-slate-900 break-all">{lscSite.email}</div>
            </a>
            <a
              href={`tel:${lscSite.phone}`}
              className="group rounded-2xl border border-slate-200 bg-church-bg p-6 text-center transition-all hover:-translate-y-0.5 hover:border-church-orange/35 hover:shadow-md"
            >
              <Phone className="mx-auto mb-3 h-8 w-8 text-church-orange transition-transform group-hover:scale-110" />
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Call</div>
              <div className="text-sm font-semibold text-slate-900">{lscSite.phoneDisplay}</div>
            </a>
            <Link
              to="/meet-the-pastor"
              className="group rounded-2xl border border-slate-200 bg-church-bg p-6 text-center transition-all hover:-translate-y-0.5 hover:border-church-orange/35 hover:shadow-md"
            >
              <Users className="mx-auto mb-3 h-8 w-8 text-church-orange transition-transform group-hover:scale-110" />
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Meet</div>
              <div className="text-sm font-semibold text-church-orange">Pastors &amp; story →</div>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/connect"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Connect ministries <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/give"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:border-church-orange hover:text-church-orange"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="visit-faq" className="scroll-mt-28 bg-church-bg py-16 md:py-20 border-t border-slate-200/80">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3 text-center">Common questions</h2>
          <p className="text-slate-600 text-center mb-10">Tap a question to read the answer.</p>
          <Accordion
            items={faqAccordionItems}
            itemClassName="group bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-church-orange/25 transition-colors"
          />
        </div>
      </section>
    </>
  );
}
