import { Ministries as MinistriesSection } from "@/components/Ministries";

export function Ministries() {
  return (
    <div className="pt-20">
      <div className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Ministries</h1>
        <p className="text-slate-300 max-w-xl mx-auto px-6">
          Serving God by serving others. Find your place to belong and contribute.
        </p>
      </div>
      <MinistriesSection />
    </div>
  );
}
