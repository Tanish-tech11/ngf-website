import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <header className="relative min-h-[85vh] flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "rgba(10,15,30,0.88)" }} />
    </div>

    {/* Yellow accent bar — bottom */}
    <div
      className="absolute bottom-0 left-0 right-0 z-20"
      style={{ height: "5px", background: "#f5c518" }}
    />

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
      <div className="max-w-2xl">

        {/* Main Heading — White + Yellow split */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.05] font-display mb-4"
        >
          <span className="text-white">NGF College of Engineering</span>
          <br />
          <span style={{ color: "#f5c518" }}>&amp; Technology</span>
        </motion.h1>

        {/* Location tag */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/60 text-xs font-bold uppercase tracking-[0.3em] mb-3"
        >
          Palwal · Haryana · NCR Delhi
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 text-base md:text-lg tracking-wide mb-10"
        >
          Preparing Students for Academic, Professional, and Research Careers
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/admissions/apply"
            className="inline-flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-wide transition-all hover:brightness-110"
            style={{ background: "#f5c518", color: "#000", borderRadius: "3px" }}
          >
            Apply Now →
          </Link>
          <Link
            to="/departments"
            className="inline-flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-wide transition-all"
            style={{ background: "transparent", color: "#f5c518", border: "1px solid #f5c518", borderRadius: "3px" }}
          >
            Departments →
          </Link>
        </motion.div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </header>
);

export default Hero;