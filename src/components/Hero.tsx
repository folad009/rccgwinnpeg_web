import { useRef } from "react";
import { ArrowRight, Calendar, MapPin, Clock, Play } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(textRef.current!.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
    })
    .from(imageRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      scale: 0.9,
    }, "-=0.8")
    .from(".hero-floating-card", {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, "-=0.5");

  }, { scope: containerRef });

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-church-bg pb-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
         <div className="absolute top-0 right-0 w-125 h-125 bg-orange-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
         <div className="absolute bottom-0 left-0 w-150 h-150 bg-blue-50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div ref={textRef}>
          <span className="inline-block py-3 px-6 rounded-full bg-church-primary text-church-accent text-xs font-semibold tracking-wide uppercase mb-6">
            Welcome Home
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
            A Place for <br />
            <span className="text-church-accent italic">New Beginnings</span>
          </h1>
          <p className="text-lg text-black mb-8 max-w-lg leading-relaxed">
            Join us at RCCG Living Seed Winnipeg, where we grow in faith, love, and community. 
            Experience God's presence and discover your purpose.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/live" 
              className="bg-red-600 text-white px-8 py-4 rounded-full font-medium hover:bg-red-700 transition-all flex items-center gap-2 shadow-lg shadow-red-200"
            >
              <Play className="w-4 h-4 fill-current" /> Watch Live
            </Link>
          <Link 
              to="/sermons" 
              className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all"
            >
              Watch Sermons
            </Link>
          </div>

          {/*<div className="mt-12 flex items-center gap-8 text-xl text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-600" />
              <span>Sundays at 10:00 AM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-600" />
              <span>Winnipeg, MB</span>
            </div>
          </div>*/}
        </div>

        <div ref={imageRef} className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/5 md:aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop" 
              alt="Worship Service" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="font-serif text-2xl italic">"For where two or three gather in my name, there am I with them."</p>
              <p className="mt-2 text-sm opacity-80 uppercase tracking-widest">Matthew 18:20</p>
            </div>
          </div>
          
          {/* Floating Card */}
          <div className="hero-floating-card absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
            <div className="flex items-start gap-4">
              <div className="bg-church-primary p-3 rounded-full text-white">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Next Service</h4>
                <p className="text-sm text-slate-600">Join us this Sunday for a powerful time of worship and word.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
