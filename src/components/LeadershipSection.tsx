import AnimatedSection from "./AnimatedSection";
import portrait from "@/assets/MD.jpeg";
import engagement from "@/assets/Img 12.jpeg";

const LeadershipSection = () => (
  <section id="leadership" className="section-padding bg-cream">
    <div className="container">
      <AnimatedSection>
        <p className="text-accent-red font-semibold text-sm tracking-widest uppercase mb-2">Leadership</p>
        <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-10">
          Meet Our Managing Director
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <AnimatedSection>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={portrait} alt="Ezema Remigus – Managing Director" className="w-full aspect-[3/4] object-cover" loading="lazy" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div>
            <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-1">Ezema Remigus</h3>
            <p className="text-accent-red font-semibold text-sm mb-4">Managing Director</p>
            <div className="space-y-3 text-muted-foreground text-base leading-relaxed mb-8">
              <p>
                Born on 8 June 1967 in Opi, Nsukka LGA, Enugu State, Ezema Remigus is the visionary leader behind 
                Remycado Networks Limited's growth into one of North Central Nigeria's most reliable cement distribution companies.
              </p>
              <p>
                A dedicated family man married with five children, his commitment to excellence and strong industry 
                relationships, including close ties with Dangote Group which have positioned the company as a cornerstone of the 
                region's construction supply chain.
              </p>
            </div>

            <h4 className="font-heading font-semibold text-lg text-foreground mb-4">Industry Engagement</h4>
            <div className="rounded-lg shadow-md">
              <div className="overflow-hidden h-[200px] md:h-[280px] lg:h-[360px]">
                <img src={engagement} alt="Industry engagement with Aliko Dangote" className="w-full h-full object-cover object-center" loading="lazy" />
              </div>
              <p className="text-sm text-muted-foreground p-3 bg-card mt-2">With <strong className="font-semibold">Aliko Dangote</strong>, chairman of the Dangote Group</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default LeadershipSection;
