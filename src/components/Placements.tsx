const recruiters = [
  "TCS", "Infosys", "Wipro", "HCL", "Cognizant",
  "Accenture", "Capgemini", "Tech Mahindra", "L&T", "Genpact",
  "IBM", "Deloitte",
];

const Placements = () => (
  <section className="py-24 px-6" id="placements">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Training & Placement Cell</p>
        <h2 className="text-3xl md:text-4xl font-medium mb-4 font-display">Our Top Recruiters</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {recruiters.map((r) => (
          <div
            key={r}
            className="bg-secondary border border-border rounded-2xl p-6 flex items-center justify-center hover:border-primary hover:-translate-y-1 transition-all duration-500"
          >
            <span className="font-bold text-foreground font-display text-sm text-center">{r}</span>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-8 mt-16">
        {[
          { label: "Center of Excellence", value: "COE" },
          { label: "Placement Record", value: "90%+" },
          { label: "Job Fest", value: "Annual" },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-8 bg-secondary rounded-2xl border border-border">
            <p className="text-3xl md:text-4xl font-bold font-display text-primary mb-2">{stat.value}</p>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Placements;
