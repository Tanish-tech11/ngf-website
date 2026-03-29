import React from "react";

const jobFestEvents = [
    {
        id: 1,
        title: "Mega Job Fair 2025",
        date: "21 November 2025",
        location: "NGF College of Engineering & Technology, Palwal, Haryana",
        image: "/images/job-fest-2025.png", // replace with your actual image path
        description:
            "NGF College of Engineering & Technology hosted its annual Mega Job Fair 2025, welcoming delegates from top recruiting companies across India. Students from all departments participated, showcasing their skills and securing placements in leading organizations.",
        companies: ["Akamai", "Sandesh", "GrowthSqale", "Prerna Group"],
        highlight: "100% Placement Promise fulfilled for 2025 Batch",
    },
];

const placementStats = [
    { batch: "2017 Batch", result: "100% Placed", note: "Successfully placed all students" },
    { batch: "2016 Batch", result: "100% Placed", note: "Consistent placement promise fulfilled" },
];

const JobFestPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">

            {/* Page Header */}
            <div className="text-center mb-12">
                <p className="text-yellow-600 font-semibold text-sm uppercase tracking-widest mb-2">
                    Training & Placement
                </p>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">Job Fest</h1>
                <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
                    As NGF College of Engineering & Technology has always promised — every student gets a
                    platform to launch their career. We are proud to have fulfilled this promise consistently
                    across all batches.
                </p>
            </div>

            {/* Promise Banner */}
            <div className="max-w-4xl mx-auto mb-12">
                <div className="bg-yellow-500 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-md">
                    <div className="text-5xl">🎯</div>
                    <div>
                        <h2 className="text-xl font-bold text-yellow-900 mb-1">Our Placement Promise</h2>
                        <p className="text-yellow-800 text-sm leading-relaxed">
                            As NGFCET has always promised, for the 2017 Batch, students were placed successfully.
                            This promise is very important to us as it ensures we guarantee an immediate platform
                            for our students to start their careers. The 2016 Batch was also placed 100%
                            successfully. We are blessed to be consistent in fulfilling this promise to our
                            students and their parents.
                        </p>
                    </div>
                </div>
            </div>

            {/* Placement Stats */}
            <div className="max-w-4xl mx-auto mb-12 grid md:grid-cols-2 gap-5">
                {placementStats.map((s) => (
                    <div
                        key={s.batch}
                        className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex items-center gap-5 border-l-4 border-l-yellow-500"
                    >
                        <div className="text-4xl font-bold text-yellow-500">✓</div>
                        <div>
                            <p className="text-lg font-semibold text-gray-900">{s.batch}</p>
                            <p className="text-green-600 font-bold text-sm">{s.result}</p>
                            <p className="text-gray-400 text-xs mt-0.5">{s.note}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Job Fest Event Cards */}
            <div className="max-w-5xl mx-auto space-y-10">
                {jobFestEvents.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                    >
                        {/* Event Image */}
                        <div className="relative w-full h-72 md:h-96 bg-gray-100 overflow-hidden">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover object-center"
                            />
                            {/* Overlay badge */}
                            <div className="absolute top-4 left-4 bg-yellow-500 text-yellow-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow">
                                {event.date}
                            </div>
                        </div>

                        {/* Event Details */}
                        <div className="p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">{event.title}</h2>
                            <p className="text-sm text-gray-400 mb-4 flex items-center gap-1">
                                <span>📍</span> {event.location}
                            </p>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {event.description}
                            </p>

                            {/* Highlight */}
                            <div className="bg-green-50 border border-green-200 rounded-xl px-5 py-3 mb-6 inline-block">
                                <p className="text-green-700 font-semibold text-sm">🏆 {event.highlight}</p>
                            </div>

                            {/* Participating Companies */}
                            <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                                    Participating Recruiters
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {event.companies.map((c) => (
                                        <span
                                            key={c}
                                            className="bg-gray-100 text-gray-700 border border-gray-200 text-xs px-3 py-1.5 rounded-full font-medium"
                                        >
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default JobFestPage;