import { About as AboutSection } from "@/components/About";
import { MandateMarquee } from "@/components/MandateMarquee";
import { ValueMarquee } from "@/components/ValueMarquee";

export function About() {
  return (
    <div className="pt-42">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          About Living Seed Church
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto px-6">
          Discover our story, our vision, and what we believe.
        </p>
      </div>

      <AboutSection />

      {/* MANDATE */}
      <MandateMarquee />

      {/* VISION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-6 text-slate-900">
            Our Vision
          </h2>

          <p className="text-xl font-semibold text-orange-600 mb-6">
            Raising Kingdom Ambassadors
          </p>

          <p className="text-slate-700 leading-relaxed">
            We see a day when the gospel of the kingdom will be on the lips of
            men and women across Canada. A day when an army of purposeful men
            and women will stand at the frontline of every sector applying
            God’s kingdom principles.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <ValueMarquee />

      {/* BELIEFS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-serif font-bold mb-10 text-slate-900 text-center">
            Our Beliefs
          </h2>

          <div className="space-y-10 text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">God</h3>
              <p>
                We believe that God is a Trinity: Father, Son and Holy Spirit,
                each an uncreated person, one in essence, equal in power and
                glory. We believe in God the Father, Almighty Creator of heaven
                and earth.
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Genesis 1:1; Psalm 90:2; Matthew 3:16-17
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Jesus</h3>
              <p>
                We believe in Jesus Christ, God’s only Son, our Lord. He was
                conceived by the Holy Spirit and born of the virgin Mary. He was
                crucified, dead and buried, rose again on the third day,
                ascended to heaven, and sits at the right hand of the Father.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Holy Spirit
              </h3>
              <p>
                We believe the Holy Spirit is God, the giver of life who was
                given to the Church at Pentecost. He empowers believers to serve
                and conform to the image of Christ.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">The Bible</h3>
              <p>
                We believe the Bible is the perfect and inspired Word of God. It
                is the source of doctrine, instruction, correction, and
                practical guidance for everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PASTOR */}
      <section className="py-20 bg-church-bg">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10">
            Our Pastor
          </h2>

          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
              <img
                src="/pastor.jpg"
                alt="Pastor Philip Olabisi"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Pastor Philip & Abisola Olabisi
            </h3>

            <p className="text-slate-700 mt-6 leading-relaxed max-w-2xl">
              Philip and Abisola Olabisi are the servant-leaders of Living Seed
              Church. For over 10 years they served as youth leaders in
              different parishes of the Redeemed Christian Church of God.
              Carrying a deep burden for young people, they pursued their call
              in 2021 by planting a Young Adult and Youth Church in Winnipeg,
              Manitoba.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}