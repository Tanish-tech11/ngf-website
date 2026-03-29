import DepartmentPageLayout from "@/components/DepartmentPageLayout";

const BBAGeneralPage = () => (
  <DepartmentPageLayout
    title="Bachelor of Business Administration"
    subtitle="BBA General"
    overview="Bachelors of Business Administration (BBA) programme is a three-year undergraduate programme devised to prepare students to work in management and business field. The programme offers structured opportunities for every student to apply the business knowledge they have acquired in the classroom to real-life corporate settings. The curriculum encompasses interactive lectures and challenging academic assignments which enable students to learn practice skills in leadership, negotiation, innovation, communication and teamwork, essential to building a strong foundation in core business disciplines, helping them to acquire key competencies needed to excel in today's challenging business environment."
    achievementTable={{
      headers: ["Student Name", "Semester Id", "SGPA", "University Rank"],
      rows: [
        ["Priyanka Kumari", "1", "8.667", "1"],
        ["Kajal", "1", "7.833", "11"],
        ["Kirti Garg", "6", "9.144", "5"],
        ["Ritik Garg", "3", "7.591", "18"],
        ["Rohit Goel", "3", "7.591", "20"],
      ],
    }}
    teachingPlan="Term Plan"
    careerScopeTitle="Why BBA?"
    careerScope="This is a professional and a versatile degree that teaches you about the fundamental of management and business. You can either start your career right after completing this degree, or use it as a gateway to getting into MBA course. By the end of your degree, you will be a more developed and wholesome person."
    careerPaths={[
      "Human Resources Manager",
      "Training Manager",
      "Operations Manager",
      "Distribution Manager",
      "Accountants Executive",
      "Marketing Manager",
      "Trade Manager",
      "Sales Representative",
    ]}
  />
);

export default BBAGeneralPage;
