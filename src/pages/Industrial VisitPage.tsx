import React, { useState } from "react";

const visits = [
    { id: 1, date: "6th March 2009", company: "Biltech Buildings Elements Pvt. Ltd.", batch: "M.E" },
    { id: 2, date: "20th March 2009", company: "Karam Auto Components Ltd.", batch: "M.E" },
    { id: 3, date: "23rd April 2009", company: "Karam Auto Components Ltd.", batch: "M.E" },
    { id: 4, date: "22nd Oct 2009", company: "Vigyaan Bhawan, New Delhi", batch: "MBA" },
    { id: 5, date: "18th Feb 2010", company: "DEF Expo (Ministry of Defence), Pragati Maidan", batch: "MBA" },
    { id: 6, date: "21st Sep 2010", company: "Escorts Farmtrac", batch: "M.E" },
    { id: 7, date: "9th Nov 2010", company: "Petroleum Conservation Research Centre (PCRA)", batch: "ECE" },
    { id: 8, date: "9th Nov 2010", company: "Petroleum Conservation Research Centre (PCRA)", batch: "CSE & IT" },
    { id: 9, date: "Dec 2010", company: "Book Fair", batch: "CSE/IT" },
    { id: 10, date: "24th Feb 2011", company: "Yakult", batch: "MBA" },
    { id: 11, date: "6th March 2009", company: "Biltech Buildings Elements Pvt. Ltd.", batch: "M.E" },
    { id: 12, date: "20th March 2009", company: "Karam Auto Components Ltd.", batch: "M.E" },
    { id: 13, date: "23rd April 2009", company: "Karam Auto Components Ltd.", batch: "M.E" },
    { id: 14, date: "22nd Oct 2009", company: "Vigyaan Bhawan, New Delhi", batch: "MBA" },
    { id: 15, date: "18th Feb 2010", company: "DEF Expo (Ministry of Defence), Pragati Maidan", batch: "MBA" },
    { id: 16, date: "21st Sep 2010", company: "Escorts Farmtrac", batch: "M.E" },
    { id: 17, date: "9th Nov 2010", company: "Petroleum Conservation Research Centre (PCRA)", batch: "ECE" },
    { id: 18, date: "9th Nov 2010", company: "Petroleum Conservation Research Centre (PCRA)", batch: "CSE & IT" },
    { id: 19, date: "Dec 2010", company: "Book Fair", batch: "CSE/IT" },
    { id: 20, date: "24th Feb 2011", company: "Yakult", batch: "MBA" },
];

const batchColors: Record<string, string> = {
    "M.E": "bg-blue-50 text-blue-700 border border-blue-200",
    "MBA": "bg-amber-50 text-amber-700 border border-amber-200",
    "ECE": "bg-green-50 text-green-700 border border-green-200",
    "CSE & IT": "bg-purple-50 text-purple-700 border border-purple-200",
    "CSE/IT": "bg-purple-50 text-purple-700 border border-purple-200",
};

const allBatches = ["All", ...Array.from(new Set(visits.map((v) => v.batch)))];

const IndustrialVisitPage = () => {
    const [activeBatch, setActiveBatch] = useState("All");

    const filtered = activeBatch === "All"
        ? visits
        : visits.filter((v) => v.batch === activeBatch);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">

            {/* Header */}
            <div className="text-center mb-10">
                <p className="text-yellow-600 font-semibold text-sm uppercase tracking-widest mb-2">
                    Training & Placement
                </p>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">Industrial Visit</h1>
                <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
                    Industrial Visit is a part of the course, during which students visit companies &amp; get
                    insight of the internal working environment of a company &amp; how a company functions, as
                    well as useful information related to the practical aspects of the educational course which
                    cannot be visualized in lectures. Industrial visit is considered one of the most tactical
                    methods of teaching.
                </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center">
                    <p className="text-3xl font-bold text-yellow-500">{visits.length}+</p>
                    <p className="text-sm text-gray-500 mt-1">Total Visits</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center">
                    <p className="text-3xl font-bold text-yellow-500">
                        {new Set(visits.map((v) => v.company)).size}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Companies Visited</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center">
                    <p className="text-3xl font-bold text-yellow-500">
                        {new Set(visits.map((v) => v.batch)).size}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Departments</p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="max-w-5xl mx-auto mb-6 flex flex-wrap gap-2">
                {allBatches.map((b) => (
                    <button
                        key={b}
                        onClick={() => setActiveBatch(b)}
                        className={`text-sm px-4 py-1.5 rounded-full border transition-all font-medium ${activeBatch === b
                            ? "bg-yellow-500 text-yellow-900 border-yellow-500"
                            : "bg-white text-gray-600 border-gray-200 hover:border-yellow-400"
                            }`}
                    >
                        {b}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-900 text-white">
                                <th className="text-left px-5 py-3.5 font-medium w-12">S.No.</th>
                                <th className="text-left px-5 py-3.5 font-medium w-40">Date</th>
                                <th className="text-left px-5 py-3.5 font-medium">Name of Company</th>
                                <th className="text-left px-5 py-3.5 font-medium w-32">Batch</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((visit, index) => (
                                <tr
                                    key={visit.id}
                                    className={`border-t border-gray-100 transition-colors hover:bg-yellow-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                                        }`}
                                >
                                    <td className="px-5 py-3.5 text-gray-400 font-medium">{index + 1}</td>
                                    <td className="px-5 py-3.5 text-gray-600">{visit.date}</td>
                                    <td className="px-5 py-3.5 text-gray-900 font-medium">{visit.company}</td>
                                    <td className="px-5 py-3.5">
                                        <span
                                            className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${batchColors[visit.batch] ?? "bg-gray-100 text-gray-600 border border-gray-200"
                                                }`}
                                        >
                                            {visit.batch}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer count */}
                <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 text-xs text-gray-400">
                    Showing {filtered.length} of {visits.length} visits
                </div>
            </div>

        </div>
    );
};

export default IndustrialVisitPage;