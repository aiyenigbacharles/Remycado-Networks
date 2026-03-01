import logo from "@/assets/rcn-logo.png";

const Footer = () => (
  <footer className="bg-navy border-t" style={{ borderColor: "hsla(0,0%,98%,0.08)" }}>
    <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="RCN Logo" className="h-12 w-12 md:h-16 md:w-16 object-contain" loading="lazy" />
        <span className="text-on-navy/70 text-sm">© {new Date().getFullYear()} Remycado Networks Limited. All rights reserved.</span>
      </div>
      <p className="text-on-navy/50 text-xs">Cement distributor – Abuja, North Central Nigeria</p>
    </div>
  </footer>
);

export default Footer;
