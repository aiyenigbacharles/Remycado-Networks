import { MapPin, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const locations = [
  {
    name: "Abuja Main Depot",
    address: "Plot 12, Cement Distribution Zone, Kubwa, Abuja, FCT",
    phone: "+234 814 471 9799",
  },
  {
    name: "Obajana Collection Point",
    address: "Dangote Cement Factory Road, Obajana, Kogi State",
    phone: "+234 703 333 4723",
  },
];

const LocationsSection = () => (
  <section id="locations" className="section-padding bg-cream">
    <div className="container">
      <AnimatedSection>
        <p className="text-accent-red font-semibold text-sm tracking-widest uppercase mb-2">Locations</p>
        <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-10">
          Our Distribution Points
        </h2>
      </AnimatedSection>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 justify-center items-start">
        {locations.map((loc, i) => (
          <AnimatedSection key={loc.name} delay={i * 0.1}>
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border h-full flex flex-col items-center text-center">
              <div className="flex flex-col items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-accent-red" />
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">{loc.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{loc.address}</p>
                </div>
              </div>

              <div className="mt-auto pt-4 space-y-3 w-full flex flex-col items-center">
                <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 text-foreground font-medium text-sm min-h-[44px]">
                  <Phone className="h-4 w-4 text-accent-red" /> {loc.phone}
                </a>
                {/* Google Maps links removed per request */}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsSection;
