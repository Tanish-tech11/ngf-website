const departments = [
  {
    title: "B.Tech Programs",
    subtitle: "Engineering Excellence, Redefined.",
    description:
      "Offering specializations in Computer Science, AIML, Cyber Security, Electronics & Communication, Mechanical, Electrical, and Fashion & Apparel Engineering — preparing students for industry-ready careers with cutting-edge curriculum.",
    bullets: [
      "Computer Science Engineering & AIML",
      "Electronics & Communication Engineering",
      "Mechanical & Electrical Engineering",
    ],
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
    alt: "Engineering students in lab",
    reverse: false,
  },
  {
    title: "Management Programs",
    subtitle: "BBA · MBA · B.Com · BA",
    description:
      "Build strong business acumen with our management programs including BBA (General & Digital Marketing), MBA, B.Com, and BA. Industry-aligned curriculum with practical exposure through corporate tie-ups and guest lectures.",
    bullets: [],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    alt: "Management classroom",
    reverse: true,
  },
  {
    title: "Computer Applications",
    subtitle: "BCA · MCA · Data Science",
    description:
      "Dive into the world of technology with BCA (General & Data Science) and MCA programs. Master programming, data analytics, and software development with hands-on projects and industry mentorship.",
    bullets: [],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    alt: "Students coding on laptops",
    reverse: false,
  },
];

const Services = () => (
  <section className="py-24 md:py-32 px-6" id="departments">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-medium mb-4 font-display">Our Departments</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="grid gap-24">
        {departments.map((s) => (
          <div
            key={s.title}
            className={`grid md:grid-cols-2 gap-12 items-center`}
          >
            <div className={s.reverse ? "md:order-2" : "md:order-1"}>
              <h3 className="text-2xl md:text-3xl font-medium mb-3 font-display">{s.title}</h3>
              <p className="text-primary font-semibold mb-4 text-lg">{s.subtitle}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">{s.description}</p>
              {s.bullets.length > 0 && (
                <ul className="space-y-3 text-muted-foreground mb-8">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="text-primary">✓</span> {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={`rounded-2xl overflow-hidden h-72 md:h-80 bg-secondary ${s.reverse ? "md:order-1" : "md:order-2"}`}>
              <img
                src={s.image}
                alt={s.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
