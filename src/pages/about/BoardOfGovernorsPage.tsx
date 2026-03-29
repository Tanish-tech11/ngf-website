import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";

const BoardOfGovernorsPage = () => (
  <Layout>
    <SubPageLayout title="Board of Governors">
      <div className="bg-secondary border border-border rounded-2xl p-8 md:p-12">
        <p className="text-muted-foreground leading-relaxed text-lg">
          Board of Governors comprise of key officials and experts from different areas of expertise. The Board consists of eminent educationists, industry experts, businessmen and corporate heads. It is responsible for the general superintendence of the institute, and for steering & providing direction in related matters.
        </p>
      </div>
    </SubPageLayout>
  </Layout>
);

export default BoardOfGovernorsPage;
