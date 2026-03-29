import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";
import { Trophy, BookOpen } from "lucide-react";

const awards = [
  "Best Emerging Engineering College of Delhi-NCR by World Education Summit 2019",
  "Best Upcoming College in Haryana by Times Research",
  "Most Distinguished Educator Award in North India by Brands Academy",
  "Best Leadership Award in Technical education by AITMC",
  "Award for Excellence in Technical Education by EFM",
  "Best Industry Interface Award by Brands Academy",
];

const publications = [
  { title: "Engineering Physics", publication: "Vily Publications", author: "Dr. R.K. Garg" },
  { title: "Engineering Chemistry", publication: "Vily Publications", author: "Dr. Rakesh Shrivastav" },
  { title: "FCPC", publication: "Vily Publications", author: "Mr. Kuldeep Tomar" },
  { title: "BME", publication: "SatyaPrakashan", author: "Mr. Tarun Gupta" },
  { title: "SOM", publication: "Vayu Education of India", author: "Mr. Tarun Gupta" },
  { title: "BME", publication: "SatyaPrakashan", author: "Mr. B.C. Sharma" },
  { title: "Electrical Technology", publication: "Vily Publications", author: "Mr. Vinod Kumar" },
];

const AchievementsPage = () => (
  <Layout>
    <SubPageLayout title="Achievements & Awards">
      {/* Intro */}
      <div className="bg-secondary border border-border rounded-2xl p-8 md:p-10 mb-10">
        <h2 className="text-xl font-bold font-display mb-4">Best Industry Oriented College</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          In the past few decades, Management and Engineering education have become one among the most coveted disciplines globally, which especially gained ground as a result of Globalization, Privatization and Liberation.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Being a relatively context-specific discipline, Best Industry Oriented College's prime focal point is to build Students in a broad spectrum both by GLOCALLY and adoption of latest Industrial Technologies in order to avoid empirical threats. Currently, the emphasis is to provide tremendous potential management and engineering professionals to contribute to the country's Economy and break the shackles of mediocrity and to reach effortlessly for excellence and creation of "KNOWLEDGE SOCIETY".
        </p>
      </div>

      {/* Awards */}
      <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
        <Trophy className="text-primary" size={24} />
        Awards
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        {awards.map((a) => (
          <div key={a} className="bg-secondary border border-border rounded-xl p-5 hover:border-primary/40 transition-colors">
            <p className="font-medium text-sm">{a}</p>
          </div>
        ))}
      </div>

      {/* Research & Publications */}
      <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
        <BookOpen className="text-primary" size={24} />
        Research & Publications
      </h2>
      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-foreground text-background">
              <th className="px-4 py-3 text-left font-semibold">Title</th>
              <th className="px-4 py-3 text-left font-semibold">Publication</th>
              <th className="px-4 py-3 text-left font-semibold">Author</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((p, i) => (
              <tr
                key={`${p.title}-${p.author}`}
                className={`border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}
              >
                <td className="px-4 py-3 font-medium">{p.title}</td>
                <td className="px-4 py-3 text-muted-foreground">{p.publication}</td>
                <td className="px-4 py-3 text-muted-foreground">{p.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SubPageLayout>
  </Layout>
);

export default AchievementsPage;
