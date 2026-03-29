import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";
import { Building2, Target, Eye, Heart } from "lucide-react";

const HistoryPage = () => (
  <Layout>
    <SubPageLayout title="Our History" subtitle="Serving Humanity Over 5 Decades">
      {/* Legacy */}
      <div className="bg-secondary border border-border rounded-2xl p-8 md:p-10 mb-10">
        <p className="text-muted-foreground leading-relaxed mb-4">
          The legacy in the realm of education goes back to 1962, when the foundation of the society (New Green Field Educational Society) was laid by Late Smt. Ved Sharma, to provide traditional education to students. Her mission is to enlighten and expand the horizons of young minds and to train them to hone capabilities which has hitherto remained unexplored for the want of good educational capabilities.
        </p>
      </div>

      {/* Pillars of Strength */}
      <h2 className="text-2xl font-bold font-display mb-6 text-center">Green Field Educational Society</h2>
      <p className="text-center text-muted-foreground mb-8">Our Pillars of Strength</p>
      <div className="grid sm:grid-cols-2 gap-6 mb-14">
        <div className="bg-secondary border border-border rounded-2xl p-8 text-center hover:border-primary/40 transition-colors">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Estd. in</p>
          <p className="text-4xl font-bold font-display mb-3">1964</p>
          <p className="text-muted-foreground text-sm">New Green Field School, Marg 22, Saket, New Delhi</p>
        </div>
        <div className="bg-secondary border border-border rounded-2xl p-8 text-center hover:border-primary/40 transition-colors">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Estd. in</p>
          <p className="text-4xl font-bold font-display mb-3">1987</p>
          <p className="text-muted-foreground text-sm">New Green Field School, Alaknanda, New Delhi</p>
        </div>
      </div>

      {/* Who We Are */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="text-primary" size={24} />
          <h2 className="text-2xl font-bold font-display">Who We Are</h2>
        </div>
        <p className="text-primary font-semibold mb-4">Making Education Matter!</p>
        <div className="bg-secondary border border-border rounded-2xl p-8">
          <p className="text-muted-foreground leading-relaxed">
            NGF college of Engineering and Technology is promoted and run under the aegies of the New Green Field Educational Society, New Delhi who is into education for about five decades. NGFCET was established in 2008. The institution is situated in the clean and green environment of more than 26 acres of land on the 71st Km stone – National Highway 2 – Palwal. It is approved by AICTE and affiliated to J.C.Bose University of Science & Technology, YMCA, Faridabad.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-14">
        <div className="bg-secondary border border-border rounded-2xl p-8">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <Target className="text-primary" size={28} />
          </div>
          <h2 className="text-2xl font-bold font-display mb-6">Mission</h2>
          <ul className="space-y-4 text-muted-foreground leading-relaxed">
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <span>To be recognized as a highly effective leader in the conduct of inter-disciplinary research and the development of innovative approaches in education.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <span>To maintain an intellectually challenging yet supportive and welcoming environment.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <span>To create, disseminate and integrate knowledge that expands our student's knowledge base, which in turn enables the betterment of society.</span>
            </li>
          </ul>
        </div>

        <div className="bg-secondary border border-border rounded-2xl p-8">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <Eye className="text-primary" size={28} />
          </div>
          <h2 className="text-2xl font-bold font-display mb-6">Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            To be known as a brand for education which provides value-based education, research, creativity and innovation.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div>
        <h2 className="text-2xl font-bold font-display mb-6">Core Values for NGF</h2>
        <div className="bg-secondary border border-border rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Heart className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display mb-3">Honesty and Integrity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Primary focus is on promoting the highest standards of trustworthiness and honesty to guarantee that all members of the community recognize the minute advantages of these beliefs. We are committed to practices that are fair, honest and objective in dealing with students, faculty members, staff and leadership at all levels of institution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  </Layout>
);

export default HistoryPage;
