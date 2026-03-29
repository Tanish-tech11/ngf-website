import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";
import { Shield, GraduationCap, Building, BookOpen, Award, School } from "lucide-react";

const affiliations = [
  {
    icon: Shield,
    title: "Approved by AICTE (Govt. of India)",
    desc: "To provide for establishment of an All-India council for Technical Education with a view to the proper planning and co-ordinated development of the technical education system throughout the country, the promotion of qualitative improvement of such education in relation to planned quantitative growth and the regulation and proper maintenance of norms and standards in the technical education system and for matters connected therewith.",
  },
  {
    icon: GraduationCap,
    title: "Affiliated to J.C Bose University of Science & Technology, Faridabad, Haryana",
    desc: "J.C BOSE University of Science and Technology, YMCA, Faridabad aspires to be a nationally and internationally acclaimed leader in technical and higher education in all spheres which transforms the life of students through integration of teaching, research and character building.",
  },
  {
    icon: Building,
    title: "All India Management Association",
    desc: "It is the apex body for management in India with over 38000 members and close to 6000 corporate/ institutional members through 68 Local Management.",
  },
  {
    icon: BookOpen,
    title: "Director of Technical Education, Haryana",
    desc: "In the past few decades, Management and Engineering education have become one among the most coveted disciplines globally, which especially gained ground as a result of Globalization, Privatization and Liberation.",
  },
  {
    icon: Award,
    title: "National Testing Service-India (Ministry of HRD, Govt. of India)",
    desc: "It is an apex body for academic auditing, accountability, maintenance of comparability in quality, thereby ensuring quality in education as enshrined in the constitution.",
  },
  {
    icon: School,
    title: "Maharishi Dayanand University",
    desc: "In the past few decades, Management and Engineering education have become one among the most coveted disciplines globally, which especially gained ground as a result of Globalization, Privatization and Liberation.",
  },
  {
    icon: School,
    title: "Shri Vishwakarma Skill University",
    desc: "In the past few decades, Management and Engineering education have become one among the most coveted disciplines globally, which especially gained ground as a result of Globalization, Privatization and Liberation.",
  },
];

const AffiliationsPage = () => (
  <Layout>
    <SubPageLayout title="Affiliations" subtitle="College is approved by AICTE (Govt. of India), DTE (Govt. of Haryana) and affiliated to J.C.Bose University of Science & Technology.">
      <p className="text-muted-foreground mb-10 text-center">
        College is RFU of NTS (National Testing Service) MHRD, Govt. of India which aims to cater to the evaluation requirements of the country for academic auditing and quality assurance.
      </p>
      <div className="space-y-6">
        {affiliations.map((a) => {
          const Icon = a.icon;
          return (
            <div key={a.title} className="bg-secondary border border-border rounded-2xl p-8 hover:border-primary/40 transition-colors">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display mb-2">{a.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SubPageLayout>
  </Layout>
);

export default AffiliationsPage;
