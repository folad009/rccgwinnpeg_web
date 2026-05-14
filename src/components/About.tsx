import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="about"
      className="py-24 bg-church-bg overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop"
                alt="Community"
                className="rounded-2xl object-cover h-64 w-full translate-y-8"
              />
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop"
                alt="Worship"
                className="rounded-2xl object-cover h-64 w-full"
              />
            </div>
            {/* Decorative circle */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-orange-200 rounded-full opacity-50" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-2 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Living Seed Church (LSC) is a Young Adults and Youth movement of
              the Redeemed Christian Church of God (RCCG), an international
              church present in over 195 countries with the mandate to raise
              believers of character who are excellent and above all on fire for
              God.
            </p>

            <p className="text-slate-700 leading-relaxed">
              We are a growing church with a desire to spread the love of Christ
              to every young person in the community by being Kingdom
              Ambassadors in every sphere of human endeavor. The transformation
              we see among us is humbling, and we eagerly anticipate what lies
              ahead knowing the best is yet to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
