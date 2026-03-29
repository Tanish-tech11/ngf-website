import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";

const CeoPage = () => (
  <Layout>
    <SubPageLayout title="CEO's Message">
      <div className="bg-secondary border border-border rounded-2xl p-8 md:p-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Rapid advancements in technology and globalisation have brought about dramatic change in Indian business environment. Highly competitive markets are pulling tremendous pressure on companies. This has caused a paradigm shift in the way organizations are structured and responsibilities are shared. It is only value based education which can bring about positive changes in this knowledge based global economy by way of transforming the society and bringing dignity to the country. It is the human capital of a country which determines the role of the nation in the decision making process of international institutions like UNO for achieving their respective objectives.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We, at NGFCET, understand the changed role of a professional in today's business environment. We understand that it takes much more than theoretical knowledge to perform in a team and give the team its winning edge. We understand that business organizations are looking for not merely technically trained students, but multi-dimensional professionals.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Teaching at NGFCET goes far beyond the curriculum and students are additionally given hands on experience on state-of-the-art software tools used by R&D departments of leading industries across the globe. The unique facilities provided include CNC, CAD/CAM Lab, Computer Hardware Lab, software tool, Oracle, Solid works Software etc.
          </p>
        </div>
        <div className="border-t border-border pt-6">
          <p className="text-lg font-bold font-display">Mr. Ashwani Parbhakar</p>
          <p className="text-primary font-medium">CEO</p>
        </div>
      </div>
    </SubPageLayout>
  </Layout>
);

export default CeoPage;
