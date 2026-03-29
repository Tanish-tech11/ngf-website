import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-background pt-24 pb-12 border-t border-border">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="text-2xl font-bold mb-6 font-display">
            NGF<span className="text-primary">.</span>
          </div>
          <p className="text-muted-foreground max-w-sm mb-6 text-sm leading-relaxed">
            NGF College of Engineering & Technology — one of the best engineering colleges in Delhi-NCR. Committed to academic excellence, industry-ready training, and holistic student development.
          </p>
          <p className="text-xs text-muted-foreground/60 font-mono">71st K.M. Stone, Delhi-Mathura Road, NH-2, Palwal, Haryana 121102</p>
        </div>

        <div>
          <h4 className="font-bold mb-6 font-display">Contact</h4>
          <div className="text-muted-foreground text-sm leading-loose space-y-1">
            <p>71st K.M. Stone, Delhi-Mathura Road</p>
            <p>NH-2, Palwal, Haryana (NCR Delhi)</p>
            <p>121102, India</p>
            <p className="pt-2">info@ngfcet.com</p>
            <p>onlineadm@ngfcet.com</p>
            <p>+91 8010100022</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 font-display">Quick Links</h4>
          <ul className="text-muted-foreground text-sm space-y-4">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            <li><Link to="/admissions" className="hover:text-foreground transition-colors">Admissions</Link></li>
            <li><Link to="/placements" className="hover:text-foreground transition-colors">Training & Placement</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-xs">
        <p>Copyright 2021 NGF College of Engineering & Technology. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Facebook</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
