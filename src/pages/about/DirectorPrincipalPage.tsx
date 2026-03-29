import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";

const DirectorPrincipalPage = () => (
  <Layout>
    <SubPageLayout title="Director-Principal's Message">
      <div className="bg-secondary border border-border rounded-2xl p-8 md:p-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Fueled by optimism, ingenuity and a sense of responsibility, we seek to accelerate our purposeful impact in the Region.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The scale and urgency of challenges facing us today require that NGFCET reach farther and move faster to accelerate our purposeful impact in the Region. We need a new way of working that enables us to tackle long-standing issues facing our society and our Industry and allows us to be nimble when faced with unexpected threats.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The strategic imperative of embedding ethics in everything we do is integrated across Our Vision, which is focused on:
          </p>
          <ul className="space-y-3 mb-10">
            {[
              "Accelerating Solutions to the Industry & Student's most pressing problems",
              "Enhancing our Knowledge of the Industry & Student's and ourselves",
              "Advancing Education for our students, who are determined to make a difference",
              "Supporting our diverse Community of faculty, students and staff, who underlie the NGFCET's beneficial impact in the Region",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-border pt-6">
          <p className="text-lg font-bold font-display">Mr. Sharat Kaushik</p>
          <p className="text-primary font-medium">Director-Principal</p>
        </div>
      </div>
    </SubPageLayout>
  </Layout>
);

export default DirectorPrincipalPage;
