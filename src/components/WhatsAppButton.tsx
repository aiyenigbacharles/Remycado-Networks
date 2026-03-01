import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/2348036001529?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20bulk%20cement%20supply."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-110 min-h-[44px] min-w-[44px]"
    style={{ backgroundColor: "#25D366" }}
  >
    <MessageCircle className="h-7 w-7" style={{ color: "#fff" }} />
  </a>
);

export default WhatsAppButton;
