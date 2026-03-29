const admissions = [
  { title: "Admission Procedure", desc: "Step-by-step guidance for enrollment" },
  { title: "Fees Structure", desc: "Transparent and affordable fee plans" },
  { title: "Apply Online", desc: "Quick and easy digital application" },
  { title: "Download Brochure", desc: "Get complete program details" },
];

const Pillars = () => (
  <section className="py-24 bg-secondary px-6" id="admissions">
    <div className="max-w-5xl mx-auto text-center">
      <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-widest">Admissions Open 2025-26</p>
      <h2 className="text-3xl md:text-4xl font-medium mb-4 font-display">
        Your Journey Starts Here
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
        Take the first step towards a bright future. Explore our admission process, fee structure, and apply online today.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {admissions.map((p) => (
          <div
            key={p.title}
            className="bg-background border border-border rounded-2xl p-8 hover:border-primary hover:-translate-y-2 transition-all duration-500"
          >
            <h3 className="text-lg font-medium mb-2 font-display">{p.title}</h3>
            <p className="text-muted-foreground text-sm">{p.desc}</p>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className="inline-flex bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all"
      >
        Apply Now
      </a>
    </div>
  </section>
);

export default Pillars;
