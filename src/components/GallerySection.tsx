import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

// If you already have the 12 images inside src/assets (Img 1.jpeg ... Img 12.jpeg),
// import them here so the gallery uses those files directly. This avoids moving files.
import img1 from "@/assets/Img 1.jpeg";
import img2 from "@/assets/Img 2.jpeg";
import img3 from "@/assets/Img 3.jpeg";
import img4 from "@/assets/Img 4.jpeg";
import img5 from "@/assets/Img 5.jpeg";
import img6 from "@/assets/Img 6.jpeg";
import img7 from "@/assets/Img 7.jpeg";
import img8 from "@/assets/Img 8.jpeg";
import img9 from "@/assets/Img 9.jpeg";
import img10 from "@/assets/Img 10.jpeg";
import img11 from "@/assets/Img 11.jpeg";
import img12 from "@/assets/Img 12.jpeg";

const images = [
  { src: img1, alt: "Gallery image 1" },
  { src: img2, alt: "Gallery image 2" },
  { src: img3, alt: "Gallery image 3" },
  { src: img4, alt: "Gallery image 4" },
  { src: img5, alt: "Gallery image 5" },
  { src: img6, alt: "Gallery image 6" },
  { src: img7, alt: "Gallery image 7" },
  { src: img8, alt: "Gallery image 8" },
  { src: img9, alt: "Gallery image 9" },
  { src: img10, alt: "Gallery image 10" },
  { src: img11, alt: "Gallery image 11" },
  { src: img12, alt: "Gallery image 12" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selected === null) return;
    setSelected((selected + dir + images.length) % images.length);
  };

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container">
        <AnimatedSection>
          <p className="text-accent-red font-semibold text-sm tracking-widest uppercase mb-2">Gallery</p>
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-10">
            Our Operations in Pictures
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <button onClick={() => setSelected(i)} className="w-full overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-accent-red">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.src = "/placeholder.svg";
                    t.onerror = null;
                  }}
                />
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-on-navy p-2 min-h-[44px] min-w-[44px]" aria-label="Close">
              <X className="h-6 w-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="absolute left-2 md:left-6 text-on-navy p-2 min-h-[44px] min-w-[44px]" aria-label="Previous">
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); navigate(1); }} className="absolute right-2 md:right-6 text-on-navy p-2 min-h-[44px] min-w-[44px]" aria-label="Next">
              <ChevronRight className="h-8 w-8" />
            </button>
            <motion.img
              key={selected}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-h-[80vh] max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                const t = e.currentTarget as HTMLImageElement;
                t.src = "/placeholder.svg";
                t.onerror = null;
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
