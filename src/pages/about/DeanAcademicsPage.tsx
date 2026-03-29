import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";

const DeanAcademicsPage = () => (
  <Layout>
    <SubPageLayout title="Dean Academics's Desk">
      <div className="bg-secondary border border-border rounded-2xl p-8 md:p-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            The prospects are better than ever to develop technology enabled sustainable solutions for the ever evolving needs and challenges of global community. That calls for a greater need for the trained manpower that has a proactive approach towards the management of technology to beat the challenges of vulnerable social, economic and environmental ecosystems.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At NGFCET we are committed to develop professionals who understand the modalities of the modern society. Through a well-structured mentorship program these young minds are encouraged to overcome their inhibitions and realize their own potential. Expertly curated soft skills development programs enable to connect well with the world around. The judicious use of online and offline resources for learning orients them to adopt the culture of continuous self-improvement for life.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Thoughtfully designed extra-curricular activities by various student clubs provide interactive platforms that sensitize them towards regional and cultural diversity. Regular visits to NGOs and events on social and environmental causes help our students imbibe Human Values. We host a variety of sports facilities within the campus and special scholarships are given to performers at various levels. Here, the dimensions of education expand beyond curriculum which takes care of intellectual, emotional, mental and physical well-being.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The dedicated teams of 'Industry Interaction and Partnership Cell' and 'Centre of Excellence' work relentlessly to bridge the gap between college and local industry in the zone and across the country. They focus on providing practical exposure through internships, live projects, Industry visits, and guest lectures from Industry experts. 'Alumni Connect Program' facilitates meaningful dialogue between students and Alumni for hand holding and guidance on career planning. We are committed to promote the culture self-employment and offer incubation facilities within the campus.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Every element of NGFCET reiterates its mission to empower youth with knowledge, skills and mindset that are required to create futuristic progressive society.
          </p>
        </div>
        <div className="border-t border-border pt-6">
          <p className="text-lg font-bold font-display">Prof.(Dr.) Kuldeep Tomar</p>
          <p className="text-primary font-medium">Dean Academics</p>
        </div>
      </div>
    </SubPageLayout>
  </Layout>
);

export default DeanAcademicsPage;
