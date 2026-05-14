import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Accordion(props: {
  items: { key?: string; title: string; content: ReactNode }[];
  className?: string;
  itemClassName?: string;
}) {
  const itemClass =
    props.itemClassName ?? "group bg-church-bg border border-slate-100 rounded-2xl p-5";

  return (
    <div className={cn("space-y-3", props.className)}>
      {props.items.map((item) => (
        <details
          key={item.key ?? item.title}
          className={cn(itemClass)}
        >
          <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
            <span className="text-lg font-bold text-slate-900">{item.title}</span>
            <span className="text-church-orange text-sm font-medium group-open:rotate-180 transition-transform">
              +
            </span>
          </summary>
          <div className="mt-3 text-slate-700 leading-relaxed text-[15px] whitespace-pre-line">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  );
}

