import { ReactNode } from "react";

type Cta = { label: string; href: string };

export function GenerationSimplePage(props: {
  title: string;
  lead?: string;
  ctas?: Cta[];
  children?: ReactNode;
}) {
  const { title, lead, ctas, children } = props;

  return (
    <div className="pt-24 min-h-screen bg-church-bg">
      <div className="bg-slate-900 text-white py-18 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{title}</h1>
          {lead ? <p className="text-slate-300 max-w-2xl mx-auto px-6">{lead}</p> : null}
          {ctas && ctas.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {ctas.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  className="bg-church-orange text-white px-6 py-3 rounded-full font-medium hover:bg-church-gold transition-colors"
                >
                  {cta.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">{children}</div>
    </div>
  );
}

