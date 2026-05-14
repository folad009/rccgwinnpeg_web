import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const mandateItems = [
  "Spirit-Filled Believers",
  "Word-Filled",
  "People of Character",
  "People of Excellence",
  "On Fire for God",
];

export function MandateMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const marquee = marqueeRef.current;

      gsap.to(marquee, {
        xPercent: -50,
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      const tween = gsap.to(marquee, {
        xPercent: -50,
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      containerRef.current?.addEventListener("mouseenter", () => tween.pause());
      containerRef.current?.addEventListener("mouseleave", () =>
        tween.resume(),
      );
    },
    { scope: containerRef },
  );

  return (
    <section className="py-10 bg-church-gold overflow-hidden" ref={containerRef}>
      <div className=" mx-auto px-6 text-center">
      

        <div className="overflow-hidden relative">
          <div
            ref={marqueeRef}
            className="flex gap-16 whitespace-nowrap text-2xl font-serif font-extrabold text-white"
          >
            {[...mandateItems, ...mandateItems].map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
