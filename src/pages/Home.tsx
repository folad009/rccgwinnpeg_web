import { Hero } from "@/components/Hero";
import { ServiceInfo } from "@/components/ServiceInfo";
import WelcomeNote from "@/components/WelcomeNote";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Home() {
  return (
    <>
      <Hero />
      <WelcomeNote />
      <ServiceInfo />

      {/* Short About Preview */}
      <section className="py-40 bg-church-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
            Welcome to Our Family
          </h2>
          <p className="text-slate-600 max-w-5xl mx-auto mb-8 text-[17px]">
            We are excited to connect, worship and lean into God’s Word together
            as one family with our online services. Each service will be full of
            passionate worship, an encouraging and relevant message from our
            Pastors, church updates and ways to stay engaged and be a part of
            the Church. Be sure to invite your friends and family to watch
            online with you, and we’ll see you at Living Seed Church at Home!
          </p>
          <div className="flex justify-center gap-8 mb-10">
            <a 
              href="#visit" 
              className="bg-church-orange text-white px-8 py-4 rounded-full font-medium hover:bg-church-gold transition-all flex items-center gap-2 group"
            >
              Plan Your Visit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
