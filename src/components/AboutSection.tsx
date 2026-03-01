import AnimatedSection from "./AnimatedSection";
import { Shield, Truck, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Truck, label: "Daily Deliveries", value: "100+" },
  { icon: Users, label: "Active Clients", value: "100+" },
  { icon: Shield, label: "Years in Business", value: "10+" },
  { icon: TrendingUp, label: "Tonnes Distributed", value: "1M+" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-cream">
    <div className="container">
      <AnimatedSection>
        <p className="text-accent-red font-semibold text-sm tracking-widest uppercase mb-2">About Us</p>
        <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-6 max-w-2xl">
          North Central Nigeria's Trusted Cement Distribution Partner
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-12 leading-relaxed">
          Remycado Networks Limited is a premier cement distribution company and a key Dangote Cement distributor operating across North Central Nigeria. 
          With strategically located depots and a dedicated fleet, we ensure timely delivery of quality cement products to construction sites, 
          retailers, and wholesalers across Abuja, Kogi, and beyond.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.1}>
            <div className="bg-card rounded-lg p-6 text-center shadow-sm border border-border">
              <s.icon className="h-8 w-8 text-accent-red mx-auto mb-3" />
              <p className="font-heading font-bold text-2xl md:text-3xl text-foreground">{s.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
