import { Facebook, Instagram, Mail, Phone, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { lscSite } from "@/pages/gc/lscSiteContent";

export function GenerationFooter() {
  const { social, socialHandle } = lscSite;

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="rounded-2xl bg-slate-100 p-6 mb-6 border border-slate-200/80 shadow-inner">
              <Link to="/" className="inline-block">
                <img
                  src="/images/rccg-living-seed-logo.png"
                  alt="RCCG Living Seed Winnipeg — The Redeemed Christian Church of God"
                  className="h-16 sm:h-20 w-auto max-w-[220px] object-contain object-left mx-auto md:mx-0"
                />
              </Link>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">{lscSite.footerTagline}</p>
            <p className="text-xs text-slate-500 mb-4">@{socialHandle}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-church-orange hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-church-orange hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={social.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-church-orange hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={social.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-church-orange hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${lscSite.email}`}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-church-orange hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-church-orange transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/meet-the-pastor" className="hover:text-church-orange transition-colors">
                  Meet the Pastor
                </Link>
              </li>
              <li>
                <Link to="/visit" className="hover:text-church-orange transition-colors">
                  Visit
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="hover:text-church-orange transition-colors">
                  Sermons
                </Link>
              </li>
              <li>
                <Link to="/connect" className="hover:text-church-orange transition-colors">
                  Connect
                </Link>
              </li>
              <li>
                <Link to="/give" className="hover:text-church-orange transition-colors">
                  Give
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Gathering</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{lscSite.serviceTimesNote}</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-church-orange flex-shrink-0 mt-0.5" />
                <a href={`tel:${lscSite.phone}`} className="hover:text-church-orange transition-colors">
                  {lscSite.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-church-orange flex-shrink-0 mt-0.5" />
                <a href={`mailto:${lscSite.email}`} className="hover:text-church-orange transition-colors break-all">
                  {lscSite.email}
                </a>
              </li>
              <li className="pl-8 text-slate-400">{lscSite.pastors}</li>
            </ul>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("gc-newsletter");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="w-full bg-church-orange text-white px-4 py-2 rounded-lg font-medium hover:bg-church-gold transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {lscSite.copyrightName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
