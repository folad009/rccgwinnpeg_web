import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { homeGoingOnAccordionItems } from "./content";
import { lscSite } from "./lscSiteContent";
import { GenerationNewsletterForm } from "@/components/gc/GenerationNewsletterForm";
import { Accordion } from "@/pages/gc/parts/Accordion";

gsap.registerPlugin(ScrollTrigger);

const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2670&auto=format&fit=crop",
    alt: "Worship gathering",
    quote: "Therefore, since we have such a hope…",
    citation: "2 Corinthians 3:12",
  },
  {
    src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop",
    alt: "Church community",
    quote: "For where two or three gather in my name, there am I with them.",
    citation: "Matthew 18:20",
  },
  {
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop",
    alt: "Hands raised in worship",
    quote: "Let everything that has breath praise the Lord.",
    citation: "Psalm 150:6",
  },
  {
    src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2670&auto=format&fit=crop",
    alt: "Sunlight in sanctuary",
    quote: "Taste and see that the Lord is good.",
    citation: "Psalm 34:8",
  },
];

const HERO_INTERVAL_MS = 5500;

function HeroImageSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, HERO_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const slide = heroSlides[index];

  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroSlides.map((s, i) => (
        <div
          key={s.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-out",
            i === index ? "opacity-100 z-[1]" : "opacity-0 z-0 pointer-events-none",
          )}
          aria-hidden={i !== index}
        >
          <img src={s.src} alt={s.alt} className="w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent z-[2] pointer-events-none" />

      <div className="absolute bottom-28 left-0 right-0 z-[4] flex justify-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 rounded-full transition-all",
              i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80",
            )}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-8 right-8 text-white z-[3] pointer-events-none">
        <p className="font-serif text-2xl italic transition-opacity duration-500">{slide.quote}</p>
        <p className="mt-2 text-sm opacity-80 uppercase tracking-widest">{slide.citation}</p>
      </div>

      <button
        type="button"
        aria-label="Previous image"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-[4] w-11 h-11 rounded-full bg-white/90 text-slate-900 shadow-md flex items-center justify-center hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-[4] w-11 h-11 rounded-full bg-white/90 text-slate-900 shadow-md flex items-center justify-center hover:bg-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

    </div>
  );
}

export function GenerationHome() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const ease = "power3.out";
        const easeOut = "power2.out";
        const stOnce = {
          toggleActions: "play none none none" as const,
          invalidateOnRefresh: true,
        };

        const heroTl = gsap.timeline({ defaults: { ease } });
        heroTl.from(".gc-hero-text > *", { y: 36, opacity: 0, duration: 0.75, stagger: 0.1 });
        heroTl.from(".gc-hero-slider", { x: 48, opacity: 0, duration: 0.85 }, "-=0.55");

        gsap.to(".gc-hero-blur-top", {
          y: 56,
          scrollTrigger: { trigger: ".gc-hero", start: "top top", end: "bottom top", scrub: 1.1 },
          ease: "none",
        });
        gsap.to(".gc-hero-blur-bottom", {
          y: -40,
          scrollTrigger: { trigger: ".gc-hero", start: "top top", end: "bottom top", scrub: 1.1 },
          ease: "none",
        });

        const scrollReveal = (
          targets: gsap.TweenTarget,
          from: gsap.TweenVars,
          to: gsap.TweenVars,
          trigger: string,
          start: string,
        ) => {
          gsap.fromTo(targets, from, {
            ...to,
            immediateRender: false,
            scrollTrigger: { trigger, start, ...stOnce },
          });
        };

        scrollReveal(
          ".gc-welcome-inner > *",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08, ease: easeOut },
          ".gc-welcome",
          "top 85%",
        );

        scrollReveal(
          ".gc-watch-intro > *",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.08, ease: easeOut },
          ".gc-watch",
          "top 85%",
        );
        scrollReveal(
          ".gc-watch-card",
          { autoAlpha: 0, y: 32 },
          { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12, ease: easeOut },
          ".gc-watch",
          "top 80%",
        );

        const goingTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".gc-going",
            start: "top 80%",
            ...stOnce,
          },
        });
        goingTl.fromTo(
          ".gc-going-heading > *",
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.08, ease: easeOut, immediateRender: false },
        );
        goingTl.fromTo(
          ".gc-going-visual",
          { autoAlpha: 0, x: -36 },
          { autoAlpha: 1, x: 0, duration: 0.7, ease: easeOut, immediateRender: false },
          "<0.06",
        );
        goingTl.fromTo(
          ".gc-going-accordion details",
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.48,
            stagger: 0.035,
            ease: easeOut,
            immediateRender: false,
          },
          "<0.12",
        );

        scrollReveal(
          ".gc-easter-panel > *",
          { autoAlpha: 0, y: 26 },
          { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.1, ease: easeOut },
          ".gc-easter",
          "top 85%",
        );

        scrollReveal(
          ".gc-newsletter-inner",
          { autoAlpha: 0, y: 32 },
          { autoAlpha: 1, y: 0, duration: 0.75, ease: easeOut },
          ".gc-newsletter",
          "top 88%",
        );

        requestAnimationFrame(() => ScrollTrigger.refresh());
      });

      return () => mm.revert();
    },
    { scope: pageRef },
  );

  return (
    <div ref={pageRef} className="pt-24 bg-church-bg">
      {/* Hero / Welcome */}
      <section className="gc-hero relative min-h-140 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="gc-hero-blur-top absolute top-0 right-0 w-85 h-85 bg-orange-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 will-change-transform" />
          <div className="gc-hero-blur-bottom absolute bottom-0 left-0 w-105 h-105 bg-blue-900 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 will-change-transform" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="gc-hero-text text-center lg:text-left">
            <span className="inline-block py-3 px-6 rounded-full bg-church-primary text-church-accent text-xs font-semibold tracking-wide uppercase mb-6">
              {lscSite.heroBadge}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.08] mb-4">
              {lscSite.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl font-serif text-church-accent italic mb-6">{lscSite.heroTitleAccent}</p>
            <p className="text-lg text-slate-900/80 mb-8 max-w-xl leading-relaxed">{lscSite.heroLead}</p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="/connect"
                className="bg-church-orange text-white px-8 py-4 rounded-full font-medium hover:bg-church-gold transition-all flex items-center gap-2 shadow-sm"
              >
                Connect <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/watch"
                className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-red-600 hover:text-white transition-all flex items-center gap-2"
              >
                <Play className="w-4 h-4" /> Watch Live
              </Link>
            </div>
          </div>

          <div className="gc-hero-slider relative mt-10 lg:mt-14 mb-10">
            <HeroImageSlider />
          </div>
        </div>
      </section>

      {/* Pastor welcome letter */}
      <section className="gc-welcome py-16 md:py-20 bg-white border-y border-slate-100">
        <div className="gc-welcome-inner container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 md:items-center">
          <div className="mx-auto w-full max-w-md md:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200/80 bg-[#e8dcc8]">
              <img
                src={lscSite.welcomePastorPhotoSrc}
                alt={lscSite.welcomePastorPhotoAlt}
                className="w-full aspect-[4/5] object-cover object-[center_12%]"
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="text-left">
            <h2 className="text-sm font-bold tracking-[0.35em] text-church-orange mb-6">
              {lscSite.welcomeHeading}
            </h2>
            <p className="text-2xl md:text-3xl font-serif font-bold text-slate-900 leading-snug mb-8">
              {lscSite.welcomeIntro}
            </p>
            {lscSite.welcomeParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-slate-700 leading-relaxed text-[17px] mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
            <div className="mt-10 pt-8 border-t border-church-gold/50">
              <p className="font-serif text-xl font-bold text-slate-900">{lscSite.welcomePastorName}</p>
              <p className="text-church-orange font-semibold text-sm uppercase tracking-widest mt-2">
                {lscSite.welcomePastorTitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Watch Live schedule */}
      <section className="gc-watch py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="gc-watch-intro max-w-3xl">
            <h2 className="text-4xl font-serif font-bold mb-6">{lscSite.watchTitle}</h2>
            <p className="text-slate-200 mb-6">{lscSite.watchLead}</p>
            <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-church-orange pl-4">
              {lscSite.serviceTimesNote}
            </p>
          </div>

          <div className="gc-watch-grid grid md:grid-cols-2 gap-8">
            <div className="gc-watch-card bg-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-white/90">Join Us Online</h3>
              <p className="text-slate-200 leading-relaxed mb-6">{lscSite.serviceTimesNote}</p>
              <div className="mt-8">
                <Link
                  to="/watch"
                  className="bg-church-orange text-white px-6 py-3 rounded-full font-medium hover:bg-church-gold transition-colors inline-flex items-center gap-2"
                >
                  Watch Live <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="gc-watch-card bg-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white/90">A Promise</h3>
              <p className="text-slate-200 leading-relaxed">
                “Therefore, since we have such a hope, we are very bold.” <br />
                <span className="text-slate-400 text-sm">2 Corinthians 3:12</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="gc-going py-16 md:py-20 bg-church-bg">
        <div className="gc-going-inner container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            <div className="gc-going-visual relative h-full min-h-[280px] md:min-h-[340px] rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200/70 bg-slate-900">
              <img
                src={lscSite.goingOnSectionImageSrc}
                alt={lscSite.goingOnSectionImageAlt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/35 to-slate-900/10 pointer-events-none"
                aria-hidden
              />
            </div>

            <div className="flex flex-col min-h-0">
              <div className="gc-going-heading mb-8 text-left">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">
                  What We Have Going On
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Discover ways to worship, grow, and get plugged in.
                </p>
              </div>

              <Accordion
                className="gc-going-accordion max-h-[70vh] lg:max-h-[min(72vh,720px)] overflow-y-auto pr-1 -mr-1 [scrollbar-gutter:stable]"
                itemClassName="group bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:border-church-orange/25 transition-colors"
                items={homeGoingOnAccordionItems().map((row) => ({
                  key: row.key,
                  title: row.title,
                  content: (
                    <div className="space-y-4">
                      <p className="text-slate-600 leading-relaxed text-[15px]">{row.description}</p>
                      {row.href !== "#" ? (
                        row.external ? (
                          <a
                            href={row.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-church-orange font-semibold text-sm hover:underline"
                          >
                            {row.linkLabel} <ArrowRight className="w-4 h-4" />
                          </a>
                        ) : (
                          <Link
                            to={row.href}
                            className="inline-flex items-center gap-2 text-church-orange font-semibold text-sm hover:underline"
                          >
                            {row.linkLabel} <ArrowRight className="w-4 h-4" />
                          </Link>
                        )
                      ) : null}
                    </div>
                  ),
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Easter banner */}
      <section className="gc-easter py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="gc-easter-panel rounded-3xl border border-white/10 bg-white/5 p-10 md:p-14 text-center">
            <div className="text-sm font-semibold tracking-wide uppercase text-church-accent mb-3">
              Easter
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">{lscSite.easterTitle}</h2>
            <p className="text-slate-200 mb-8">{lscSite.easterLead}</p>
            <Link
              to="/easter"
              className="inline-flex items-center gap-2 bg-church-orange text-white px-8 py-4 rounded-full font-medium hover:bg-church-gold transition-colors"
            >
              Stay Updated <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="gc-newsletter py-16 bg-white" aria-label="Newsletter">
        <div className="gc-newsletter-inner container mx-auto px-6">
          <GenerationNewsletterForm />
        </div>
      </section>
    </div>
  );
}

