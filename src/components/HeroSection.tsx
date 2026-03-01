import { motion } from "framer-motion";
import { Phone, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Cement distribution depot" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-navy/80" />
    </div>

    <div className="relative container text-center py-32 md:py-0">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-accent-red font-semibold text-sm md:text-base tracking-widest uppercase mb-4"
      >
        Key Distributor of Dangote Cement
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-on-navy font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl mx-auto mb-6"
      >
        Powering Construction Across North Central Nigeria
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-white text-base md:text-lg max-w-2xl mx-auto mb-10"
      >
        Reliable bulk cement supply from Obajana to construction sites across the region. Trusted by builders, developers, and contractors.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent-red text-accent-foreground px-8 py-4 rounded-md text-base font-semibold hover:opacity-90 transition-opacity min-h-[44px]">
          <FileText className="h-5 w-5" /> Request Bulk Supply
        </a>
        <a href="tel:+2348144719799" className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-on-navy/30 text-on-navy px-8 py-4 rounded-md text-base font-semibold hover:bg-on-navy/10 transition-colors min-h-[44px]" style={{ borderColor: "hsla(0,0%,98%,0.3)" }}>
          <Phone className="h-5 w-5" /> Call Now
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
