import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="min-h-screen antialiased text-gray-900">
      <Hero />
      <Benefits />
      <Products />
      <Testimonials />

      <footer className="border-t border-gray-100 bg-white">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} VerdantLabs. Clean nutrition for modern life.
          </p>
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <a className="hover:text-gray-900" href="#benefits">Benefits</a>
            <a className="hover:text-gray-900" href="#products">Products</a>
            <a className="hover:text-gray-900" href="#testimonials">Reviews</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
