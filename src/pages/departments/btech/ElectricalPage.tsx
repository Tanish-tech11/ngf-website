import DepartmentPageLayout from "@/components/DepartmentPageLayout";

const ElectricalPage = () => (
  <DepartmentPageLayout
    title="Electrical Engineering"
    subtitle="B.Tech EE"
    overview="The Electrical Engineering has been playing a vital role in producing scientists and technologists of the highest caliber. The ever challenging needs of technological excellence in all the major areas of Electrical Engineering such as control & automation, robotics, power systems, power electronics & drives, microprocessors & microcontrollers, digital and analog electronics, PLC & SCADA systems, FACTS, biomedical instrumentation, digital signal & image processing, electrical machines, integrated electronics and circuits, network & systems, measurements & instrumentation, electrical engineering applications in computer technology and renewable energy resources motivate to opt Electrical Engineering one of the most chosen branches of Engineering & Technology. The Electrical Engineering stream, which is very relevant to the requirement of modern fast developing industries, is the evergreen branch and mother of all engineering branches related to the Electrical & Electronics Engineering."
    achievementTable={{
      headers: ["Name", "Semester", "University Rank"],
      rows: [
        ["Amrender Kumar (Gold Medalist)", "1st to 8th", "1st"],
        ["Sunil Kumar", "1st", "8th"],
        ["Priyanka Jamwal", "1st", "14th"],
        ["Shahalam Ali Malick", "1st", "18th"],
        ["Yasir Mushtaq", "4th", "1st"],
        ["Punkaj Chauhan", "7th", "6th"],
        ["Jahangeer Ahmad Dar", "3rd", "6th"],
        ["Arvind Kumar Shah", "6th", "7th"],
      ],
    }}
    teachingPlan="Term Plan"
    careerScopeTitle="Career Scope"
    careerScope="Electrical engineering deals with the study and application of physics and mathematics combined with elements of electricity, electronics, and electromagnetism to both large and small scale systems to process information and transmit energy. It covers a wide range of sub-fields including electronics, digital computers, power engineering, telecommunications, control systems, RF engineering, and signal processing."
    careerPaths={[
      "Electrical Engineers",
      "Micro Electrical Engineers",
      "Instrumentation Engineers",
      "Telecommunication Engineers",
      "Electrical Design Engineers",
      "Aerospace Engineers",
      "Systems Developer",
      "Broadcast Engineer",
    ]}
  />
);

export default ElectricalPage;
