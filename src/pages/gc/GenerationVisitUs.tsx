import { ArrowRight } from "lucide-react";
import { campuses } from "./content";

export function GenerationVisitUs() {
  return (
    <div className="pt-24 min-h-screen bg-church-bg">
      <div className="bg-slate-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Visit Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto px-6">
            Find a Generation Church campus near you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10">Campuses</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {campuses.map((c) => (
            <div key={c.name} className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{c.name}</h3>
                  <p className="text-slate-600 mt-3 leading-relaxed text-sm">{c.address}</p>
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full bg-church-bg text-church-orange flex items-center justify-center hover:bg-church-orange hover:text-white transition-colors"
                    aria-label={`Learn more about ${c.name}`}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </a>
                ) : null}
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-slate-900">Main Service</span>
                  <span className="text-slate-600">{c.mainServiceTimes}</span>
                </div>
                {c.chapelServiceTimes ? (
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold text-slate-900">Chapel Service</span>
                    <span className="text-slate-600">{c.chapelServiceTimes}</span>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">What to Expect</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["What To Wear", "Feel free to dress casually. Most of our people do!"],
              ["Parking", "As soon as you drive in, our team will help you find a space to park."],
              ["Children", "Stop by the gKids check-in area in the lobby. We’ll help you register your children using our secure system."],
              ["Friendly People", "Our people are loving, kind, and friendly—strike up a conversation and you might meet your new best friend."],
              ["Coffee", "If you’d like coffee or a snack, stop by our café. Feel free to bring it into the main auditorium."],
              ["The Service", "Our service begins with worship (~20 minutes) followed by a biblical message (30 to 40 minutes)."],
            ].map(([t, d]) => (
              <div key={t}>
                <div className="font-bold text-slate-900 mb-2">{t}</div>
                <div className="text-slate-600 text-sm leading-relaxed">{d}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Welcome Home</h3>
            <p className="text-slate-600 leading-relaxed max-w-3xl">
              Come as you are and discover why people love Generation Church. No matter your background
              or where you are spiritually, you’re welcome.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Chapel Services</h3>
            <p className="text-slate-600 leading-relaxed max-w-3xl">
              A softer, more traditional worship setting with familiar hymns, choruses, and a message from God’s Word.
            </p>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-slate-600 text-sm">
              Recognized as one of the 100 Fastest-Growing Churches in the U.S.
            </div>
            <a
              href="https://generation.church/connect"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-church-orange text-white px-7 py-3 rounded-full font-medium hover:bg-church-gold transition-colors"
            >
              Get Connected <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

