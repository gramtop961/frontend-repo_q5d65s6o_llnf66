import { Rocket, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white grid place-items-center shadow-lg shadow-emerald-600/30">
            <Leaf className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight">VerdantLabs</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#benefits" className="hover:text-gray-900">Benefits</a>
          <a href="#products" className="hover:text-gray-900">Products</a>
          <a href="#testimonials" className="hover:text-gray-900">Reviews</a>
          <a href="#" className="px-4 py-2 rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700 transition">Shop now</a>
        </nav>
      </header>

      <div className="container mx-auto px-6 pb-20 pt-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-medium">
            <Rocket className="h-4 w-4" />
            Natural performance boost
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Elevate your health with clean, potent nutrition
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Premium plant-powered supplements, formulated by nutritionists and backed by science. No fillers. No fluff. Just results.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-start justify-center">
            <a
              href="#products"
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition"
            >
              Explore products
            </a>
            <a
              href="#benefits"
              className="px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 hover:border-gray-300 transition"
            >
              Why it works
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-500">Vegan • Non-GMO • Third‑party tested</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative mx-auto h-[420px] w-full max-w-md">
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-emerald-200 via-emerald-100 to-amber-100" />
            <div className="absolute inset-2 rounded-[24px] bg-white/80 backdrop-blur border border-white/60 shadow-xl" />
            <div className="absolute inset-6 rounded-2xl bg-gradient-to-br from-white to-emerald-50 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white grid place-items-center shadow">
                      <Leaf className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Green Boost Complex</div>
                      <div className="text-xs text-gray-500">60 vegan capsules</div>
                    </div>
                  </div>
                  <span className="text-emerald-700 font-semibold">$34</span>
                </div>
                <p className="mt-6 text-sm text-gray-600">
                  Daily blend of adaptogens and micronutrients that supports energy, focus, and immune health.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-emerald-50 p-3">
                  <div className="text-xs text-gray-500">Energy</div>
                  <div className="font-semibold text-emerald-700">+24%</div>
                </div>
                <div className="rounded-xl bg-emerald-50 p-3">
                  <div className="text-xs text-gray-500">Focus</div>
                  <div className="font-semibold text-emerald-700">+18%</div>
                </div>
                <div className="rounded-xl bg-emerald-50 p-3">
                  <div className="text-xs text-gray-500">Immunity</div>
                  <div className="font-semibold text-emerald-700">+31%</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
