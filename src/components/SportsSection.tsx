import { motion } from "framer-motion";
import { Trophy, Dumbbell, Users } from "lucide-react";

const sportsCouncil = [
  { name: "Mr Jitender Tewatia", designation: "Sports Convenor" },
  { name: "Mr Hoshiyar Singh", designation: "Fitness Coach" },
  { name: "Mr Arvind Chauhan", designation: "Sports Incharge" },
  { name: "Mr Raj Singh", designation: "Sports Incharge" },
];

const footballTeam = [
  { name: "Jojo Alex", branch: "M.E", year: "2nd year" },
  { name: "Shem Debkarma", branch: "M.E", year: "4th year" },
  { name: "Jakula Debkarma", branch: "E.C.E", year: "3rd year" },
  { name: "Kanistha Gautam", branch: "M.E", year: "3rd year" },
  { name: "Denimil Suchiang", branch: "Civil", year: "1st year" },
  { name: "Aaqib Rehman", branch: "E.C.E", year: "1st year" },
  { name: "Kamal Pushkar", branch: "M.E", year: "2nd year" },
  { name: "Binjen", branch: "Civil", year: "1st year" },
  { name: "Billo Dalo", branch: "Civil", year: "1st year" },
  { name: "Yasir Beigh", branch: "M.E", year: "2nd year" },
  { name: "Bishnu Sharma", branch: "Civil", year: "1st year" },
  { name: "Akhilesh Purle", branch: "E.E.E", year: "3rd year" },
];

const basketballTeam = [
  { name: "Kanishtha Gautam", branch: "M.E", year: "3rd year" },
  { name: "Ankit Yadav", branch: "M.E", year: "3rd year" },
  { name: "Nitish Sharma", branch: "M.E", year: "3rd year" },
  { name: "Ajay Deshpal", branch: "M.E", year: "1st year" },
  { name: "Anurag Dalal", branch: "Civil", year: "1st year" },
  { name: "Tarun Goyal", branch: "E.C.E", year: "4th year" },
  { name: "Narveer", branch: "E.C.E", year: "4th year" },
  { name: "Kawsar", branch: "E.E", year: "1st year" },
  { name: "Sumit", branch: "Civil", year: "1st year" },
  { name: "Rahul", branch: "M.E", year: "1st year" },
  { name: "Alok", branch: "E.C.E", year: "2nd year" },
  { name: "Rohit Kumar", branch: "E.E", year: "2nd year" },
];

const volleyballTeam = [
  { name: "Narender", branch: "M.E", year: "2nd year" },
  { name: "Devender", branch: "M.E", year: "2nd year" },
  { name: "Narveer", branch: "E.C.E", year: "4th year" },
  { name: "Deepak Kumar", branch: "M.E", year: "3rd year" },
  { name: "Atul Ranjan", branch: "E.C.E", year: "3rd year" },
  { name: "Vikas Dhull", branch: "M.E", year: "1st year" },
  { name: "Rahul", branch: "M.E", year: "1st year" },
  { name: "Kawsar", branch: "E.E", year: "1st year" },
  { name: "Firdous Ahmad", branch: "E.E", year: "1st year" },
  { name: "Sumit", branch: "Civil", year: "1st year" },
  { name: "Amit Giri", branch: "M.E", year: "3rd year" },
  { name: "Manoj", branch: "M.E", year: "3rd year" },
];

const cricketTeam = [
  { name: "Sanjeev", branch: "E.C.E", year: "3rd year" },
  { name: "Ajay Saini", branch: "E.C.E", year: "3rd year" },
  { name: "Paramveer", branch: "E.C.E", year: "2nd year" },
  { name: "Harish", branch: "M.E", year: "2nd year" },
  { name: "Birender", branch: "M.E", year: "2nd year" },
  { name: "Devender Singh", branch: "M.E", year: "2nd year" },
  { name: "Gurpreet", branch: "M.E", year: "2nd year" },
  { name: "Parvesh", branch: "M.E", year: "1st year" },
  { name: "Aamir Khan", branch: "E.E", year: "1st year" },
  { name: "Darshan Lal", branch: "Civil", year: "1st year" },
  { name: "Rinku", branch: "Civil", year: "1st year" },
  { name: "Mubashir Soly", branch: "E.C.E", year: "1st year" },
  { name: "Javed Maqbool", branch: "E.E", year: "1st year" },
  { name: "Rahul", branch: "M.E", year: "1st year" },
  { name: "Ali Mohammad Joo", branch: "E.E", year: "1st year" },
  { name: "Murtaza Rafiq", branch: "E.E", year: "1st year" },
  { name: "Vikas", branch: "M.E", year: "1st year" },
  { name: "Devender Singh", branch: "M.E", year: "2nd year" },
  { name: "Narender", branch: "M.E", year: "2nd year" },
  { name: "Hilal Ahmad Mir", branch: "E.E", year: "1st year" },
];

const achievements = [
  { name: "Team NGFCET (Cricket)", achievements: "Winner D.C.T.M College, Palwal, Inter College (2018-19)\nRunner Up M.V.N University, Palwal, Inter College (2019-20)" },
  { name: "Team NGFCET (Football)", achievements: "2nd Position D.C.T.M Palwal, Inter College (2018-19)" },
  { name: "Team NGFCET (Basketball)", achievements: "2nd Position A.I.T.I Palwal, Inter College (2018-19)" },
  { name: "Team NGFCET (Volleyball)", achievements: "2nd Position J.B.K.P Faridabad, Inter College (2018-19)" },
  { name: "Team NGFCET (Kabaddi)", achievements: "Runner Up at Y.M.C.A University, Inter College, Boys & Girls Team (2018-19)" },
  { name: "Team NGFCET (Badminton)", achievements: "Runner Up at MDU Inter College (2018-19)" },
  { name: "Arun Sharma (ECE)", achievements: "1st position in Weight Lifting M.D.U (2018-19)\nAll India University participation, Kalikat (2018-19)\n1st in Power Lifting (2018-19)" },
  { name: "Maninder Sourot, Yash Gupta, Bharat Aggarwal (ECE)", achievements: "1st Position at YMCA University, Archery Tournament, Inter-College (2018-19)" },
  { name: "Jaidev Sourot (MBA)", achievements: "1st position Power Lifting, Inter College (2018-19)" },
  { name: "Rajdev Sharma (ECE)", achievements: "1st position Power Lifting (2018-19)" },
  { name: "Abhishek (CSE)", achievements: "2nd position Power Lifting (2018-19)" },
  { name: "Narveer (ECE)", achievements: "1st Position Rawal Institute, Inter College (2018-19)\n3rd Position D.C.T.M Palwal, Inter College (2018-19)" },
];

const TeamTable = ({ title, data }: { title: string; data: { name: string; branch: string; year: string }[] }) => (
  <div className="mb-10">
    <h4 className="text-lg font-bold font-display mb-4">{title}</h4>
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-foreground text-background">
            <th className="px-4 py-3 text-left font-semibold w-12">S.No.</th>
            <th className="px-4 py-3 text-left font-semibold">Name</th>
            <th className="px-4 py-3 text-left font-semibold">Branch</th>
            <th className="px-4 py-3 text-left font-semibold">Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p, i) => (
            <tr key={`${p.name}-${i}`} className={`border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
              <td className="px-4 py-2.5">{i + 1}</td>
              <td className="px-4 py-2.5 font-medium">{p.name}</td>
              <td className="px-4 py-2.5 text-muted-foreground">{p.branch}</td>
              <td className="px-4 py-2.5 text-muted-foreground">{p.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const SportsSection = () => (
  <section className="py-20 px-6 bg-secondary" id="sports">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Life at NGF</p>
        <h2 className="text-3xl md:text-4xl font-medium font-display mb-4">Sports & Fitness Facilities</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our students have the chance to use our world-class sporting and fitness facilities, as well as join our social teams and sports clubs.
        </p>
      </div>

      {/* Facilities Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-background border border-border rounded-2xl p-8 md:p-10 mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <Dumbbell className="text-primary" size={24} />
          <h3 className="text-xl font-bold font-display">Our Facilities</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          NGFCET has good sports & fitness facility in the campus like football, volleyball, badminton, basketball, tennis court, cricket pitch for net practice. Indoor games are also available in the hostel like chess, carrom, table-tennis. Each hostel is provided with a table tennis board at each floor.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          College is having more than enough equipment of every indoor & outdoor games like cricket, footballs, basketballs, volleyballs, golf, archery, tennis & badminton rackets and shuttles etc. NGFCET have separate indoor game rooms which have games like Table Tennis, Carrom, Chess etc.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          A well-equipped Multi Gym facility for our students with latest equipment. Dedicated fitness coach is available to guide for exercise & proper diet too.
        </p>
      </motion.div>

      {/* Sports Council */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-background border border-border rounded-2xl p-8 md:p-10 mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-primary" size={24} />
          <h3 className="text-xl font-bold font-display">Sports Council</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Members of the sports council are responsible for participating in different sports events as well as managing events too. Our sports council is divided into two parts — Faculty & Students. Every year student council members change as per their performance.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-foreground text-background">
                <th className="px-4 py-3 text-left font-semibold w-12">S.No.</th>
                <th className="px-4 py-3 text-left font-semibold">Name</th>
                <th className="px-4 py-3 text-left font-semibold">Designation</th>
              </tr>
            </thead>
            <tbody>
              {sportsCouncil.map((p, i) => (
                <tr key={p.name} className={`border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
                  <td className="px-4 py-2.5">{i + 1}</td>
                  <td className="px-4 py-2.5 font-medium">{p.name}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{p.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Teams */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-background border border-border rounded-2xl p-8 md:p-10 mb-10"
      >
        <h3 className="text-xl font-bold font-display mb-6">Sports Teams</h3>
        <TeamTable title="Football Team" data={footballTeam} />
        <TeamTable title="Basketball Team" data={basketballTeam} />
        <TeamTable title="Volleyball Team" data={volleyballTeam} />
        <TeamTable title="Cricket Team" data={cricketTeam} />
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-background border border-border rounded-2xl p-8 md:p-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="text-primary" size={24} />
          <h3 className="text-xl font-bold font-display">Sports Achievements</h3>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-foreground text-background">
                <th className="px-4 py-3 text-left font-semibold w-12">S.No.</th>
                <th className="px-4 py-3 text-left font-semibold">Name</th>
                <th className="px-4 py-3 text-left font-semibold">Achievements</th>
              </tr>
            </thead>
            <tbody>
              {achievements.map((a, i) => (
                <tr key={`${a.name}-${i}`} className={`border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
                  <td className="px-4 py-2.5">{i + 1}</td>
                  <td className="px-4 py-2.5 font-medium">{a.name}</td>
                  <td className="px-4 py-2.5 text-muted-foreground whitespace-pre-line">{a.achievements}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SportsSection;
