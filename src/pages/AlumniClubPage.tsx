import React from "react";

const AlumniClubPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner Section */}
            <section className="relative bg-blue-900 text-white py-16 px-6 text-center">
                <h1 className="text-4xl font-bold mb-4">Alumni Club</h1>
                <p className="max-w-2xl mx-auto text-lg">
                    Connecting NGF College graduates across the globe — fostering mentorship, networking, and lifelong bonds.
                </p>
            </section>

            {/* About Alumni Club */}
            <section className="py-12 px-6 max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">About the Alumni Club</h2>
                <p className="text-gray-700 leading-relaxed">
                    The Alumni Club of NGF College of Engineering & Technology is a vibrant community of former students who
                    continue to contribute to the growth and success of the institution. Through events, mentorship programs,
                    and networking opportunities, alumni play a vital role in shaping the future of our students.
                </p>
            </section>

            {/* Activities Section */}
            <section className="py-12 px-6 bg-gray-100">
                <h2 className="text-2xl font-semibold mb-6 text-blue-800 text-center">Our Activities</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-2">Mentorship</h3>
                        <p className="text-gray-600">
                            Alumni guide current students with career advice, industry insights, and skill development.
                        </p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-2">Networking Events</h3>
                        <p className="text-gray-600">
                            Regular meetups and reunions help alumni stay connected and expand professional networks.
                        </p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-2">Guest Lectures</h3>
                        <p className="text-gray-600">
                            Experienced alumni share knowledge and expertise through interactive sessions with students.
                        </p>
                    </div>
                </div>
            </section>

            {/* Alumni Gallery */}
            <section className="py-12 px-6 max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-blue-800 text-center">Alumni Moments</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Replace these with your uploaded alumni images */}
                    <img src="/assets/alumni1.jpg" alt="Alumni Event 1" className="rounded-lg shadow-md" />
                    <img src="/assets/alumni2.jpg" alt="Alumni Event 2" className="rounded-lg shadow-md" />
                    <img src="/assets/alumni3.jpg" alt="Alumni Event 3" className="rounded-lg shadow-md" />
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 px-6 bg-blue-900 text-white text-center">
                <h2 className="text-2xl font-semibold mb-4">Join the Alumni Club</h2>
                <p className="mb-6">
                    Stay connected with NGF College and contribute to the success of future generations.
                </p>
                <a
                    href="/alumni-registration"
                    className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                    Register Now
                </a>
            </section>
        </div>
    );
};

export default AlumniClubPage;