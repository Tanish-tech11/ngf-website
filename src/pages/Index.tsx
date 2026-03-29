import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, GraduationCap, Building2, Users, Trophy, BookOpen, Phone } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import yogaDay from "@/assets/yoga-day.jpg";
import cricketTournament from "@/assets/cricket-tournament.jpg";
import culturalFest from "@/assets/cultural-fest.jpg";
import { useRef } from "react";

const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const sections = [
  {
    icon: Building2,
    title: "About Us",
    desc: "Discover our legacy of academic excellence, world-class infrastructure, and a culture that nurtures innovation.",
    link: "/about",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: GraduationCap,
    title: "Departments",
    desc: "B.Tech, BBA, BCA, MBA, MCA — explore cutting-edge programs designed for industry-ready careers.",
    link: "/departments",
    color: "from-primary/15 to-primary/5",
  },
  {
    icon: BookOpen,
    title: "Admissions",
    desc: "Your journey starts here. Check eligibility, fee structure, and apply online in minutes.",
    link: "/admissions",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Trophy,
    title: "Placements",
    desc: "90%+ placement record with top recruiters like TCS, Infosys, Wipro, HCL, and more.",
    link: "/placements",
    color: "from-primary/15 to-primary/5",
  },
  {
    icon: Users,
    title: "Campus Life",
    desc: "Yoga Day, cultural fests, cricket tournaments — experience vibrant life beyond classrooms.",
    link: "/campus-life",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Phone,
    title: "Contact Us",
    desc: "Have questions? Reach out — our team is always happy to help you take the next step.",
    link: "/contact",
    color: "from-primary/15 to-primary/5",
  },
];

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "5000+", label: "Alumni Network" },
  { value: "90%+", label: "Placement Record" },
  { value: "50+", label: "Top Recruiters" },
];

const CampusImage = ({ img, title, tag, index }: { img: string; title: string; tag: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={zoomIn}
      className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
    >
      <motion.img
        src={img}
        alt={title}
        style={{ scale }}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex flex-col justify-end p-6">
        <span className="text-xs font-bold uppercase tracking-widest text-yellow mb-1">{tag}</span>
        <h3 className="text-white font-medium font-display text-lg">{title}</h3>
      </div>
    </motion.div>
  );
};

const Index = () => (
  <Layout fullBleed>
    <Hero />

    {/* Stats Bar */}
    <section className="relative -mt-12 z-10 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto bg-navy rounded-2xl p-8 shadow-2xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={zoomIn}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold font-display text-yellow">{s.value}</p>
              <p className="text-white/60 text-xs md:text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

    {/* Sections Grid */}
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary font-semibold text-sm uppercase tracking-widest mb-2"
          >
            Explore NGF
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-medium font-display"
          >
            Everything You Need, One Campus
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={zoomIn}
            >
              <TiltCard className="h-full group">
                <Link
                  to={s.link}
                  className={`block p-8 rounded-2xl border border-border bg-gradient-to-br ${s.color} hover:border-primary transition-all duration-500 h-full`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div style={{ transform: "translateZ(30px)" }}>
                    <s.icon className="text-primary mb-4" size={28} />
                    <h3 className="text-xl font-medium font-display mb-2 group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Campus Glimpse */}
    <section className="py-24 bg-secondary px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary font-semibold text-sm uppercase tracking-widest mb-2"
          >
            Life at NGF
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-medium font-display"
          >
            A Glimpse of Campus
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: yogaDay, title: "Yoga Day", tag: "Wellness" },
            { img: cricketTournament, title: "Cricket Tournament", tag: "Sports" },
            { img: culturalFest, title: "Cultural Fest", tag: "Culture" },
          ].map((item, i) => (
            <CampusImage key={item.title} img={item.img} title={item.title} tag={item.tag} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/campus-life"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Events <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl font-medium mb-6 font-display"
        >
          Ready to Shape Your Future?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Join NGF College and be part of a community that believes in excellence, innovation, and holistic growth. Admissions are now open.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 bg-yellow text-navy px-8 py-4 rounded-[4px] font-bold uppercase tracking-wide hover:brightness-110 transition-all duration-300"
          >
            Apply Now <span className="text-lg">→</span>
          </Link>
          <a
            href="tel:+918010100022"
            className="inline-flex border border-border px-8 py-4 rounded-xl font-semibold hover:bg-secondary hover:scale-105 transition-all duration-300"
          >
            Call: +91 8010100022
          </a>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;