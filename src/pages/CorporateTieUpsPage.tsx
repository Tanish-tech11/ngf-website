import React from "react";

const corporateData = [
    {
        id: 1,
        name: "Scholiverse Educare Pvt. Ltd.",
        address: "B-610, Unitech Business Zone, Nirvana Country, South City-2, Gurugram - 122018",
        sector: "Training & Placement",
        purpose: [
            "Curriculum Design",
            "Industrial Training & Visits",
            "Internships & Placement of students",
            "Research & Development",
            "Skill Development Programs",
            "Guest Lectures & FDP",
        ],
    },
    {
        id: 2,
        name: "Rubicon Skill Development Pvt. Ltd.",
        address: "801, 8th Floor, Tower-1, World Trade Centre, Pune - 411014",
        sector: "Training",
        purpose: [
            "Curriculum Design",
            "Industrial Training & Visits",
            "Internships & Placement",
            "Research & Development",
            "Skill Development Programs",
            "Guest Lectures & FDP",
        ],
    },
    {
        id: 3,
        name: "SMascot IT Solutions",
        address: "FF-10, SLF Mall, Sector-31, Faridabad, Haryana - 121003",
        sector: "IT",
        purpose: [
            "Curriculum Design",
            "Industrial Training & Visits",
            "Internships & Placement",
            "Research & Development",
            "Skill Development Programs",
            "Guest Lectures & FDP",
        ],
    },
    {
        id: 4,
        name: "Swar Yantra Technologies Pvt. Ltd.",
        address: "UGF-D-104, Manhattan Mall, Sector-20A, Mathura Road, Faridabad - 121101",
        sector: "IT",
        purpose: [
            "Industrial Training & Visits",
            "Guest Lectures & FDP",
        ],
    },
    {
        id: 5,
        name: "Arnav Infosoft Pvt. Ltd.",
        address: "C-60, Sector-63, Noida",
        sector: "IT",
        purpose: [
            "Internships & Placement",
            "Research & Development",
            "Skill Development Programs",
            "Guest Lectures & FDP",
        ],
    },
    {
        id: 6,
        name: "SN Builders & Developers",
        address: "D-77, Sector-85, Parklands, Faridabad",
        sector: "Construction",
        purpose: [
            "Curriculum Design",
            "Skill Development Programs",
            "Guest Lectures & FDP",
        ],
    },
    {
        id: 7,
        name: "Top Surveying India Pvt. Ltd.",
        address: "310, DLF Centre Point, Sector-11, Mathura Road, Faridabad",
        sector: "Construction",
        purpose: [
            "Curriculum Design",
            "Guest Lectures & FDP",
        ],
    },
    {
        id: 8,
        name: "UQC Global Certifications",
        address: "SCO-84,85, 1st Floor, Sector-16, Faridabad",
        sector: "Training & Certification",
        purpose: [
            "Guest Lectures & FDP",
            "Internships & Placement",
        ],
    },
    {
        id: 9,
        name: "KCIS India Ltd.",
        address: "B-23, 1st Floor, DDA Sheds, Okhla Industrial Area Phase-2, New Delhi",
        sector: "IT",
        purpose: [
            "Industrial Training & Visits",
            "Research & Development",
            "Skill Development Programs",
            "Guest Lectures & FDP",
        ],
    },
    {
        id: 10,
        name: "KV Computer Home Pvt. Ltd.",
        address: "C-109, Sector-2, Noida",
        sector: "IT",
        purpose: [
            "Industrial Training & Visits",
            "Internships & Placement",
            "Research & Development",
        ],
    },
    {
        id: 11,
        name: "Image Consulting Group",
        address: "310, DLF Centre Point, Sector-11, Faridabad",
        sector: "Training",
        purpose: [
            "Research & Development",
            "Skill Development Programs",
        ],
    },
    {
        id: 12,
        name: "Avadna Services Pvt. Ltd.",
        address: "25, 2nd Floor, B.P. NIT Faridabad",
        sector: "Training & Placement",
        purpose: [
            "Skill Development Programs",
            "FDP",
        ],
    },
];

const sectorColors: Record<string, string> = {
    "IT": "bg-blue-50 text-blue-700 border border-blue-200",
    "Training": "bg-amber-50 text-amber-700 border border-amber-200",
    "Training & Placement": "bg-amber-50 text-amber-700 border border-amber-200",
    "Training & Certification": "bg-amber-50 text-amber-700 border border-amber-200",
    "Construction": "bg-green-50 text-green-700 border border-green-200",
};

const stats = [
    { label: "Partner Companies", value: corporateData.length },
    { label: "Sectors Covered", value: new Set(corporateData.map((c) => c.sector)).size },
    { label: "MoU Purposes", value: 6 },
];

const CorporateTieUpsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            {/* Page Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Corporate Tie-ups
                </h1>
                <p className="text-gray-500 text-base">
                    Memoranda of Understanding with industry partners for academic &amp; professional growth
                </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
                {stats.map((s) => (
                    <div
                        key={s.label}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center"
                    >
                        <p className="text-3xl font-bold text-yellow-600">{s.value}</p>
                        <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {corporateData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
                    >
                        {/* Gold left accent bar */}
                        <div className="h-1 bg-yellow-500" />

                        <div className="p-5">
                            {/* Company name */}
                            <h2 className="text-lg font-semibold text-gray-900 leading-snug mb-1">
                                {item.name}
                            </h2>

                            {/* Address */}
                            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
                                {item.address}
                            </p>

                            {/* Sector badge */}
                            <span
                                className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 ${sectorColors[item.sector] ?? "bg-gray-100 text-gray-600 border border-gray-200"
                                    }`}
                            >
                                {item.sector}
                            </span>

                            {/* Divider */}
                            <div className="border-t border-gray-100 mb-3" />

                            {/* Purpose */}
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                Purpose of MoU
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {item.purpose.map((p, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-yellow-50 text-yellow-800 border border-yellow-200 px-2 py-1 rounded-md"
                                    >
                                        {p}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CorporateTieUpsPage;