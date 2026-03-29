import DepartmentPageLayout from "@/components/DepartmentPageLayout";

const CSECyberSecurityPage = () => (
  <DepartmentPageLayout
    title="Computer Science Engineering — Cyber Security"
    subtitle="B.Tech CSE (Cyber Security)"
    overview="Welcome to the Department of Computer Science (DCS), where innovation meets education. Our department is dedicated to providing students with a comprehensive understanding of both the theoretical and practical aspects of computing and technology. DCS has programs that have a presence in every field of life and, in the last two decades, has shown immense potential and growth, benefiting individuals and industries alike. Today, we cannot imagine our lives without computers and computing technology."
    achievements={[
      "Imagine Cup National Final",
      "Two Zonal Imagine Cup Camp 2014 & 2015",
      "20 App Development Trainings",
      "More than 200 apps developed by the students",
      "10 MSP's and 2 MSA's",
      "150 certifications done from MVA (Microsoft Virtual Academy)",
      "150 Students participated in the Microsoft Talent India",
      "2 Teams were selected Finalist in Microsoft Imagine Cup Nationals 2014 & 2015",
    ]}
    syllabusLinks={[
      { label: "Third Term Download" },
      { label: "Fourth Term Download" },
      { label: "Fifth Term Download" },
      { label: "Sixth Term Download" },
    ]}
    careerScopeTitle="Why Computer Science?"
    careerScope="It's a Branch which has its presence in every field of life and in the last two decades has shown maximum potential and growth for everyone. Today we cannot imagine our living without computers/Computing Technology. Computer Science is used to learn about the fundamental principles of the science as well as advanced techniques that are used for practical systems development."
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

export default CSECyberSecurityPage;
