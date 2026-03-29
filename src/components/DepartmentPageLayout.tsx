import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";
import { GraduationCap, Trophy, BookOpen, Compass, ArrowRight } from "lucide-react";

interface AchievementTable {
  headers: string[];
  rows: string[][];
}

interface DepartmentPageProps {
  title: string;
  subtitle?: string;
  overview: string;
  achievements?: string[];
  achievementTable?: AchievementTable;
  teachingPlan?: string;
  careerScopeTitle?: string;
  careerScope: string;
  careerPaths: string[];
  researchTable?: { headers: string[]; rows: string[][] };
  syllabusLinks?: { label: string; href?: string }[];
}

const DepartmentPageLayout = ({
  title,
  subtitle,
  overview,
  achievements,
  achievementTable,
  teachingPlan,
  careerScopeTitle,
  careerScope,
  careerPaths,
  researchTable,
  syllabusLinks,
}: DepartmentPageProps) => (
  <Layout>
    <SubPageLayout title={title} subtitle={subtitle}>
      {/* Overview */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-3">
          <GraduationCap className="text-primary" size={24} />
          Overview
        </h2>
        <div className="bg-secondary border border-border rounded-2xl p-8">
          <p className="text-muted-foreground leading-relaxed">{overview}</p>
        </div>
      </div>

      {/* Achievements */}
      {achievements && achievements.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-3">
            <Trophy className="text-primary" size={24} />
            Achievements
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {achievements.map((a) => (
              <div key={a} className="bg-secondary border border-border rounded-xl p-4 hover:border-primary/40 transition-colors flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-sm text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Achievement Table */}
      {achievementTable && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-3">
            <Trophy className="text-primary" size={24} />
            Achievements
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-foreground text-background">
                  {achievementTable.headers.map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {achievementTable.rows.map((row, i) => (
                  <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-muted-foreground">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Research Publications Table */}
      {researchTable && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-3">
            <BookOpen className="text-primary" size={24} />
            Research Publications
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-foreground text-background">
                  {researchTable.headers.map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {researchTable.rows.map((row, i) => (
                  <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-muted-foreground">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Syllabus */}
      {syllabusLinks && syllabusLinks.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-3">
            <BookOpen className="text-primary" size={24} />
            Syllabus
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {syllabusLinks.map((s) => (
              <div key={s.label} className="bg-secondary border border-border rounded-xl p-4 flex items-center justify-between hover:border-primary/40 transition-colors">
                <span className="text-sm font-medium">{s.label}</span>
                <ArrowRight size={16} className="text-primary" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Teaching Plan */}
      {teachingPlan && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-3">
            <BookOpen className="text-primary" size={24} />
            Teaching Plan
          </h2>
          <div className="bg-secondary border border-border rounded-2xl p-6">
            <p className="text-muted-foreground">{teachingPlan}</p>
          </div>
        </div>
      )}

      {/* Career Scope */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-3">
          <Compass className="text-primary" size={24} />
          {careerScopeTitle || "Career Scope"}
        </h2>
        <div className="bg-secondary border border-border rounded-2xl p-8 mb-6">
          <p className="text-muted-foreground leading-relaxed">{careerScope}</p>
        </div>
      </div>

      {/* Career Paths */}
      <div>
        <h2 className="text-2xl font-bold font-display mb-4">Career Paths</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {careerPaths.map((p) => (
            <div key={p} className="bg-secondary border border-border rounded-xl p-4 text-center hover:border-primary/40 hover:-translate-y-1 transition-all">
              <p className="text-sm font-medium">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </SubPageLayout>
  </Layout>
);

export default DepartmentPageLayout;
