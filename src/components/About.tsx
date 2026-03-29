const About = () => (
  <section className="py-24 bg-secondary" id="about">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium mb-6 font-display">
            One Campus.<br />Endless Possibilities.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Shaping the institutions, like shaping the future is an uphill task. Serious and sustained efforts, relentless pursuits of excellence, hard work and dedication are the ingredients of the project. NGF pursues the highest moral, ethical and cultural values and is committed to provide its students with a world-class education.
          </p>
          <div className="space-y-4">
            {["Culture Activities", "Awards & Achievements", "Radio NGF"].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border shadow-sm hover:border-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-muted/20 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
              alt="NGF College campus representing academic excellence"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary p-6 md:p-8 rounded-2xl text-primary-foreground shadow-xl">
            <p className="text-3xl md:text-4xl font-bold font-display">NAAC</p>
            <p className="text-sm opacity-80">Accredited Institution</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
