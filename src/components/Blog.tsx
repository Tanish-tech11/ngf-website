const posts = [
  {
    title: "Healthy Eating Habits for a Good Professional Life",
    date: "Latest",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Data Analytics — Enhanced Problem Solving & High Demand Careers",
    date: "Latest",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Future in Big Data & Data Science — Career Paths Explored",
    date: "Latest",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600",
  },
];

const Blog = () => (
  <section className="py-24 bg-secondary px-6" id="news">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What's Happening @ NGF</p>
          <h2 className="text-3xl md:text-4xl font-medium font-display">
            Latest News & Updates
          </h2>
        </div>
        <a href="#" className="hidden md:inline-flex text-sm font-medium text-primary hover:underline">
          More News →
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((p) => (
          <article
            key={p.title}
            className="bg-background rounded-2xl overflow-hidden border border-border hover:border-primary hover:-translate-y-1 transition-all duration-500 group"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-muted-foreground mb-3">{p.date}</p>
              <h3 className="font-medium leading-snug font-display">{p.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
