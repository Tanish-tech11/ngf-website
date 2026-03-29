import { useState } from "react";

const clubs = [
    {
        id: 1,
        name: "Literary & Debating Club",
        icon: "🎤",
        color: "bg-purple-50 border-purple-200",
        iconBg: "bg-purple-100",
        tagColor: "bg-purple-100 text-purple-700",
        tag: "Literary",
        description:
            "In this club, we welcome people with open minds that try to contribute towards bringing change to the society by the medium of speeches, poems and stories.",
    },
    {
        id: 2,
        name: "Cultural Club",
        icon: "🎭",
        color: "bg-pink-50 border-pink-200",
        iconBg: "bg-pink-100",
        tagColor: "bg-pink-100 text-pink-700",
        tag: "Cultural",
        description:
            "The club aims at providing various platforms to the students both inside and outside of the university. Be it the annual fest or freshers or any other college event, the club comes up with folk to contemporary, classical singing to western and many more such forms.",
    },
    {
        id: 3,
        name: "Photography & Designing Club",
        icon: "📸",
        color: "bg-yellow-50 border-yellow-200",
        iconBg: "bg-yellow-100",
        tagColor: "bg-yellow-100 text-yellow-700",
        tag: "Creative",
        description:
            "This club provides the platform to bind and bring together the like-minded people and share knowledge about the art, creativity through photography and designing.",
    },
    {
        id: 4,
        name: "The Ingenious Squad",
        icon: "💡",
        color: "bg-blue-50 border-blue-200",
        iconBg: "bg-blue-100",
        tagColor: "bg-blue-100 text-blue-700",
        tag: "Technical",
        description:
            "This is one of the prominent technical clubs formed by one of our students in 2021. It is one of the core technical clubs providing support and guidance to students in the form of technical learning. The aim is to nourish the knowledge with right practical approach and innovation.",
    },
    {
        id: 5,
        name: "Sports Club",
        icon: "⚽",
        color: "bg-green-50 border-green-200",
        iconBg: "bg-green-100",
        tagColor: "bg-green-100 text-green-700",
        tag: "Sports",
        description:
            "In this club, we believe in healthy body, healthy mind motto. We offer facilities for indoor and outdoor sports such as carrom, tennis, football, cricket, kabaddi, basketball, etc. It organises events such as cricket matches with faculties and students on regular basis, badminton competition, etc.",
    },
    {
        id: 6,
        name: "Entrepreneurship Club",
        icon: "🚀",
        color: "bg-orange-50 border-orange-200",
        iconBg: "bg-orange-100",
        tagColor: "bg-orange-100 text-orange-700",
        tag: "Business",
        description:
            "This club provides an environment where students can cultivate their entrepreneurship skills. Students participate in the development of a business, by working on a business plan, with a mindset of implementing a start-up. There are visiting entrepreneurs from the business community along with the College faculty advisors.",
    },
];

const steps = [
    {
        step: "Step 1",
        title: "Review Existing Clubs",
        points: [
            "Review the list of clubs and see if there are other groups with similar goals or interests to yours.",
            "If other groups exist that are similar to yours, approach the coordinator to discuss collaboration.",
            "If there are no clubs that exist to meet your interest or needs, continue to Step 2.",
        ],
    },
    {
        step: "Step 2",
        title: "Find an Advisor & Members",
        points: [
            "Find an advisor who is a member of the faculty or staff.",
            "Advisor should be interested in and willing to support your club's mission, meetings and activities.",
            "Identify two (2) primary student contacts, and at least 7 participants.",
        ],
    },
    {
        step: "Step 3",
        title: "Submit Application",
        points: [
            "Review, complete and submit the application to the Director of the student welfare committee.",
        ],
    },
];

export default function ClubsPage() {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero */}
            <div
                className="relative h-64 md:h-80 flex items-center justify-center"
                style={{
                    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                }}
            >
                <div className="text-center text-white z-10 px-4">
                    <p className="text-yellow-400 uppercase tracking-widest text-sm mb-2 font-semibold">
                        Life At NGF
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">Clubs & Societies</h1>
                    <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base">
                        Explore your passion — join a club, build skills, and be part of something bigger
                    </p>
                </div>
                <div className="absolute top-6 left-10 w-24 h-24 rounded-full border border-yellow-400 opacity-10" />
                <div className="absolute bottom-6 right-10 w-40 h-40 rounded-full border border-white opacity-5" />
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">

                {/* Clubs Grid */}
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">Our Clubs</h2>
                    <p className="text-gray-500 mb-8">Click on any club to read more about it</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                    {clubs.map((club) => (
                        <div
                            key={club.id}
                            onClick={() => setSelected(selected === club.id ? null : club.id)}
                            className={`cursor-pointer rounded-2xl border-2 p-5 transition-all duration-200 ${club.color} ${selected === club.id
                                    ? "shadow-lg scale-[1.02] ring-2 ring-gray-800"
                                    : "hover:shadow-md hover:scale-[1.01]"
                                }`}
                        >
                            {/* Icon & Tag */}
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${club.iconBg}`}>
                                    {club.icon}
                                </div>
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${club.tagColor}`}>
                                    {club.tag}
                                </span>
                            </div>

                            {/* Name */}
                            <h3 className="text-base font-bold text-gray-800 mb-2">{club.name}</h3>

                            {/* Description — always visible but truncated, expands on click */}
                            <p
                                className={`text-sm text-gray-600 leading-relaxed transition-all ${selected === club.id ? "" : "line-clamp-3"
                                    }`}
                            >
                                {club.description}
                            </p>

                            {selected !== club.id && (
                                <button className="mt-3 text-xs font-semibold text-gray-500 hover:text-gray-800 underline underline-offset-2">
                                    Read more
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Start a New Club Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div
                        className="px-8 py-6"
                        style={{
                            background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
                        }}
                    >
                        <h2 className="text-white text-2xl font-bold mb-1">Start a New Club</h2>
                        <p className="text-gray-300 text-sm">
                            Have a unique idea? Any NGFCET student can create a new recognised club by following these steps.
                        </p>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {steps.map((s, i) => (
                                <div key={i} className="relative">
                                    {/* Connector line */}
                                    {i < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-6 left-full w-6 h-0.5 bg-gray-200 z-10" />
                                    )}
                                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 h-full">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <p className="text-xs text-yellow-600 font-semibold uppercase tracking-wide">
                                                    {s.step}
                                                </p>
                                                <p className="text-sm font-bold text-gray-800">{s.title}</p>
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {s.points.map((point, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <span className="text-yellow-500 mt-0.5 flex-shrink-0">•</span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}