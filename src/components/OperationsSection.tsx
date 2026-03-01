import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calculator, MapPin, Headphones, Landmark } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const departments = [
  {
    icon: Calculator,
    title: "Accounting",
    desc: "Our accounting department ensures transparent financial management, accurate invoicing, and timely reconciliation of all cement transactions across our distribution network.",
  },
  {
    icon: MapPin,
    title: "Tracking",
    desc: "Real-time GPS tracking of our delivery fleet ensures customers know exactly when their cement shipments will arrive. Full visibility from depot to delivery point.",
  },
  {
    icon: Headphones,
    title: "Call Center",
    desc: "Our dedicated call center operates during business hours to handle bulk orders, delivery inquiries, and customer support for all cement distribution operations.",
  },
  {
    icon: Landmark,
    title: "Bank Transactions (ATC Collection)",
    desc: "Secure and efficient bank transaction processing and ATC (Authority to Collect) management ensures smooth financial operations between distributors and the Dangote Cement factory.",
  },
];

const OperationsSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="operations" className="section-padding bg-background">
      <div className="container max-w-3xl">
        <AnimatedSection>
          <p className="text-accent-red font-semibold text-sm tracking-widest uppercase mb-2">Operations</p>
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-10">
            How We Operate
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {departments.map((d, i) => {
            const isOpen = openIdx === i;
            return (
              <AnimatedSection key={d.title} delay={i * 0.08}>
                <div className="border border-border rounded-lg overflow-hidden bg-card">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 p-4 md:p-5 text-left min-h-[44px] hover:bg-muted/50 transition-colors"
                  >
                    <d.icon className="h-6 w-6 text-accent-red shrink-0" />
                    <span className="font-heading font-semibold text-base md:text-lg text-foreground flex-1">{d.title}</span>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-5 md:px-5 text-muted-foreground text-base leading-relaxed pl-14 md:pl-16">
                          {d.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
