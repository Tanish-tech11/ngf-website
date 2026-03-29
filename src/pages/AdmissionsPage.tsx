import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, GraduationCap, Bus, RefreshCw, HelpCircle, Home, Award } from "lucide-react";

/* ─── Admission Procedure per course ─── */
const procedureBlock = (course: string) => (
  <div key={course} className="mb-8">
    <h3 className="text-xl font-bold font-display text-foreground mb-4 border-l-4 border-primary pl-4">{course}</h3>

    <div className="space-y-4 text-muted-foreground leading-relaxed">
      <div>
        <h4 className="font-semibold text-foreground mb-2">Walk-In Process</h4>
        <p>
          The Applicant can walk in to our campus &amp; meet our admission counselor and fill the admission form, submit photocopy of the documents. After scrutiny &amp; fulfillment of admission criteria the applicant will be informed about admission. On confirmation of admission the candidate is required to deposit the fees as per college norms.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-2">Online Process</h4>
        <p className="mb-2">
          The applicant can download the admission form from{" "}
          <a href="https://www.ngfcet.com" target="_blank" rel="noopener noreferrer" className="text-primary underline font-medium">here</a>.
          Then take a printout, fill in the required details correctly and:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Email the scanned copy of form along with required documents to <span className="font-medium text-foreground">onlineadm@ngfcet.com</span></li>
          <li>Courier the admission form along with required documents to the college address</li>
          <li><Link to="/admissions/apply" className="text-primary underline font-medium">Apply online here</Link></li>
        </ul>
        <p className="mt-3 font-semibold text-foreground">
          Our enrollment has already begun — to secure a confirmed seat, initiate your admission process now.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-2">Bank Details</h4>
        <p className="text-sm italic">Please contact the admission office for bank details.</p>
      </div>
    </div>
  </div>
);

const courses = ["B.Tech.", "B.Tech. Lateral", "BBA", "M.Tech.", "MBA"];

/* ─── Documents list ─── */
const documents = [
  "10th Mark Sheet",
  "12th Mark Sheet",
  "Migration Certificate (original) *",
  "Gap year affidavit if applicable *",
  "Character Certificate *",
  "Medical Fitness Certificate (original)",
  "6 Passport size photos",
  "Diploma Mark Sheet (For Lateral Entry Students)",
  "Graduation Mark Sheet (For PG students)",
  "Graduation Degree (For PG Students)",
  "Aadhaar Card *",
  "Minimum attendance Affidavit",
  "Transfer Certificate (TC) for another State Student",
];

/* ─── Eligibility ─── */
const eligibilityData = [
  {
    program: "B.TECH (4 Year Program)",
    criteria: [
      "XII passed with a minimum aggregate of 45% or secures 50% in Physics, Chemistry and Mathematics in Class XII.",
      "Applicants who have appeared for 10+2 final examination and results are awaited are also eligible to apply.",
      "Applicant must be minimum of 17 years in age.",
    ],
  },
  {
    program: "BBA (3 Year Program)",
    criteria: ["Passed 10+2 or equivalent examination from any recognized board/university with minimum 45% marks."],
  },
  {
    program: "MBA (2 Year Program)",
    criteria: [
      "Passed Bachelor's Degree of minimum 3 years duration.",
      "Obtained at least 50% marks (45% for reserved category) in the qualifying examination.",
    ],
  },
  {
    program: "M.Tech (2 Year Program)",
    criteria: [
      "Passed Bachelor's Degree or equivalent in relevant field.",
      "Obtained at least 50% marks (45% for reserved category) in the qualifying examination.",
    ],
  },
  {
    program: "Lateral Entry",
    criteria: [
      "Passed Diploma examination with at least 50% marks in any branch of Engineering and Technology.",
      "Passed B.Sc. Degree from a recognized University with at least 50% marks.",
    ],
  },
];

/* ─── Scholarship tables ─── */
const mbaSlabs = [
  { score: "95 – 100", pct: "100%" },
  { score: "90 – 95", pct: "80%" },
  { score: "85 – 90", pct: "70%" },
  { score: "80 – 85", pct: "50%" },
  { score: "70 – 80", pct: "40%" },
];
const btechSlabs = [
  { score: "97 – 100", pct: "100%" },
  { score: "94 – 97", pct: "80%" },
  { score: "90 – 94", pct: "50%" },
  { score: "85 – 90", pct: "20%" },
  { score: "80 – 85", pct: "15%" },
  { score: "70 – 80", pct: "10%" },
];
const bbaBcaSlabs = [
  { score: "95%+", pct: "90%" },
  { score: "90 – 95%", pct: "75%" },
  { score: "85 – 90%", pct: "40%" },
];

const ScholarshipTable = ({ title, basis, eligibility, condition, slabs, scoreLabel }: {
  title: string; basis: string; eligibility: string; condition: string;
  slabs: { score: string; pct: string }[]; scoreLabel: string;
}) => (
  <div className="mb-8">
    <h4 className="text-lg font-bold font-display text-foreground mb-3">{title}</h4>
    <div className="grid grid-cols-2 gap-2 text-sm mb-4 bg-secondary rounded-xl p-4">
      <span className="font-medium text-foreground">Eligibility</span><span className="text-muted-foreground">{eligibility}</span>
      <span className="font-medium text-foreground">Basis</span><span className="text-muted-foreground">{basis}</span>
      <span className="font-medium text-foreground">Condition</span><span className="text-muted-foreground">{condition}</span>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
        <thead className="bg-primary text-primary-foreground">
          <tr>
            <th className="px-4 py-3 text-left">{scoreLabel}</th>
            <th className="px-4 py-3 text-left">Scholarship % on Total Tuition Fee</th>
          </tr>
        </thead>
        <tbody>
          {slabs.map((s, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-secondary"}>
              <td className="px-4 py-2.5 font-medium text-foreground">{s.score}</td>
              <td className="px-4 py-2.5 text-primary font-bold">{s.pct}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/* ─── FAQ data ─── */
const generalFaqs = [
  { q: "Brief me about NGFCET?", a: "New Green Field College of Engineering & Technology (NGFCET) is a continuum of excellence from the New Green Field Education Society, a visible symbol of knowledge & experience providing high quality education in the fields of Engineering, Humanities, Management, Computer Education & many more. Details of these programmes are given in the NGFCET Admission Brochure. For more information visit www.ngfcet.com" },
  { q: "Where is NGFCET campus located? & How to reach NGFCET?", a: "NGFCET is located on Delhi-Mathura road, 72nd Mile Stone, Faridabad-Palwal (Delhi-NCR). NGFCET Campus can be reached by availing Metro facilities up to Badarpur Metro Station and from there taking a bus." },
  { q: "How can I obtain an Admission Brochure?", a: "Admission Brochure contains a Scratch Card consisting of a covered number, which will facilitate submission of application form online. Admission Brochure without Scratch Card may be downloaded from NGFCET website www.ngfcet.com free of cost. However, application for admission shall be submitted online only at the College website for which application fee of Rs. 500/- is payable. Candidate may purchase admission brochure from NGFCET Campus, Administrative Headquarters or City Centers in cash, details of which is available on the college website." },
  { q: "Are there any specific instructions for filling up the on-line application form?", a: "Read Instructions for filling up Online Application Form carefully on the opening page after you Click 'Apply Now' Tab on the NGFCET Website Home Page for Admission. Keep ready copy of certificates for Secondary (10th), Senior Secondary (10+2) Examination and other qualifying exam (if any). Fill-up all fields with the correct information. Do not use all Capital/Small Letters. Use Sentence case. Mandatory fields are marked with Red Asterisks, without which application will not be submitted. You will have the liberty to edit certain fields as directed by the format including Address, Mobile Number, and Qualifying Examination Result etc. Take out two print-outs of the final version of the online application form which must be brought at the time of physical counselling for admission." },
  { q: "Do we need to submit the original certificates on the day of admission?", a: "No. There is no need to submit original certificates but candidate must produce original certificates/documents on the day of admission for their verifications, failing which candidate shall not be considered for admission. Two sets of self-attested copies of the certificates/documents are required to be submitted at the time of physical counselling as detailed in the admission brochure." },
  { q: "What are the documents to be produced at the time of admission?", a: "Candidate must bring the following documents in original along with two sets of self-attested photocopies: Proof of Residence (Aadhaar Card, Nationalized Bank Pass Book, Ration Card, Electricity Bill, Telephone Bill, Driving License), Secondary School Examination Certificate (10th) - as proof of Date of Birth, Senior Secondary School Examination Certificate (10+2), Detailed Mark sheets/Provisional Certificate/Degree/Diploma Certificate of the qualifying examination, Character Certificate from the Institution last attended, Result card of the relevant entrance examination, Four passport size colored photographs in formal dress, Certificate of proof as candidate of SC/ST, BC, OBC, Kashmiri Migrants, North East States (seven), Sports Personnel (with authorized participation at National Level), Son/Daughter of Defence Personnel categories and Foreign Nationals seeking relaxation in the minimum eligibility criteria. In addition, all students will be required to submit following documents either during the orientation program after start of classes or within 3 days from the date of admission whichever is later: Certificate of Medical Fitness, Migration Certificate, Proof of Residence (Ration Card/Electricity Bill/Telephone Bill/Driving License etc.), Undertaking by candidate and by parents for 'Anti Ragging' (format available on NGFCET website), Undertaking by parents for total family income from all sources along with proof of income in the form of current Income Tax Return/Certificate of Income from employers of parent(s)/proof of survey conducted by DRDA of the district concerned of the applicant or any other authorized Government agency/any other valid proof (Original/Attested Photocopy). Any other document required/notified later." },
];

const transportFaqs = [...generalFaqs];
const hostelFaqs = [...generalFaqs];

/* ─── Tab config ─── */
const tabs = [
  { value: "procedures", label: "Admission Procedure", icon: FileText },
  { value: "eligibility", label: "Eligibility & Docs", icon: GraduationCap },
  { value: "scholarship", label: "Scholarships", icon: Award },
  { value: "transport", label: "Transport", icon: Bus },
  { value: "refund", label: "Refund Policy", icon: RefreshCw },
  { value: "hostel", label: "Hostel", icon: Home },
  { value: "faq", label: "FAQ", icon: HelpCircle },
];

const AdmissionsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "procedures";

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  return (
  <Layout>
    <SubPageLayout title="Admissions 2025-26" subtitle="Your journey to a bright future starts here. Explore procedures, eligibility, scholarships and more.">
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        {/* Tab navigation */}
        <TabsList className="flex flex-wrap h-auto gap-1 bg-secondary p-2 rounded-xl mb-10">
          {tabs.map((t) => (
            <TabsTrigger
              key={t.value}
              value={t.value}
              className="flex items-center gap-1.5 text-xs sm:text-sm px-3 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
            >
              <t.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{t.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* ─── Admission Procedures ─── */}
        <TabsContent value="procedures">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-8">Admission Procedures</h2>
            {courses.map((c) => procedureBlock(c))}
          </motion.div>
        </TabsContent>

        {/* ─── Eligibility & Documents ─── */}
        <TabsContent value="eligibility">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-8">Eligibility Criteria</h2>
            <div className="space-y-6 mb-12">
              {eligibilityData.map((e) => (
                <Card key={e.program} className="border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-foreground">{e.program}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1.5 text-muted-foreground text-sm">
                      {e.criteria.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-6">Documents List</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {documents.map((d, i) => (
                <div key={i} className="flex items-start gap-2 bg-secondary rounded-lg p-3">
                  <FileText className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{d}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </TabsContent>

        {/* ─── Scholarships ─── */}
        <TabsContent value="scholarship">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">Scholarship Policy</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At NGFCET, we offer a number of scholarships to students depending on academic credentials and achievements in sporting and cultural arena. NGFCET offers scholarships to meritorious students based on their academic performance viz 10+2, graduation, rank/score in All India/State Level Entrance/Aptitude Tests.
            </p>

            <Card className="border-primary/30 bg-primary/5 mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">What is BrightMind Scholarship?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                BrightMind Scholarship is a merit-based financial aid program that rewards students based on their academic performance and entrance exam scores such as JEE Main, CAT, XAT, CMAT, or Class 12 results. The scholarship offers tuition fee waivers based on predefined score or percentage slabs and is granted after document verification.
              </CardContent>
            </Card>

            <ScholarshipTable
              title="BrightMind Scholarship – MBA"
              eligibility="Valid CAT / XAT / CMAT scorecard required"
              basis="Entrance exam percentile/score"
              condition="Scorecard must be submitted for verification"
              slabs={mbaSlabs}
              scoreLabel="Exam Score"
            />
            <ScholarshipTable
              title="BrightMind Scholarship – B.Tech"
              eligibility="Valid JEE Main percentile scorecard required"
              basis="JEE Main percentile"
              condition="Scorecard must be submitted for verification"
              slabs={btechSlabs}
              scoreLabel="JEE Main Percentile"
            />
            <ScholarshipTable
              title="BrightMind Scholarship – BBA/BCA"
              eligibility="Must be enrolled in BBA/BCA with valid Class 12 marksheet"
              basis="Class 12 percentage"
              condition="Marksheet must be submitted for verification"
              slabs={bbaBcaSlabs}
              scoreLabel="12th Percentage"
            />

            <Card className="border-border mt-6">
              <CardHeader><CardTitle className="text-lg text-foreground">Terms & Conditions</CardTitle></CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5">
                  <li>Applicable on total tuition fees</li>
                  <li>Valid scorecard submission is mandatory</li>
                  <li>Based strictly on defined slabs</li>
                  <li>Incorrect information may lead to disqualification</li>
                </ul>
              </CardContent>
            </Card>

            <div className="mt-6 bg-secondary rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-2">How to Apply?</h4>
              <p className="text-sm text-muted-foreground">
                Students can apply for the BrightMind Scholarship by contacting the campus or speaking with a counsellor during the admission process.
              </p>
            </div>
          </motion.div>
        </TabsContent>

        {/* ─── Transport ─── */}
        <TabsContent value="transport">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">Transportation Fee</h2>
            <p className="text-muted-foreground mb-2 font-medium">The bus charges for Day Scholars (Optional)</p>
            <div className="text-muted-foreground space-y-4 leading-relaxed mb-8">
              <p>NGFCET situated in Palwal is well-connected with the national capital. It offers transport facility to its students and faculty members on very minimal charges. The buses ply on different routes of Palwal, Faridabad and Delhi areas to pick and drop the students. Our bus drivers are highly qualified and are licensed by the RTO to drive college buses to ensure the full safety of both the students &amp; staff members.</p>
              <p>Seats are allotted to all transport users on first come first serve basis. Transport fee is collected in advance of the semester at the time of availing transport facility. The ID cards are given to the users every semester.</p>
              <p>The transport facility is also a significant contributor of inculcating an element of punctuality among the students. The bus facility is also available for students &amp; faculty members for industrial visits, field trips and other academic activities.</p>
            </div>
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <p className="font-bold text-foreground">Mr. Raj Singh</p>
                <p className="text-muted-foreground text-sm">Contact No: <a href="tel:+919802133214" className="text-primary font-medium">+91 9802133214</a></p>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* ─── Refund Policy ─── */}
        <TabsContent value="refund">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-6">Refund Policy</h2>
            <h3 className="text-lg font-semibold text-foreground mb-4">Policy for Withdrawal and Refund of Fees</h3>
            <div className="text-muted-foreground space-y-4 leading-relaxed text-sm">
              <p>Candidates may withdraw their admission by submitting an Application Form. Submit the duly filled application form in person along with original copy of the receipt of the fee deposited to the Office of the Registrar through Deputy Registrar (Registration &amp; Scholarship), for which he/she must obtain an acknowledgement.</p>
              <p>The fee deposited by such a candidate shall be refunded after deducting Rs. 1000/- provided the candidate has submitted the Withdrawal Application up to the first day of Commencement of the classes. In such cases, the refund of fee shall be made within 30 days from the final cut off date of admission, which shall be normally 30th September of the calendar year, through cheque in favor of the Candidate only and sent at the address for correspondence through recorded delivery.</p>
              <p>It is made clear that no refund of fee shall be made after the commencement of classes, even if the fresh admission continues against the vacant/dropout seats. It is further made clear that if a candidate seeks admission after the commencement of the classes and later withdraws his/her admission, no refund of fees in such case shall be made.</p>
              <p>A student admitted in the College shall be required to pay fee for the entire duration of the course on annual basis in two installments. If a student is detained due to whatsoever reason, he/she shall be required to pay the fees again when readmitted. If a student leaves the programme/course of study in between without completing the programme for whatsoever reasons, he/she will be liable to pay fees for the balance duration of the programme as well, as per directions of Hon'ble Supreme Court of India in Islamic Academy of Education case.</p>
              <p className="font-medium text-foreground">No correspondence in respect of refund of fee against withdrawal shall be entertained until and unless it is in reference to the Acknowledgement No. and Date given by the Deputy Registrar at the time of receipt of the Withdrawal Application along with original receipt of the fee deposited.</p>
            </div>
          </motion.div>
        </TabsContent>

        {/* ─── Hostel ─── */}
        <TabsContent value="hostel">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-6">Hostel</h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>The institution has a hostel with 24 hrs security. The hostel has separate wings for boys and girls. The boys are accommodated in the boys hostel in the campus while girls are housed in a separate hostel in Faridabad.</p>
              <p>The rooms are spacious, airy, well lighted and fully furnished. All basic amenities are provided including 24 hrs electricity supply, clean water and indoor as well as outdoor recreation facilities.</p>
              <p>The mess in the boys hostel is equipped with hi-tech machines to prepare the food quickly and hygienically. It has the provision to feed 80 students at the same time.</p>
              <p>The boys hostel has a strength of 200 students while girl's hostel in Faridabad accommodates 80 students. Transport facilities are provided to the girls to commute from the hostel to the college.</p>
              <p className="font-semibold text-foreground text-lg">It is a home away from home.</p>
            </div>
          </motion.div>
        </TabsContent>

        {/* ─── FAQ ─── */}
        <TabsContent value="faq">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-8">Frequently Asked Questions</h2>

            {/* General FAQ */}
            <div className="mb-10">
              <h3 className="text-xl font-bold font-display text-foreground mb-4 border-l-4 border-primary pl-4">General FAQs</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {generalFaqs.map((f, i) => (
                  <AccordionItem key={i} value={`gen-${i}`} className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-sm font-medium text-foreground text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Transport FAQ */}
            <div className="mb-10">
              <h3 className="text-xl font-bold font-display text-foreground mb-4 border-l-4 border-primary pl-4">FAQs for Transport</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {transportFaqs.map((f, i) => (
                  <AccordionItem key={i} value={`trans-${i}`} className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-sm font-medium text-foreground text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Hostel FAQ */}
            <div>
              <h3 className="text-xl font-bold font-display text-foreground mb-4 border-l-4 border-primary pl-4">FAQs for Hostel</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {hostelFaqs.map((f, i) => (
                  <AccordionItem key={i} value={`hostel-${i}`} className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-sm font-medium text-foreground text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* CTA */}
      <div className="mt-16 text-center bg-foreground text-background rounded-2xl p-10">
        <h3 className="text-2xl font-bold font-display mb-3">Ready to Begin?</h3>
        <p className="text-background/70 mb-6">Start your admission process today and secure your seat at NGFCET.</p>
        <Link
          to="/admissions/apply"
          className="inline-flex bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all"
        >
          Apply Now
        </Link>
      </div>
    </SubPageLayout>
  </Layout>
  );
};

export default AdmissionsPage;
