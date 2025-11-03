import { Leaf, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Pure, powerful ingredients",
    desc: "We use clinically dosed botanicals and minerals with transparent sourcing.",
    icon: Leaf,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Third‑party tested",
    desc: "Independent labs verify potency, purity, and safety in every batch.",
    icon: ShieldCheck,
    color: "from-sky-500 to-cyan-500",
  },
  {
    title: "Heart‑healthy support",
    desc: "Formulated to promote cardiovascular function and balanced inflammation.",
    icon: Heart,
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "No nonsense",
    desc: "Zero fillers, artificial colors, or GMOs. Just what your body needs.",
    icon: Sparkles,
    color: "from-amber-500 to-orange-500",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Science‑backed. Nature‑derived.
          </h2>
          <p className="mt-3 text-gray-600">
            Everything we make is designed to help you perform and feel your best.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} text-white grid place-items-center shadow`}> 
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
