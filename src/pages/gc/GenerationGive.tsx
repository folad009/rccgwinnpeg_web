import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function GenerationGive() {
  return (
    <div className="pt-24 min-h-screen bg-church-bg">
      <div className="bg-slate-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Giving</h1>
          <p className="text-slate-300 max-w-2xl mx-auto px-6">
            Your gifts build the kingdom through Generation Church.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Your Gifts Build the Kingdom</h2>
          <p className="text-xl font-semibold text-orange-600 mb-8">Help Advance God’s Work Through Generation Church</p>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Give Online</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Through your offerings, you support the ministries of Generation Church. When you give online,
                you can be sure that your gift is safe and secure.
              </p>
              <a
                href="https://generationaz.churchcenteronline.com/giving"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-church-orange text-white px-7 py-4 rounded-full font-medium hover:bg-church-gold transition-colors inline-flex items-center justify-center gap-2"
              >
                Give Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Kingdom Builders</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                As a Kingdom Builder, you’ll help Generation Church reach those who aren’t yet a part of the Kingdom of God.
              </p>
              <Link
                to="/kingdom-builders"
                className="inline-flex items-center gap-2 text-church-orange font-medium hover:text-church-gold transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mt-10 bg-slate-900 text-white rounded-3xl p-8">
            <h3 className="text-2xl font-serif font-bold mb-3">1000 Generations</h3>
            <p className="text-slate-200 leading-relaxed">
              We’re one year into this two-year giving initiative focused on generational impact. Your giving
              supports renovating existing campuses, expanding ministries, and launching new environments.
            </p>
            <div className="mt-6">
              <a
                href="https://generation.church/1000generations"
                target="_blank"
                rel="noreferrer"
                className="bg-church-orange text-white px-7 py-3 rounded-full font-medium hover:bg-church-gold transition-colors inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Other Ways to Give</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "By Mail", desc: "Give during a weekend worship experience or mail your gift to our main office.", href: "#" },
                { title: "Mobile Giving", desc: "Send your gift by text using secure technology.", href: "https://generation.church/mobile-giving" },
                { title: "90-Day Tithe Challenge", desc: "Start tithing risk free. If it doesn’t feel like God came through, we’ll return the money.", href: "https://generationaz.churchcenter.com/people/forms/595547" },
                { title: "Donate Stocks", desc: "Receive a charitable giving deduction and avoid capital gains tax.", href: "https://generation.church/stock-donations/" },
                { title: "Donate with Crypto", desc: "Invest into the kingdom with your crypto currencies.", href: "http://generation.church/crypto-giving" },
                { title: "Giving for Canadians", desc: "Participate through The Great Commission Foundation for Canadian tax advantages.", href: "https://thegc.org/ca/projects/generation-church-arizona" },
              ].map((way) => (
                <a
                  key={way.title}
                  href={way.href}
                  target={way.href.startsWith("http") ? "_blank" : undefined}
                  rel={way.href.startsWith("http") ? "noreferrer" : undefined}
                  className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:border-church-gold hover:shadow-sm transition-all"
                >
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{way.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{way.desc}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Ready to Get Involved?</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              For questions about giving, email or call our team.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-church-orange" />
                <span className="font-medium text-slate-900">480-986-3149</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-church-orange" />
                <span className="font-medium text-slate-900">info@generation.church</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

