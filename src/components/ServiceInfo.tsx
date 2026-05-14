import { useRef } from "react";
import { Clock, MapPin, Users, BookOpen } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Sunday Worship",
    time: "10:00 AM - 12:00 PM",
    desc: "A vibrant celebration service with worship, prayer, and the Word.",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Bible Study",
    time: "Wednesdays 7:00 PM",
    desc: "Digging deep into the scriptures to understand God's will.",
    icon: BookOpen,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Prayer Meeting",
    time: "Fridays 7:00 PM",
    desc: "A time of intercession and spiritual warfare.",
    icon: Clock,
    color: "bg-purple-50 text-purple-600",
  },
];

export function ServiceInfo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".service-card");
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section className="py-24 bg-white" id="visit" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Join Us This Week</h2>
          <p className="text-slate-600">
            We have several opportunities for you to connect, grow, and serve throughout the week.
            There is a place for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow group text-center"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto ${service.color} group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-orange-600 font-medium mb-4 text-sm">{service.time}</p>
             
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">Need Directions?</h3>
            <p className="text-slate-300 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> 
              123 Church Street, Winnipeg, MB R3C 1A1 (Placeholder Address)
            </p>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-auto rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.627236526986!2d-97.13837438428996!3d49.89513697939969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea715f00000001%3A0x0!2zNDnCsDUzJzQyLjUiTiA5N8KwMDgnMTAuMiJX!5e0!3m2!1sen!2sca!4v1647890000000!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Church Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
