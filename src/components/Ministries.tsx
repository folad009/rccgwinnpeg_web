import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ministries } from "@/data/ministries";

gsap.registerPlugin(ScrollTrigger);

export function Ministries() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".ministry-card");
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <section id="ministries" className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-2 block">Get Involved</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Our Ministries</h2>
          <p className="text-slate-600">
            There is a place for you to serve and grow. Discover your gifts and make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry) => (
            <Link
              key={ministry.id}
              to={`/ministries/${ministry.slug}`}
              className="ministry-card group p-8 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all bg-white flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${ministry.color} group-hover:scale-110 transition-transform`}>
                <ministry.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">{ministry.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{ministry.desc}</p>
              <div className="flex items-center text-orange-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
