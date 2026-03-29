import { motion } from "framer-motion";
import { Users, Camera, Code, Dumbbell, Lightbulb, Mic, ListOrdered } from "lucide-react";

const clubs = [
  {
    icon: Mic,
    title: "Literary and Debating Club",
    desc: "In this club, we welcome people with open minds that try to contribute towards bringing change to the society by the medium of speeches, poems and stories.",
  },
  {
    icon: Users,
    title: "Cultural Club",
    desc: "The club aims at providing various platforms to the students both inside and outside of the university. Be it the annual fest or freshers or any other college event, the club comes up with folk to contemporary, classical singing to western and many more such forms.",
  },
  {
    icon: Camera,
    title: "Photography and Designing Club",
    desc: "This club provides the platform to bind and bring together the like-minded people and share knowledge about the art, creativity through photography and designing.",
  },
  {
    icon: Code,
    title: "The Ingenious Squad",
    desc: "This is one of the prominent technical clubs formed by one of our students in 2021. It is one of the core technical clubs providing support and guidance to students in the form of technical learning. The aim is to nourish the knowledge with right practical approach and innovation.",
  },
  {
    icon: Dumbbell,
    title: "Sports Club",
    desc: "In this club, we believe in healthy body, healthy mind motto. We offer facilities for indoor and outdoor sports such as carrom, tennis, football, cricket, kabaddi, basketball, etc. It organises events such as cricket matches with faculties and students on regular basis, badminton competition, etc.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship Club",
    desc: "This club provides an environment where students can cultivate their entrepreneurship skills. Students participate in the development of a business, by working on a business plan, with a mindset of implementing a start-up. There are visiting entrepreneurs from the business community along with the College faculty advisors.",
  },
];

const steps = [
  {
    step: "Step 1",
    text: "Review the list of clubs and see if there are other groups with similar goals or interests to yours. If other groups exist that are similar to yours, approach the coordinator to discuss collaboration. If there are no clubs that exist to meet your interest, or needs, continue to Step 2.",
  },
  {
    step: "Step 2",
    text: "Find an advisor who is a member of the faculty or staff, interested in and willing to support your club's mission, meetings and activities. Identify two (2) primary student contacts, and at least 7 participants.",
  },
  {
    step: "Step 3",
    text: "Review, complete and submit the application to the Director of the student welfare committee.",
  },
];

const ClubsSocieties = () => (
  <section className="py-20 px-6" id="clubs">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Life at NGF</p>
        <h2 className="text-3xl md:text-4xl font-medium font-display mb-4">Clubs & Societies</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore a vibrant ecosystem of student-led clubs that nurture creativity, leadership, and technical excellence.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {clubs.map((club, i) => (
          <motion.div
            key={club.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="bg-secondary border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <club.icon className="text-primary" size={22} />
            </div>
            <h3 className="text-lg font-bold font-display mb-2">{club.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{club.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Create a New Club */}
      <div className="bg-secondary border border-border rounded-2xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <ListOrdered className="text-primary" size={24} />
          <h3 className="text-xl font-bold font-display">Want to Create a New Club?</h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Occasionally there is a desire to create a new club. Below are the steps any NGFCET student may take to create a new recognised club.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <div key={s.step} className="bg-background border border-border rounded-xl p-5">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-3">
                {i + 1}
              </div>
              <h4 className="font-semibold mb-2">{s.step}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ClubsSocieties;
