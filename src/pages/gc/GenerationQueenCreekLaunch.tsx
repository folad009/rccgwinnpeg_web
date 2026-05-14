import { ArrowRight } from "lucide-react";
import { GenerationSimplePage } from "./GenerationSimplePage";

export function GenerationQueenCreekLaunch() {
  return (
    <GenerationSimplePage
      title="Queen Creek's Newest Church"
      lead="Welcome home! Generation Church is a place to find truth, rediscover purpose, and build friendships."
      ctas={[
        {
          label: "Let Us Know You're Coming",
          href: "https://generationaz.churchcenter.com/people/forms/194555",
        },
      ]}
    >
      <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed space-y-6">
        <p>
          For ten years, Generation Church has been repeatedly named Arizona’s fastest-growing church.
          You’ll experience bold, Biblical preaching and worship that’s passionate and full of life.
        </p>
        <p>
          Join the launch team to help build Queen Creek with hospitality, kids ministry, worship, safety,
          tech, and more. Your next step can make a lasting difference.
        </p>
        <a
          href="https://generation.church/g101"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-church-orange font-medium hover:text-church-gold transition-colors"
        >
          Learn about G101 <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </GenerationSimplePage>
  );
}

