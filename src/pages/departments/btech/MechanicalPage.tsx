import DepartmentPageLayout from "@/components/DepartmentPageLayout";

const MechanicalPage = () => (
  <DepartmentPageLayout
    title="Mechanical Engineering"
    subtitle="B.Tech ME"
    overview="Mechanical Engineering is one of the broadest engineering disciplines combining principles from engineering, physics and materials science. There is nothing in this world that can be done without the use of mechanical engineering. Even high technology hard wares and the systems on these works are the combinations of different mechanical hardware systems. Robotics, Artificial Intelligence and Electric vehicle technology is the futuristic technology in which various countries are focussing because of its versatility in nature of its applications. All these require special hard wares and latest technologies to manufacture them. In short, we can say that mechanical engineering is the base of all engineering and base of our life. As a mechanical engineer you are expected to have high cognitive skills to design, manufacture and for maintenance of mechanical systems."
    achievementTable={{
      headers: ["Name", "Semester", "University Rank"],
      rows: [
        ["Mukul", "2nd", "7th"],
        ["Manisha", "6th", "28th"],
        ["Vimlesh Kumar Ojha", "6th", "31st"],
        ["Rohit Kumar", "2nd", "33rd"],
        ["Pawan Pratap Saxena", "1st", "29th"],
        ["Abhay Kumar", "5th", "47th"],
        ["Rohit Kumar", "3rd", "20th"],
        ["Chandan Singh", "3rd", "41st"],
        ["Sunil Verma", "3rd", "50th"],
        ["Mukul Kumar", "8th", "8th"],
        ["Mandeep Singh Sethi", "8th", "32nd"],
        ["Khandakar Nazmul", "6th", "42nd"],
        ["Deepak", "7th", "42nd"],
        ["Krishan Kumar", "3rd", "25th"],
      ],
    }}
    teachingPlan="Term Plan - 3rd, 5th and 7th Semester"
    careerScopeTitle="Why Mechanical?"
    careerScope="This is a broad field, which has more impact on people's daily lives; from manufacturing the clothes you wear, to building the apps on phones. Studying mechanical engineering is a combination of Science, Math, and computing. As a Mechanical Engineer, you will learn how not to rely on the way things have been done before, and to think in creative way."
    careerPaths={[
      "Design Engineer",
      "Automotive Engineer",
      "Quality Engineer",
      "Robotics Engineer",
      "Engine Designers",
      "Manufacturing Engineer",
      "Instrumentation Engineer",
      "Research & Development Engineer",
    ]}
  />
);

export default MechanicalPage;
