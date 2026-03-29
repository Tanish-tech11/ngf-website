import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";
import { Radio } from "lucide-react";
import radioImg from "@/assets/radio-ngf.jpg";

const RadioNGFPage = () => (
  <Layout>
    <SubPageLayout title="Radio NGF 90.4" subtitle='"Dil se Dil Tak"'>
      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden mb-10 h-64 md:h-80">
        <img src={radioImg} alt="Radio NGF Studio" className="w-full h-full object-cover" />
      </div>

      <div className="bg-secondary border border-border rounded-2xl p-8 md:p-10 mb-10">
        <div className="flex items-center gap-3 mb-6">
          <Radio className="text-primary" size={24} />
          <h2 className="text-xl font-bold font-display">Radio NGF 90.4 FM — "Dil se Dil Tak"</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Radio NGF 90.4 FM- "Dil se Dil Tak", is a community radio station dedicated to community service by being the voice of the community that we serve for. The content or programming of the radio station is catered to the needs of the community.
          </p>
          <p>
            It is the very first and only radio station in Palwal, completing 5 years of community engagement, creating awareness among the people about local administration, agriculture, health and entertainment. The tag line "Dil se Dil Tak" believes in connecting the emotions among the community people. With a state-of-the-art infrastructure, we also have a Facebook channel where we try to give solutions to the problems of our listeners.
          </p>
          <p>
            Agriculture awareness is one of our prime areas, as this is the sole earning source of our listeners. We provide agriculture talks, invite people in this domain to answer any queries on our show "Krishi Karyakram". Being a Community Radio, we emphasize social issues like Hygiene, Women's Health & Empowerment, Water Conservation, Drug Addiction, Anti-Ragging, Administrative policies and Education.
          </p>
          <p>
            There have been various community programs/projects that benefit the community to spread awareness or to bring to the notice of the authority. Many concerns have been addressed by such awareness programs like Cancer Awareness, Tobacco Eradication, Swachhta Abhiyaan, celebrating the work of unsung heroes of society.
          </p>
          <p>
            Being in a rural-urban demographic, we also engage the community members like Sarpanch, national level sports players, social workers like ASHA and Anganwadi workers by inviting them for a talk interview and encourage our listeners by their hard work and moral stories. We also air special campaigns for Women equality and empowerment.
          </p>
          <p>
            We believe in connecting the community by encouraging participation and improving the communication among the communities.
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-3xl font-bold font-display text-primary">"DIL SE DIL TAK"</p>
      </div>
    </SubPageLayout>
  </Layout>
);

export default RadioNGFPage;
