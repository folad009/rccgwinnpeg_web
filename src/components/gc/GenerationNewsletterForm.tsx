import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type NewsletterFormState = {
  firstName: string;
  lastName: string;
  email: string;
};

const STORAGE_KEY = "gcNewsletterSubmissions";

export function GenerationNewsletterForm() {
  const [form, setForm] = useState<NewsletterFormState>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isSuccess) return;
    const t = window.setTimeout(() => setIsSuccess(false), 5000);
    return () => window.clearTimeout(t);
  }, [isSuccess]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Local-only: mimic a request delay and store submission in browser.
    await new Promise((r) => window.setTimeout(r, 600));
    const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
    submissions.push({ ...form, date: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));

    setIsSubmitting(false);
    setIsSuccess(true);
    setForm({ firstName: "", lastName: "", email: "" });
  };

  return (
    <form id="gc-newsletter" onSubmit={onSubmit} className="relative">
      {isSuccess && (
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300 rounded-2xl">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">You’re In!</h3>
          <p className="text-slate-600">Thanks for subscribing. Watch for encouragement soon.</p>
        </div>
      )}

      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Sign Up for News & Encouragement</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={onChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-church-orange focus:border-transparent outline-none transition-shadow"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={onChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-church-orange focus:border-transparent outline-none transition-shadow"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            required
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-church-orange focus:border-transparent outline-none transition-shadow"
            placeholder="Email"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-church-orange text-white py-3 rounded-lg font-medium hover:bg-church-gold transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Me Updates"}
        </button>
      </div>
    </form>
  );
}

