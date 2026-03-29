import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import yogaDay from "@/assets/yoga-day.jpg";
import treePlantation from "@/assets/tree-plantation.jpg";
import cricketTournament from "@/assets/cricket-tournament.jpg";
import culturalFest from "@/assets/cultural-fest.jpg";
import techFest from "@/assets/tech-fest.jpg";
import sportsDay from "@/assets/sports-day.jpg";

const events = [
  { title: "Yoga Day", tag: "Wellness", image: yogaDay },
  { title: "Tree Plantation Activity", tag: "Environment", image: treePlantation },
  { title: "Inter College Cricket Tournament", tag: "Sports", image: cricketTournament },
  { title: "Cultural Fest", tag: "Culture", image: culturalFest },
  { title: "Tech Fest & Hackathon", tag: "Technical", image: techFest },
  { title: "Sports Day", tag: "Sports", image: sportsDay },
];

const tags = ["All", ...Array.from(new Set(events.map((e) => e.tag)))];

const CampusLife = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = active === "All" ? events : events.filter((e) => e.tag === active);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (lightbox === null) return;
      setLightbox((lightbox + dir + filtered.length) % filtered.length);
    },
    [lightbox, filtered.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [lightbox, navigate]);

  return (
    <section className="py-24 px-6" id="campus">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Life at NGF</p>
          <h2 className="text-3xl md:text-4xl font-medium mb-6 font-display">Campus Life & Events</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => { setActive(t); setLightbox(null); }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === t
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((e, i) => (
              <motion.div
                key={e.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary transition-colors cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{e.tag}</span>
                  <h3 className="text-background font-medium font-display text-lg">{e.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-background/80 hover:text-background transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 text-background/60 hover:text-background transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            >
              <ChevronLeft size={36} />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 text-background/60 hover:text-background transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
            >
              <ChevronRight size={36} />
            </button>

            {/* Image */}
            <motion.div
              key={filtered[lightbox].title}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox].image}
                alt={filtered[lightbox].title}
                className="w-full rounded-2xl shadow-2xl object-contain max-h-[80vh]"
              />
              <div className="text-center mt-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{filtered[lightbox].tag}</span>
                <h3 className="text-background font-medium font-display text-xl mt-1">{filtered[lightbox].title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CampusLife;
