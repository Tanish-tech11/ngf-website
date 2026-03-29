import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";
import { Eye, Target } from "lucide-react";

const MissionVisionPage = () => (
  <Layout>
    <SubPageLayout title="Mission & Vision">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-secondary border border-border rounded-2xl p-8 md:p-10">
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

        <div className="bg-secondary border border-border rounded-2xl p-8 md:p-10">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <Eye className="text-primary" size={28} />
          </div>
          <h2 className="text-2xl font-bold font-display mb-6">Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            To be known as a brand for education which provides value-based education, research, creativity and innovation.
          </p>
        </div>
      </div>
    </SubPageLayout>
  </Layout>
);

export default MissionVisionPage;
