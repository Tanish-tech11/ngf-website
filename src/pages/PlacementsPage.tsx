import Layout from "@/components/Layout";

const PlacementCellPage = () => (
  <Layout>

    <section className="px-6 py-16 bg-white">

      <h1 className="text-4xl font-bold text-center mb-4">
        Training & Placement Cell
      </h1>

      <p className="text-gray-600 max-w-4xl mx-auto text-center mb-10">
        Welcome to Training & Placement Cell at NGF College of Engineering and Technology (NGFCET).
      </p>

      <h2 className="text-2xl font-semibold text-center mb-4">About IIPC</h2>

      <p className="text-gray-600 max-w-4xl mx-auto text-center mb-10">
        Industry Institute Partnership Cell (IIPC) enhances employability and industry exposure.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">

        <div className="p-6 bg-gray-50 rounded-xl shadow">
          <h3>🎯 Vision</h3>
          <p>Build strong careers through skills.</p>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl shadow">
          <h3>🚀 Mission</h3>
          <p>Train students for industry readiness.</p>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl shadow">
          <h3>🏆 Goal</h3>
          <p>Create employable professionals.</p>
        </div>

      </div>

    </section>

  </Layout>
);

export default PlacementCellPage;