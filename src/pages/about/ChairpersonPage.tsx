import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";

const ChairpersonPage = () => (
  <Layout>
    <SubPageLayout title="Chairperson's Message">
      <div className="bg-secondary border border-border rounded-2xl p-8 md:p-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            To break the shackles of mediocrity and to reach effortlessly for excellence, a society must lay great emphasis on education. For education to permeate to every level of society and power a surge to inclusive progress, we need active involvement of philanthropists, industrialists and visionaries.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Over the last 50 years, the New Green Field Educational Society has been fortunate enough to gather a talented and committed team. In keeping with our long pursuit of excellence, the Founding Members of NGFES decided to create a seat of higher education amidst serene and verdant surroundings. Far from the madding crowds, this hamlet of tranquility offers the promise of a life lived in meaningful action.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            NGF pursues the highest moral, ethical and cultural values and is committed to providing its students with the best infrastructural and human resources available. In the process, NGF aims to match and then surpass the leading national and international educational institutions.
          </p>
        </div>
        <div className="border-t border-border pt-6">
          <p className="text-lg font-bold font-display">Mrs. Protima Parbhakar</p>
          <p className="text-primary font-medium">Chairperson</p>
        </div>
      </div>
    </SubPageLayout>
  </Layout>
);

export default ChairpersonPage;
