import Layout from "@/components/Layout";

const COEPage = () => (
    <Layout>

        <section className="px-6 py-16 bg-gray-50">

            <h1 className="text-4xl font-bold text-center mb-4">
                Centre of Excellence
            </h1>

            <p className="text-center text-gray-500 mb-8 italic">
                An innovation in Discovery
            </p>

            <h2 className="text-2xl text-center mb-6">Student Benefits</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    "Placements",
                    "Skill Development",
                    "Corporate Projects",
                    "Study Abroad",
                    "Certifications",
                    "Exam Preparation"
                ].map((item, i) => (
                    <div key={i} className="p-5 bg-white shadow rounded-xl text-center">
                        {item}
                    </div>
                ))}
            </div>

        </section>

    </Layout>
);

export default COEPage;