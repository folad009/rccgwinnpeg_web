import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function GenerationEaster() {
  return (
    <div className="pt-24 min-h-screen bg-church-bg">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Join Us For Easter</h1>
          <p className="text-slate-300 max-w-2xl mx-auto px-6">
            Choose your campus experience and celebrate the resurrection of our Savior, Jesus Christ.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Mesa", href: "https://generation.church/easter-mesa" },
            {
              name: "South Mountain",
              href: "https://generation.church/easter-south-mountain",
            },
            { name: "Fountain Hills", href: "https://generation.church/easter-fountain-hills" },
            { name: "Queen Creek", href: "https://generation.church/easter-queen-creek" },
          ].map((campus) => (
            <a
              key={campus.name}
              href={campus.href}
              target="_blank"
              rel="noreferrer"
              className="group bg-white rounded-3xl p-8 border border-slate-100 hover:border-church-gold hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between gap-6">
                <div>
                  <div className="text-sm font-semibold tracking-wide uppercase text-church-orange mb-2">
                    Campus Experience
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-slate-900">{campus.name}</h2>
                </div>
                <div className="w-12 h-12 rounded-full bg-church-bg flex items-center justify-center text-church-orange group-hover:bg-church-orange group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-5 text-slate-600 font-medium text-sm inline-flex items-center gap-2">
                Learn More <span className="text-church-orange">→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/visit-us" className="text-church-orange font-medium hover:text-church-gold transition-colors">
            Need help planning your visit? Visit us →
          </Link>
        </div>
      </div>
    </div>
  );
}

