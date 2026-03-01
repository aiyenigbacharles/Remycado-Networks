import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { toast } from "sonner";

const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thank you! We'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding bg-navy">
      <div className="container max-w-2xl">
        <AnimatedSection>
          <p className="text-accent-red font-semibold text-sm tracking-widest uppercase mb-2">Contact</p>
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-on-navy mb-4">
            Request Bulk Supply
          </h2>
          <p className="text-on-navy/60 text-base mb-4">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
          <p className="text-on-navy/60 text-sm mb-8">
            Email: <a href="mailto:remycadonetworks@gmail.com" className="text-accent-red hover:underline">remycadonetworks@gmail.com</a>
            &nbsp;•&nbsp; WhatsApp: <a href="https://wa.me/2348036001529" className="text-accent-red hover:underline">08036001529</a>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "company", label: "Company Name", type: "text" },
              { name: "phone", label: "Phone Number", type: "tel", inputMode: "numeric" as const },
              { name: "quantity", label: "Quantity Required (Tonnes)", type: "text" },
            ].map((f) => (
              <div key={f.name} className="relative">
                <input
                  name={f.name}
                  type={f.type}
                  inputMode={f.inputMode}
                  required
                  placeholder={f.label}
                  autoComplete={f.name === "phone" ? "tel" : f.name}
                  className="w-full bg-navy-light text-on-navy placeholder:text-on-navy/40 border border-on-navy/10 rounded-md px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-accent-red min-h-[44px]"
                  style={{ backgroundColor: "hsl(210,45%,20%)", color: "hsl(0,0%,98%)" }}
                />
              </div>
            ))}
            <textarea
              name="message"
              placeholder="Additional Message (Optional)"
              rows={4}
              className="w-full bg-navy-light text-on-navy placeholder:text-on-navy/40 border border-on-navy/10 rounded-md px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-accent-red resize-none"
              style={{ backgroundColor: "hsl(210,45%,20%)", color: "hsl(0,0%,98%)" }}
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 bg-accent-red text-accent-foreground px-8 py-4 rounded-md text-base font-semibold hover:opacity-90 transition-opacity min-h-[44px] disabled:opacity-60"
            >
              <Send className="h-5 w-5" /> {sending ? "Sending…" : "Submit Inquiry"}
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
