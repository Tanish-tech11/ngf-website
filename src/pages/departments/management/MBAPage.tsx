import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";
import { GraduationCap, Trophy, BookOpen, Compass } from "lucide-react";

const specializations = [
  "Financial Management",
  "Marketing Management",
  "Human Resource Management",
  "International Business Management",
  "Information Technology Management",
];

const MBAPage = () => (
  <Layout>
    <SubPageLayout title="Master of Business Administration" subtitle="MBA Dual Degree">
      {/* Overview */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-3">
          <GraduationCap className="text-primary" size={24} />
          Overview
        </h2>
        <div className="bg-secondary border border-border rounded-2xl p-8">
          <p className="text-muted-foreground leading-relaxed mb-4">
            The MBA Dual Degree is a two-year postgraduate programme that aims at grooming young minds for responsible positions in industry trade commerce and other services with a high level of motivation. The programme accentuates the professional skills of participants in varied spheres both systematically and creatively to improve business and management practice.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The students are groomed to be able to work with self-direction and originality applying knowledge and understanding of the principles of management to contribute to business and society at large. An MBA programme with a dual specialisation offers students the option of pursuing a concentration in two discrete areas of business administration.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Studying MBA with (DUAL) Specialisation from NGF will give graduates an extensive understanding of business finance economics and marketing as well as a variety of practical skills and work experience. The programme will ensure making the students highly sought after by prospective employers in various domains.
          </p>
        </div>
      </div>

      {/* Specializations */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-3">
          <Trophy className="text-primary" size={24} />
          Specializations
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {specializations.map((s) => (
            <div key={s} className="bg-secondary border border-border rounded-xl p-4 text-center hover:border-primary/40 transition-colors">
              <p className="text-sm font-medium">{s}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Teaching Plan */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-3">
          <BookOpen className="text-primary" size={24} />
          Teaching Plan
        </h2>
        <div className="bg-secondary border border-border rounded-2xl p-6">
          <p className="text-muted-foreground">Term Plan</p>
        </div>
      </div>

      {/* Career Scope */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-3">
          <Compass className="text-primary" size={24} />
          Why MBA?
        </h2>
        <div className="bg-secondary border border-border rounded-2xl p-8">
          <p className="text-muted-foreground leading-relaxed">
            MBA degree continues to be a stepping stone that enables the dreams of many applicants. This can help you with better career opportunities and also removes any entry barriers that many organizations have made to hire only candidates with MBA. This degree accelerates the entrepreneurship skills in an individual with in-depth knowledge of the process and work on multiple projects.
          </p>
        </div>
      </div>

      {/* Career Paths */}
      <div>
        <h2 className="text-2xl font-bold font-display mb-4">Career Paths</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {["Marketing Managers", "Sales Managers", "Advertising Professionals", "Marketing Analyst", "Product Manager", "Relationship Manager"].map((p) => (
            <div key={p} className="bg-secondary border border-border rounded-xl p-4 text-center hover:border-primary/40 hover:-translate-y-1 transition-all">
              <p className="text-sm font-medium">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </SubPageLayout>
  </Layout>
);

export default MBAPage;
