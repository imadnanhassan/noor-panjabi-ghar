import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SearchOverlayProps {
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-100 bg-white/95 backdrop-blur-3xl flex items-center justify-center p-10"
  >
    <button
      onClick={onClose}
      className="absolute top-10 right-10 p-4 hover:rotate-90 transition-transform duration-500"
    >
      <X className="w-10 h-10 text-emerald-950" />
    </button>
    <div className="w-full max-w-5xl text-center">
      <input
        autoFocus
        type="text"
        placeholder="Search Our Atelier..."
        className="w-full text-5xl md:text-8xl font-serif text-emerald-950 bg-transparent border-b-2 border-emerald-950/10 focus:border-emerald-950 outline-none transition-all placeholder:text-slate-200"
      />
      <div className="mt-16 flex gap-6 flex-wrap justify-center">
        {["Silk Panjabi", "Bridal Abaya", "Eid Special", "Groom Suite"].map(
          (tag) => (
            <button
              key={tag}
              className="px-10 py-4 rounded-full border border-emerald-100 text-xs font-black uppercase tracking-widest text-emerald-900 hover:bg-emerald-950 hover:text-white transition-all shadow-sm"
            >
              {tag}
            </button>
          )
        )}
      </div>
    </div>
  </motion.div>
);

export default SearchOverlay;
