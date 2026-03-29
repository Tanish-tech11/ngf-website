import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sectionsData = [
    {
        title: "Purpose",
        content: [
            "Ensure all eligible students get placement opportunities.",
            "Help students start careers with preferred companies.",
            "Maintain job quality standards.",
            "Ensure smooth teamwork and defined processes."
        ]
    },
    {
        title: "Scope",
        content: [
            "Applicable to all Graduate & Non-Graduate courses.",
            "Only final year eligible students can participate.",
            "Degree completion required from university."
        ]
    },
    {
        title: "Eligibility",
        content: [
            "Minimum marks and 70% attendance required.",
            "Completion of training & academic requirements.",
            "No disciplinary issues.",
            "No pending fees."
        ]
    },
    {
        title: "Application Procedure",
        content: [
            "Update profile and CV before deadline.",
            "Apply only through IIPC.",
            "Follow deadlines strictly.",
            "Attend Pre-Placement Talks (PPT)."
        ]
    },
    {
        title: "Interview Procedure",
        content: [
            "Prepare for tests, GD and interviews.",
            "Be punctual and in uniform.",
            "No salary negotiation unless allowed."
        ]
    }
];

export default function PlacementPolicyPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [search, setSearch] = useState("");

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const filteredSections = sectionsData.filter(section =>
        section.title.toLowerCase().includes(search.toLowerCase()) ||
        section.content.some(item => item.toLowerCase().includes(search.toLowerCase()))
    );

    const downloadPDF = () => {
        window.print();
    };

    return (
        <div className="px-6 md:px-20 py-10 space-y-10">
            <h1 className="text-3xl font-bold text-center">
                Placement Policy (IIPC)
            </h1>

            {/* Search */}
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Search policy..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:w-1/2 px-4 py-2 border rounded-xl shadow"
                />
            </div>

            {/* PDF Button */}
            <div className="flex justify-center">
                <button
                    onClick={downloadPDF}
                    className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700"
                >
                    Download PDF
                </button>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
                {filteredSections.map((section, index) => (
                    <div key={index} className="border rounded-2xl shadow">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center p-4 text-left font-semibold"
                        >
                            {section.title}
                            <ChevronDown
                                className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                            />
                        </button>

                        {openIndex === index && (
                            <div className="px-6 pb-4">
                                <ul className="list-disc ml-6 space-y-2">
                                    {section.content.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
