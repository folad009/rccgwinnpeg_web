import { useMemo, useState } from "react";
import {
  ArrowRight,
  Calendar,
  Mic2,
  Play,
  Search,
  Sparkles,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { lscSermons } from "@/pages/gc/sermonsContent";
import { lscSite } from "@/pages/gc/lscSiteContent";

const SECTION_NAV = [
  { id: "sermon-list", label: "All messages" },
  { id: "sermon-channel", label: "YouTube" },
] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SermonsEngagingLayout() {
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [series, setSeries] = useState<string>("All Series");
  const [query, setQuery] = useState("");

  const seriesOptions = useMemo(() => {
    const unique = Array.from(new Set(lscSermons.map((s) => s.series).filter(Boolean)));
    return ["All Series", ...unique];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = sort === "newest" ? lscSermons : [...lscSermons].reverse();
    let list = series === "All Series" ? base : base.filter((s) => s.series === series);
    if (q) {
      list = list.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.series.toLowerCase().includes(q) ||
          s.speaker.toLowerCase().includes(q),
      );
    }
    return list;
  }, [query, series, sort]);

  const [featured, ...rest] = filtered.length ? filtered : [];

  return (
    <>
      <header className="relative overflow-hidden bg-slate-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 65% 50% at 20% 20%, rgba(249,115,22,0.35), transparent), radial-gradient(ellipse 50% 45% at 85% 75%, rgba(59,130,246,0.18), transparent)",
          }}
          aria-hidden
        />
        <div className="relative container mx-auto px-6 py-16 md:py-24 text-center max-w-4xl">
          <p className="text-church-orange font-semibold tracking-[0.2em] text-xs uppercase mb-4">Messages</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">Sermons</h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Teaching from {lscSite.churchNameShort} — practical, Bible-rooted messages to help you walk in character,
            excellence, and fire for God.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <Mic2 className="h-4 w-4 text-church-orange" aria-hidden />
              Pastors &amp; guests
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <Youtube className="h-4 w-4 text-church-orange" aria-hidden />
              @RCCGLSCWINNIPEG
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <Calendar className="h-4 w-4 text-church-orange" aria-hidden />
              Newest first
            </span>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("sermon-list")}
              className="inline-flex items-center gap-2 rounded-full bg-church-orange px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-church-gold"
            >
              <Play className="h-4 w-4" aria-hidden />
              Browse messages
            </button>
            <a
              href={lscSite.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Youtube className="h-4 w-4" aria-hidden />
              Open YouTube channel
            </a>
          </div>
        </div>
      </header>

      <nav
        aria-label="Sermons page shortcuts"
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

      <section id="sermon-list" className="scroll-mt-28 bg-white py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">Library</h2>
              <p className="text-slate-600 text-sm md:text-base max-w-xl">
                Filter by series, search by speaker or title, and toggle order. Permalinks can point to each message
                when you add them on YouTube.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setSort("newest")}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold transition-all",
                  sort === "newest"
                    ? "bg-church-orange text-white shadow-md"
                    : "border border-slate-200 bg-church-bg text-slate-800 hover:border-church-orange/40",
                )}
              >
                Newest
              </button>
              <button
                type="button"
                onClick={() => setSort("oldest")}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold transition-all",
                  sort === "oldest"
                    ? "bg-church-orange text-white shadow-md"
                    : "border border-slate-200 bg-church-bg text-slate-800 hover:border-church-orange/40",
                )}
              >
                Oldest
              </button>
            </div>
          </div>

          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative max-w-md w-full">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search title, series, or speaker…"
                className="w-full rounded-full border border-slate-200 bg-church-bg py-3 pl-11 pr-4 text-sm text-slate-900 shadow-inner outline-none transition-colors focus:border-church-orange focus:ring-2 focus:ring-church-orange/20"
                aria-label="Search sermons"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {seriesOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSeries(opt)}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-xs font-bold uppercase tracking-wide transition-all sm:text-sm",
                    series === opt
                      ? "bg-slate-900 text-white shadow-md"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-church-orange/45",
                  )}
                >
                  {opt === "All Series" ? "All" : opt}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-church-bg py-16 text-center text-slate-600">
              <Sparkles className="mx-auto mb-3 h-8 w-8 text-church-orange opacity-80" aria-hidden />
              <p className="font-medium text-slate-900">No messages match your filters.</p>
              <p className="mt-1 text-sm">Try clearing search or choosing “All”.</p>
            </div>
          ) : (
            <>
              {featured && (
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group mb-10 block overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 md:p-12 text-white shadow-xl transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="rounded-full bg-church-orange px-3 py-1 text-xs font-bold uppercase tracking-wide">
                      Featured
                    </span>
                    <span className="text-sm text-slate-400">{featured.date}</span>
                    <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-slate-200">
                      {featured.series}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold leading-snug mb-4 group-hover:text-church-orange transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-slate-300 mb-6">{featured.speaker}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-church-orange">
                    Watch on YouTube <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                {rest.map((s) => (
                  <a
                    key={`${s.date}-${s.title}`}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-3xl border border-slate-100 bg-church-bg/40 p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:border-church-orange/30 hover:bg-white hover:shadow-md"
                  >
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-church-orange ring-1 ring-church-orange/20">
                        {s.series}
                      </span>
                      <span className="text-sm text-slate-500">{s.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-church-orange transition-colors leading-snug mb-4">
                      {s.title}
                    </h3>
                    <div className="flex items-center justify-between gap-4 text-sm text-slate-600">
                      <span>{s.speaker}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-church-orange">
                        Watch <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section id="sermon-channel" className="scroll-mt-28 border-t border-slate-200 bg-church-bg py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <Youtube className="mx-auto mb-4 h-12 w-12 text-church-orange" aria-hidden />
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">Never miss a message</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Subscribe on YouTube and turn on notifications for @{lscSite.socialHandle} so new uploads and live streams
            find you first.
          </p>
          <a
            href={lscSite.social.youtube}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-church-orange px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-church-gold"
          >
            Subscribe on YouTube <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
