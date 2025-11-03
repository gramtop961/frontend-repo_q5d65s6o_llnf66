import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Jasmine K.",
    role: "Marathon runner",
    quote:
      "Green Boost has been a game‑changer for my morning training. Clean energy with zero jitters.",
    rating: 5,
  },
  {
    name: "Daniel P.",
    role: "Designer & dad",
    quote:
      "Omega Focus+ helped me stay sharp during long sprints at work and bedtime stories at night.",
    rating: 5,
  },
  {
    name: "Sofia M.",
    role: "Yoga instructor",
    quote:
      "I love the transparency. Simple labels, real ingredients, and I feel the difference.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What people are saying</h2>
          <p className="mt-3 text-gray-600">Real stories from our community.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={r.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-gray-700">“{r.quote}”</p>
              <footer className="mt-4 text-sm text-gray-500">
                <span className="font-medium text-gray-700">{r.name}</span> • {r.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
