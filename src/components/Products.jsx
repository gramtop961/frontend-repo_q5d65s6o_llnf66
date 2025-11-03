import { Pill, Droplet, Leaf, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    name: "Green Boost Complex",
    tagline: "Daily vitality",
    price: 34,
    icon: Leaf,
    gradient: "from-emerald-500 to-green-600",
    dot: "#10b981",
    bullets: ["Adaptogens", "B12 + Iron", "Immune support"],
  },
  {
    name: "Omega Focus+",
    tagline: "Clarity & cognition",
    price: 29,
    icon: Droplet,
    gradient: "from-sky-500 to-cyan-600",
    dot: "#0ea5e9",
    bullets: ["Triglyceride form", "Lutein", "No fishy aftertaste"],
  },
  {
    name: "Clean Multi",
    tagline: "Complete essentials",
    price: 26,
    icon: Pill,
    gradient: "from-amber-500 to-orange-600",
    dot: "#f59e0b",
    bullets: ["Chelated minerals", "Methylated Bs", "Once daily"],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Best‑sellers</h2>
          <p className="mt-3 text-gray-600">Our community's most loved picks for everyday wellness.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-3xl border border-white/70 bg-white/80 backdrop-blur p-6 shadow-md hover:shadow-xl transition"
            >
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${p.gradient} text-white grid place-items-center shadow-lg`}>
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.tagline}</p>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: p.dot }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xl font-bold">${p.price}</span>
                <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:border-gray-300 hover:shadow-sm transition">
                  <ShoppingCart className="h-4 w-4" /> Add to cart
                </button>
              </div>

              <div className="pointer-events-none absolute inset-x-0 -bottom-6 mx-6 h-24 rounded-3xl bg-gradient-to-t from-black/5 to-transparent opacity-0 blur-lg transition group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
