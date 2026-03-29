import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";

const faculty = [
  { sno: 1, title: "Mr.", first: "SANTOSH", last: "YADAV", designation: "ASST PROFESSOR", dept: "Civil", exp: "7+", qual: "Btech+Mtech" },
  { sno: 2, title: "Ms.", first: "MANJU", last: "RAWAT", designation: "ASST PROFESSOR", dept: "Civil", exp: "7+", qual: "Btech+Mtech" },
  { sno: 3, title: "Mr.", first: "OMPARKASH", last: "", designation: "LECTURER", dept: "FAE", exp: "7+", qual: "BBA + MBA" },
  { sno: 4, title: "Mr.", first: "AMIT", last: "DIXIT", designation: "LECTURER", dept: "FAE", exp: "8+", qual: "B.Com + MBA" },
  { sno: 5, title: "Ms.", first: "AASTHA", last: "KALRA", designation: "LECTURER", dept: "ECE", exp: "5+", qual: "Btech+ MBA" },
  { sno: 6, title: "Mr.", first: "DHEERAJ", last: "SHARMA", designation: "ASST PROFESSOR", dept: "Mechanical", exp: "6+", qual: "Btech+Mtech" },
  { sno: 7, title: "Mr.", first: "JEET", last: "CHHABRA", designation: "LECTURER", dept: "Mechanical", exp: "12+", qual: "Btech+Mtech" },
  { sno: 8, title: "Mr.", first: "TILAK", last: "DEB MUKHERJEE", designation: "ASST PROFESSOR", dept: "MBA", exp: "6+", qual: "Pursuing Phd, B.A (Hons) + MTTM" },
  { sno: 9, title: "Mr.", first: "NETRAPAL", last: "", designation: "ASST PROFESSOR", dept: "FAE", exp: "5+", qual: "BCA + MCA" },
  { sno: 10, title: "Mr.", first: "JOGENDER", last: "SINGH", designation: "ASST PROFESSOR", dept: "EE", exp: "6+", qual: "BA+MBA" },
  { sno: 11, title: "Mr.", first: "SHADAB", last: "AHMAD", designation: "ASST PROFESSOR", dept: "ECE", exp: "8+", qual: "Bcom + MBA" },
  { sno: 12, title: "Mr.", first: "SANJEEV", last: "VINAYAK", designation: "LECTURER", dept: "Mechanical", exp: "7+", qual: "B.Com + M.Com" },
  { sno: 13, title: "Ms.", first: "RANJANA", last: "KATYAL", designation: "ASST PROFESSOR", dept: "BBA", exp: "4+", qual: "Pursuing Phd., BBA + MBA" },
  { sno: 14, title: "Mr.", first: "SAURABH", last: "", designation: "ASST PROFESSOR", dept: "Civil", exp: "4+", qual: "B.Tech + M.Tech" },
  { sno: 15, title: "Mr.", first: "BALKISHAN", last: "", designation: "LECTURER", dept: "Civil", exp: "5+", qual: "BA + MBA" },
  { sno: 16, title: "Dr.", first: "NAMRATA", last: "KAUSHIK", designation: "PROFESSOR", dept: "Mechanical", exp: "9+", qual: "B.Sc + M.Sc" },
  { sno: 17, title: "Mr.", first: "ABIR", last: "BHOWMIK", designation: "ASST PROFESSOR", dept: "CSE", exp: "6+", qual: "BBA + MBA" },
  { sno: 18, title: "Mrs.", first: "MONIKA", last: "CHHABRA", designation: "LECTURER", dept: "CSE", exp: "11+", qual: "B.Sc" },
  { sno: 19, title: "Mr.", first: "SANJAY", last: "AGGARWAL", designation: "ASST PROFESSOR", dept: "EE", exp: "7+", qual: "BBA + MBA" },
  { sno: 20, title: "Mr.", first: "JITENDER", last: "", designation: "ASST PROFESSOR", dept: "Mechanical", exp: "5+", qual: "B.TECH+M.TECH" },
  { sno: 21, title: "Mr.", first: "KIRAN", last: "PAL", designation: "LECTURER", dept: "ECE", exp: "10+", qual: "B.Tech + Diploma" },
  { sno: 22, title: "Ms.", first: "JYOTI", last: "", designation: "ASST PROFESSOR", dept: "FAE", exp: "4+", qual: "B.Tech + M.Tech" },
  { sno: 24, title: "Ms.", first: "MANJU", last: "SHARMA", designation: "ASST PROFESSOR", dept: "EE", exp: "3+", qual: "B.Tech + M.Tech" },
  { sno: 25, title: "Ms.", first: "MANJU", last: "SINGH", designation: "LECTURER", dept: "FAE", exp: "4+", qual: "B.tech" },
  { sno: 26, title: "Ms.", first: "SAPNA", last: "", designation: "ASST PROFESSOR", dept: "FAE", exp: "3+", qual: "BA+ MSC (Fashion Tech)" },
  { sno: 27, title: "Ms.", first: "PREETI", last: "", designation: "ASST PROFESSOR", dept: "ECE", exp: "3+", qual: "B.Tech + M.Tech" },
  { sno: 28, title: "Mr.", first: "AVINESH", last: "KUMAR", designation: "ASST PROFESSOR", dept: "Civil", exp: "3+", qual: "B.Tech + M.Tech" },
  { sno: 29, title: "Ms.", first: "ADITI", last: "KAUSHIK", designation: "LECTURER", dept: "ECE", exp: "3+", qual: "B.Tech + M.Tech" },
  { sno: 30, title: "Mr.", first: "HOMINDER", last: "KUMAR", designation: "ASST PROFESSOR", dept: "ECE", exp: "12+", qual: "BA + MBA" },
  { sno: 31, title: "Ms.", first: "HEENA", last: "SHARMA", designation: "LECTURER", dept: "CSE", exp: "5+", qual: "BCA+MBA" },
  { sno: 32, title: "Ms.", first: "MOHINI", last: "CHHABRA", designation: "LECTURER", dept: "Mechanical", exp: "3+", qual: "B.Com+M.com" },
  { sno: 33, title: "Mr.", first: "GYAN", last: "SINGH", designation: "LECTURER", dept: "EE", exp: "3+", qual: "B.TECH+M.TECH" },
  { sno: 34, title: "Ms.", first: "KUSUM", last: "MOR", designation: "ASST PROFESSOR", dept: "MBA", exp: "2+", qual: "BBA + MBA" },
  { sno: 35, title: "Dr.", first: "RAJESH", last: "MANGLA", designation: "ASSOCIATE PROFESSOR", dept: "Mechanical", exp: "2+", qual: "B.TECH+M.TECH" },
  { sno: 36, title: "Ms.", first: "GEETA", last: "SHARMA", designation: "ASST PROFESSOR", dept: "ECE", exp: "1+", qual: "B.SC+M.SC" },
  { sno: 37, title: "Dr.", first: "BABITA", last: "RAWAT", designation: "ASST PROFESSOR", dept: "ECE", exp: "1+", qual: "Ph.d, B.sc+M.sc" },
  { sno: 38, title: "Dr.", first: "NEHA", last: "SHARMA", designation: "ASST PROFESSOR", dept: "ECE", exp: "1+", qual: "Ph.d, B.sc+M.sc" },
  { sno: 39, title: "Ms.", first: "SONIA", last: "GUPTA", designation: "ASST PROFESSOR", dept: "EE", exp: "1+", qual: "B.SC+M.SC" },
  { sno: 40, title: "Ms.", first: "RENU", last: "", designation: "ASST PROFESSOR", dept: "EE", exp: "1+", qual: "B.SC+M.SC" },
  { sno: 41, title: "Ms.", first: "SARASWATI", last: "", designation: "ASST PROFESSOR", dept: "EE", exp: "1+", qual: "B.SC+M.SC" },
  { sno: 42, title: "Mr.", first: "YOGENDER", last: "KUMAR", designation: "ASST PROFESSOR", dept: "Civil", exp: "1+", qual: "B.TECH+M.TECH" },
  { sno: 43, title: "Mr.", first: "ARVIND", last: "CHAUHAN", designation: "ASST PROFESSOR", dept: "Civil", exp: "1+", qual: "B.TECH+M.TECH" },
  { sno: 44, title: "Mr.", first: "MANOJ", last: "KUMAR", designation: "ASST PROFESSOR", dept: "CSE", exp: "1+", qual: "B.TECH+M.TECH" },
  { sno: 45, title: "Ms.", first: "PRIYA", last: "", designation: "ASST PROFESSOR", dept: "EE", exp: "1+", qual: "B.TECH+M.TECH" },
  { sno: 46, title: "Ms.", first: "PINKI", last: "KUMARI", designation: "ASST PROFESSOR", dept: "CSE", exp: "1+", qual: "B.TECH+M.TECH" },
  { sno: 47, title: "Mr.", first: "ANKIT", last: "GUPTA", designation: "ASST PROFESSOR", dept: "CSE", exp: "1+", qual: "B.TECH+M.TECH" },
  { sno: 48, title: "Ms.", first: "RITU", last: "RANI", designation: "ASST PROFESSOR", dept: "CSE", exp: "1+", qual: "B.Tech + M.Tech" },
  { sno: 49, title: "Dr.", first: "MANOJ", last: "KUMAR", designation: "ASST PROFESSOR", dept: "CSE", exp: "1+", qual: "Phd, B.TECH+M.TECH" },
  { sno: 50, title: "Ms.", first: "SONU", last: "SHARAMA", designation: "ASST PROFESSOR", dept: "CSE", exp: "1+", qual: "B.TECH+M.TECH" },
  { sno: 51, title: "Ms.", first: "PRIYA", last: "", designation: "ASST PROFESSOR", dept: "Mechanical", exp: "1+", qual: "B.TECH" },
  { sno: 52, title: "Ms.", first: "JYOTI", last: "", designation: "ASST PROFESSOR", dept: "Mechanical", exp: "1+", qual: "B.SC+M.SC" },
  { sno: 53, title: "Ms.", first: "RAJNI", last: "", designation: "ASST PROFESSOR", dept: "Mechanical", exp: "1+", qual: "B.TECH" },
  { sno: 54, title: "Ms.", first: "YOGITA", last: "", designation: "ASST PROFESSOR", dept: "Mechanical", exp: "1+", qual: "B.SC+M.SC" },
  { sno: 55, title: "Ms.", first: "SHALINI", last: "SETHI", designation: "ASST PROFESSOR", dept: "FAE", exp: "1+", qual: "B.TECH+M.TECH" },
  { sno: 56, title: "Ms.", first: "VANDANA", last: "", designation: "ASST PROFESSOR", dept: "FAE", exp: "1+", qual: "B.TECH+M.TECH" },
  { sno: 57, title: "Ms.", first: "POONAM", last: "RANI", designation: "ASST PROFESSOR", dept: "FAE", exp: "1+", qual: "B.TECH+M.TECH" },
  { sno: 58, title: "Ms.", first: "AMITA", last: "", designation: "LECTURER", dept: "BBA", exp: "1+", qual: "BBA + MBA" },
  { sno: 59, title: "Miss", first: "KAMNA", last: "", designation: "LECTURER", dept: "MBA", exp: "2+", qual: "BA+MBA" },
  { sno: 60, title: "Dr.", first: "SHARAT", last: "KAUSHIK", designation: "PRINCIPAL", dept: "CSE", exp: "14+", qual: "" },
  { sno: 61, title: "Dr.", first: "KULDEEP", last: "TOMAR", designation: "PROFESSOR", dept: "CSE", exp: "13+", qual: "Phd., BCA+MCA/M.TECH" },
  { sno: 62, title: "Mr.", first: "PRAVEEN", last: "SHARMA", designation: "ASST PROFESSOR", dept: "CSE", exp: "12+", qual: "B.TECH+M.TECH" },
  { sno: 63, title: "Mr.", first: "VINOD", last: "KUMAR", designation: "ASST PROFESSOR", dept: "EE", exp: "12+", qual: "B.TECH+M.TECH" },
  { sno: 64, title: "Ms.", first: "SUMAN", last: "DAGAR", designation: "LECTURER (SEL GR)", dept: "ECE", exp: "12+", qual: "B.TECH+M.TECH" },
  { sno: 65, title: "Mr.", first: "PAWAN", last: "SINGH", designation: "LECTURER", dept: "Mechanical", exp: "12+", qual: "B.TECH+M.TECH" },
  { sno: 66, title: "Mr.", first: "NITIN", last: "KUMAR", designation: "ASST PROFESSOR", dept: "Mechanical", exp: "11+", qual: "B.TECH+M.TECH" },
  { sno: 67, title: "Dr.", first: "RAKESH", last: "SHRIVASTAVA", designation: "ASST PROFESSOR", dept: "ECE", exp: "12+", qual: "B.TECH+M.TECH" },
  { sno: 68, title: "Dr.", first: "VISHAL", last: "GOEL", designation: "ASST PROFESSOR", dept: "Mechanical", exp: "12+", qual: "B.TECH+M.TECH" },
  { sno: 69, title: "Dr.", first: "RAJEEV", last: "", designation: "ASST PROFESSOR", dept: "Mechanical", exp: "11+", qual: "B.TECH+M.TECH" },
  { sno: 70, title: "Dr.", first: "MANPREET", last: "KAUR", designation: "PROFESSOR", dept: "MBA", exp: "13+", qual: "" },
  { sno: 71, title: "Mr.", first: "AJEET", last: "SINGH", designation: "LECTURER", dept: "FAE", exp: "12+", qual: "B.TECH+M.TECH" },
  { sno: 72, title: "Ms.", first: "RACHNA", last: "", designation: "ASST PROFESSOR", dept: "CSE", exp: "10+", qual: "B.TECH+M.TECH" },
  { sno: 73, title: "Ms.", first: "AKANKSHA", last: "KATHURIA", designation: "LECTURER", dept: "MBA", exp: "10+", qual: "Pursuing Ph.D, BBA+MBA" },
  { sno: 74, title: "Mr.", first: "MANOJ", last: "AWANA", designation: "LECTURER", dept: "ECE", exp: "10+", qual: "B.TECH+M.TECH" },
  { sno: 75, title: "Mr.", first: "DHARMENDER", last: "", designation: "LECTURER", dept: "ECE", exp: "10+", qual: "B.TECH+M.TECH" },
  { sno: 76, title: "Mr.", first: "JAGDEEP", last: "CHAUHAN", designation: "LECTURER", dept: "CSE", exp: "10+", qual: "B.TECH+M.TECH" },
  { sno: 77, title: "Mr.", first: "JITENDER", last: "KUMAR", designation: "ASST PROFESSOR", dept: "Mechanical", exp: "12+", qual: "Pursuing Ph.D, B.TECH+M.TECH" },
  { sno: 78, title: "Mr.", first: "DHARMENDRA", last: "PATEL", designation: "ASST PROFESSOR", dept: "Mechanical", exp: "10+", qual: "B.TECH+M.TECH" },
  { sno: 79, title: "Dr.", first: "Priyanka", last: "Sehgal", designation: "PROFESSOR", dept: "MBA", exp: "20+", qual: "MBA, UGC-NET, Ph.D(Management)" },
];

const FacultiesPage = () => (
  <Layout>
    <SubPageLayout title="Our Faculties" subtitle="Meet our experienced and dedicated teaching staff">
      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-foreground text-background">
              <th className="px-4 py-3 text-left font-semibold">S.No</th>
              <th className="px-4 py-3 text-left font-semibold">Name</th>
              <th className="px-4 py-3 text-left font-semibold">Designation</th>
              <th className="px-4 py-3 text-left font-semibold">Department</th>
              <th className="px-4 py-3 text-left font-semibold">Exp.</th>
              <th className="px-4 py-3 text-left font-semibold">Qualification</th>
            </tr>
          </thead>
          <tbody>
            {faculty.map((f, i) => (
              <tr
                key={f.sno}
                className={`border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-secondary"} hover:bg-accent transition-colors`}
              >
                <td className="px-4 py-3 text-muted-foreground">{f.sno}</td>
                <td className="px-4 py-3 font-medium">{f.title} {f.first} {f.last}</td>
                <td className="px-4 py-3 text-muted-foreground">{f.designation}</td>
                <td className="px-4 py-3">
                  <span className="inline-block bg-primary/10 text-primary px-2 py-0.5 rounded-md text-xs font-medium">
                    {f.dept}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{f.exp}</td>
                <td className="px-4 py-3 text-muted-foreground">{f.qual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SubPageLayout>
  </Layout>
);

export default FacultiesPage;
