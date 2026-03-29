import DepartmentPageLayout from "@/components/DepartmentPageLayout";

const CSEMTechPage = () => (
  <DepartmentPageLayout
    title="Computer Science Engineering"
    subtitle="M.Tech CSE"
    overview="The M. Tech. program at the School of Computer Science & Engineering will challenge the intellect of the students and enhance their knowledge in various courses in Computer Science. The program will prepare students for a variety of industry jobs, jobs in R & D and even for a Ph.D. degree in Computer Science. This programme has been designed to impart advanced knowledge in various areas of Computer Science. The programme is designed in such a way that a student can complete it based on advanced coursework alone. The structure of this program aims to nurture students by balancing core courses, advanced elective courses and a substantial dissertation or project. All students get an opportunity to strengthen their knowledge of the fundamentals and to specialise in areas such as Algorithms, Bioinformatics, Cryptology, Image Processing, Networking, and Pattern Recognition. The M. Tech. program is intended to provide both theoretical and practical awareness in the areas of advancements in Operating Systems, advances in DBMS, Computer Systems Performance Analysis, Computer Science, Advanced Algorithms, Advances in Computer Architecture, Computer Networks and a host of elective courses such as, Advances in Digital Image Processing, Computer Graphics & Visualization, Topics in Artificial Intelligence, Protocols Engineering, Advances in Compiler Design, Information Security etc."
    researchTable={{
      headers: ["Name", "Title", "Journal"],
      rows: [
        ["Dr. Kuldeep Tomar", "A Technical Insight On Blockchain Technology And Its Application", "IJRECE"],
        ["Dr. Kuldeep Tomar", "Envisaging The Use Of BLOCKCHAIN Technology In Health Insurance Sector", "ELSEVIER"],
        ["Dr. Kuldeep Tomar", "A Robust Color Image Encryption In Frequency Domain Using Chaotic Map", "IEEE"],
        ["Dr. Kuldeep Tomar", "HTTP Packet Inspection Policy for Improvising Internal Network Security", "IJCNIS"],
        ["Dr. Kuldeep Tomar", "Enhancing Network Security by Implementing Preventive Mechanism using GNS3", "IEEE"],
        ["Dr. Kuldeep Tomar", "Enhancing Network Security and Performance Using Optimized ACLs", "IJFCST"],
        ["Mr. Praveen", "Phase Neural Network Model For Weather Forecast Along With Logistics And Linear Regression", "IEEE"],
        ["Ms. Rachna", "Review on Network Intrusion Detection using Support Vector Machine & AdaBoost", "IJIRCCE"],
        ["Ms. Ritu", "Enhancement Of Video Calling Quality In Voip Over Manet", "IJIRCCE"],
        ["Mr. Deepak", "A Robust Color Image Encryption In Frequency Domain Using Chaotic Map", "IEEE"],
        ["Ms. Shivani", "Envisaging The Use Of Blockchain Technology In Health Insurance Sector", "ELSEVIER"],
      ],
    }}
    teachingPlan="Term Plan"
    careerScopeTitle="Why Computer Science?"
    careerScope="This is for the computer enthusiasts who want to take their knowledge to the next level. This is where the research centric mindset is applied and those who wants to learn new skills in the computer science domain."
    careerPaths={[
      "Multi-Touch Interaction",
      "Green Computing",
      "Facebook Thrift",
      "BlackBerry Technology",
      "Computational Intelligence in Wireless Sensor Networks",
      "Bluejacking",
      "Mobile Number Portability",
      "Capacitive And Resistive Touch Systems",
    ]}
  />
);

export default CSEMTechPage;
