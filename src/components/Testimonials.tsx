const testimonials = [
  {
    quote: "NGF gave me the platform to explore my potential. The faculty mentorship and practical exposure helped me land my dream job right after graduation.",
    name: "Student",
    location: "B.Tech CSE",
  },
  {
    quote: "The campus life at NGF is vibrant. From cultural fests to technical workshops, there's always something happening that keeps you engaged and growing.",
    name: "Alumni",
    location: "MBA Graduate",
  },
  {
    quote: "As a parent, I feel confident about my child's education at NGF. The placement record and faculty dedication are truly commendable.",
    name: "Parent",
    location: "Palwal",
  },
  {
    quote: "The training and placement cell at NGF goes above and beyond. They organized mock interviews, resume workshops, and connected us with top recruiters.",
    name: "Student",
    location: "BCA Data Science",
  },
];

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="min-w-[340px] md:min-w-[400px] bg-foreground/10 p-8 rounded-2xl border border-foreground/20 flex-shrink-0">
    <p className="text-surface-dark-foreground/80 italic mb-6 leading-relaxed text-sm">
      &ldquo;{t.quote}&rdquo;
    </p>
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
        {t.name[0]}
      </div>
      <div>
        <p className="font-bold text-surface-dark-foreground text-sm">{t.name}</p>
        <p className="text-xs text-surface-dark-foreground/50 uppercase tracking-wider">{t.location}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const doubled = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-surface-dark text-surface-dark-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-4">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-light font-display">
          Students · Alumni · Parents
        </h2>
      </div>
      <div className="mt-12">
        <div className="flex gap-6 animate-marquee w-max">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
