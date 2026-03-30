import { Link } from "react-router-dom";

const Footer = () => (
  <footer style={{ background: "#0a0f1e" }} className="pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="text-2xl font-bold mb-6 font-display" style={{ color: "#f5c518" }}>
            NGF<span>.</span>
          </div>
          <p className="max-w-sm mb-6 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            NGF College of Engineering & Technology — one of the best engineering colleges in Delhi-NCR. Committed to academic excellence, industry-ready training, and holistic student development.
          </p>
          <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>71st K.M. Stone, Delhi-Mathura Road, NH-2, Palwal, Haryana 121102</p>
        </div>

        <div>
          <h4 className="font-bold mb-6 font-display" style={{ color: "#ffffff" }}>Contact</h4>
          <div className="text-sm leading-loose space-y-1" style={{ color: "rgba(255,255,255,0.45)" }}>
            <p>71st K.M. Stone, Delhi-Mathura Road</p>
            <p>NH-2, Palwal, Haryana (NCR Delhi)</p>
            <p>121102, India</p>
            <p className="pt-2">info@ngfcet.com</p>
            <p>onlineadm@ngfcet.com</p>
            <p>+91 8010100022</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 font-display" style={{ color: "#ffffff" }}>Quick Links</h4>
          <ul className="text-sm space-y-4" style={{ color: "rgba(255,255,255,0.45)" }}>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
            <li><Link to="/placements" className="hover:text-white transition-colors">Training & Placement</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.3)" }}>
        <p>Copyright 2021 NGF College of Engineering & Technology. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;