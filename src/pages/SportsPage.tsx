import { useState } from "react";

const facilities = [
    { icon: "⚽", name: "Football Ground" },
    { icon: "🏀", name: "Basketball Court" },
    { icon: "🏐", name: "Volleyball Court" },
    { icon: "🏸", name: "Badminton Court" },
    { icon: "🎾", name: "Tennis Court" },
    { icon: "🏏", name: "Cricket Pitch" },
    { icon: "🏋️", name: "Multi Gym" },
    { icon: "♟️", name: "Indoor Games (Chess, Carrom, TT)" },
];

const sportsCouncil = [
    { sno: 1, name: "Mr Jitender Tewatia", designation: "Sports Convenor" },
    { sno: 2, name: "Mr Hoshiyar Singh", designation: "Fitness Coach" },
    { sno: 3, name: "Mr Arvind Chauhan", designation: "Sports Incharge" },
    { sno: 4, name: "Mr Raj Singh", designation: "Sports Incharge" },
];

const teams = {
    Football: [
        { sno: 1, name: "Jojo Alex", branch: "M.E", year: "2nd year" },
        { sno: 2, name: "Shem Debkarma", branch: "M.E", year: "4th year" },
        { sno: 3, name: "Jakula Debkarma", branch: "E.C.E", year: "3rd year" },
        { sno: 4, name: "Kanistha Gautam", branch: "M.E", year: "3rd year" },
        { sno: 5, name: "Denimil Suchiang", branch: "Civil", year: "1st year" },
        { sno: 6, name: "Aaqib Rehman", branch: "E.C.E", year: "1st year" },
        { sno: 7, name: "Kamal Pushkar", branch: "M.E", year: "2nd year" },
        { sno: 8, name: "Binjen", branch: "Civil", year: "1st year" },
        { sno: 9, name: "Billo Dalo", branch: "Civil", year: "1st year" },
        { sno: 10, name: "Yasir Beigh", branch: "M.E", year: "2nd year" },
        { sno: 11, name: "Bishnu Sharma", branch: "Civil", year: "1st year" },
        { sno: 12, name: "Akhilesh Purle", branch: "E.E.E", year: "3rd year" },
    ],
    Basketball: [
        { sno: 1, name: "Kanishtha Gautam", branch: "M.E", year: "3rd year" },
        { sno: 2, name: "Ankit Yadav", branch: "M.E", year: "3rd year" },
        { sno: 3, name: "Nitish Sharma", branch: "M.E", year: "3rd year" },
        { sno: 4, name: "Ajay Deshpal", branch: "M.E", year: "1st year" },
        { sno: 5, name: "Anurag Dalal", branch: "Civil", year: "1st year" },
        { sno: 6, name: "Tarun Goyal", branch: "E.C.E", year: "4th year" },
        { sno: 7, name: "Narveer", branch: "E.C.E", year: "4th year" },
        { sno: 8, name: "Kawsar", branch: "E.E", year: "1st year" },
        { sno: 9, name: "Sumit", branch: "Civil", year: "1st year" },
        { sno: 10, name: "Rahul", branch: "M.E", year: "1st year" },
        { sno: 11, name: "Alok", branch: "E.C.E", year: "2nd year" },
        { sno: 12, name: "Rohit Kumar", branch: "E.E", year: "2nd year" },
    ],
    Volleyball: [
        { sno: 1, name: "Narender", branch: "M.E", year: "2nd year" },
        { sno: 2, name: "Devender", branch: "M.E", year: "2nd year" },
        { sno: 3, name: "Narveer", branch: "E.C.E", year: "4th year" },
        { sno: 4, name: "Deepak Kumar", branch: "M.E", year: "3rd year" },
        { sno: 5, name: "Atul Ranjan", branch: "E.C.E", year: "3rd year" },
        { sno: 6, name: "Vikas Dhull", branch: "M.E", year: "1st year" },
        { sno: 7, name: "Rahul", branch: "M.E", year: "1st year" },
        { sno: 8, name: "Kawsar", branch: "E.E", year: "1st year" },
        { sno: 9, name: "Firdous Ahmad", branch: "E.E", year: "1st year" },
        { sno: 10, name: "Sumit", branch: "Civil", year: "1st year" },
        { sno: 11, name: "Amit Giri", branch: "M.E", year: "3rd year" },
        { sno: 12, name: "Manoj", branch: "M.E", year: "3rd year" },
    ],
    Cricket: [
        { sno: 1, name: "Sanjeev", branch: "E.C.E", year: "3rd year" },
        { sno: 2, name: "Ajay Saini", branch: "E.C.E", year: "3rd year" },
        { sno: 3, name: "Paramveer", branch: "E.C.E", year: "2nd year" },
        { sno: 4, name: "Harish", branch: "M.E", year: "2nd year" },
        { sno: 5, name: "Birender", branch: "M.E", year: "2nd year" },
        { sno: 6, name: "Devender Singh", branch: "M.E", year: "2nd year" },
        { sno: 7, name: "Gurpreet", branch: "M.E", year: "2nd year" },
        { sno: 8, name: "Parvesh", branch: "M.E", year: "1st year" },
        { sno: 9, name: "Aamir Khan", branch: "E.E", year: "1st year" },
        { sno: 10, name: "Darshan Lal", branch: "Civil", year: "1st year" },
        { sno: 11, name: "Rinku", branch: "Civil", year: "1st year" },
        { sno: 12, name: "Mubashir Soly", branch: "E.C.E", year: "1st year" },
        { sno: 13, name: "Javed Maqbool", branch: "E.E", year: "1st year" },
        { sno: 14, name: "Rahul", branch: "M.E", year: "1st year" },
        { sno: 15, name: "Ali Mohammad Joo", branch: "E.E", year: "1st year" },
        { sno: 16, name: "Murtaza Rafiq", branch: "E.E", year: "1st year" },
        { sno: 17, name: "Vikas", branch: "M.E", year: "1st year" },
        { sno: 18, name: "Devender Singh", branch: "M.E", year: "2nd year" },
        { sno: 19, name: "Narender", branch: "M.E", year: "2nd year" },
        { sno: 20, name: "Hilal Ahmad Mir", branch: "E.E", year: "1st year" },
    ],
};

const achievements = [
    { sno: 1, name: "Team NGFCET (Cricket)", branch: "NA", achievement: "Winner – D.C.T.M College, Palwal, Inter College (2018-19)\nRunner Up – M.V.N University, Palwal, Inter College (2019-20)" },
    { sno: 2, name: "Team NGFCET (Football)", branch: "NA", achievement: "2nd Position – D.C.T.M Palwal, Inter College (2018-19)" },
    { sno: 3, name: "Team NGFCET (Basketball)", branch: "NA", achievement: "2nd Position – A.I.T.I Palwal, Inter College (2018-19)" },
    { sno: 4, name: "Team NGFCET (Volleyball)", branch: "NA", achievement: "2nd Position – J.B.K.P Faridabad, Inter College (2018-19)" },
    { sno: 5, name: "Team NGFCET (Kabaddi)", branch: "NA", achievement: "Runner Up – Y.M.C.A University, Inter College, Boys & Girls Team (2018-19)" },
    { sno: 6, name: "Team NGFCET (Badminton)", branch: "NA", achievement: "Runner Up – MDU Inter College (2018-19)" },
    { sno: 7, name: "Arun Sharma", branch: "ECE", achievement: "1st Position Weight Lifting – M.D.U (2018-19)\nAll India University Participation – Kalikat (2018-19)\n1st in Power Lifting (2018-19)" },
    { sno: 8, name: "Maninder Sourot, Yash Gupta, Bharat Aggarwal", branch: "ECE", achievement: "1st Position – YMCA University, Archery Tournament, Inter College (2018-19)" },
    { sno: 9, name: "Jaidev Sourot", branch: "MBA", achievement: "1st Position Power Lifting, Inter College (2018-19)" },
    { sno: 10, name: "Rajdev Sharma", branch: "ECE", achievement: "1st Position Power Lifting (2018-19)" },
    { sno: 11, name: "Abhishek", branch: "C.S.E", achievement: "2nd Position Power Lifting (2018-19)" },
    { sno: 12, name: "Narveer", branch: "E.C.E", achievement: "1st Position – Rawal Institute, Inter College (2018-19)\n3rd Position – D.C.T.M Palwal, Inter College (2018-19)" },
];

const teamIcons: Record<string, string> = {
    Football: "⚽",
    Basketball: "🏀",
    Volleyball: "🏐",
    Cricket: "🏏",
};

export default function SportsPage() {
    const [activeTab, setActiveTab] = useState("facilities");
    const [activeTeam, setActiveTeam] = useState("Football");

    const tabs = [
        { id: "facilities", label: "Sports Facilities" },
        { id: "council", label: "Sports Council" },
        { id: "teams", label: "Sports Teams" },
        { id: "achievements", label: "Achievements" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">Sports & Fitness</h1>
                    <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base">
                        World-class sports facilities, passionate teams & outstanding achievements
                    </p>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-6 left-10 w-24 h-24 rounded-full border border-yellow-400 opacity-10" />
                <div className="absolute bottom-6 right-10 w-40 h-40 rounded-full border border-white opacity-5" />
            </div>

            {/* Tab Navigation */}
            <div className="sticky top-0 bg-white shadow-sm z-20 border-b border-gray-200">
                <div className="max-w-6xl mx-auto flex overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${activeTab === tab.id
                                ? "border-yellow-500 text-yellow-600 bg-yellow-50"
                                : "border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-10">

                {/* ── FACILITIES TAB ── */}
                {activeTab === "facilities" && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sports & Fitness Facilities</h2>
                        <p className="text-gray-500 mb-8 max-w-3xl">
                            Our students have the chance to use our world-class sporting and fitness facilities,
                            as well as join our social teams and sports clubs.
                        </p>

                        {/* Facility Cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
                            {facilities.map((f, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-yellow-300 transition-all"
                                >
                                    <div className="text-4xl mb-3">{f.icon}</div>
                                    <p className="text-sm font-semibold text-gray-700">{f.name}</p>
                                </div>
                            ))}
                        </div>

                        {/* Description Box */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                            <h3 className="text-lg font-bold text-gray-800 border-l-4 border-yellow-500 pl-3">
                                About Our Facilities
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                NGFCET has excellent sports & fitness facilities including football, volleyball,
                                badminton, basketball, tennis courts, and cricket pitch for net practice. Indoor games
                                are also available in the hostel — chess, carrom, and table tennis (each floor has a
                                TT board). The college has ample equipment for every indoor & outdoor game: cricket,
                                footballs, basketballs, volleyballs, golf, archery, tennis & badminton rackets, etc.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                A well-equipped <strong>Multi Gym</strong> facility with the latest equipment is
                                available for students. A dedicated fitness coach provides guidance on exercise
                                and proper diet.
                            </p>
                        </div>
                    </div>
                )}

                {/* ── COUNCIL TAB ── */}
                {activeTab === "council" && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sports Council</h2>
                        <p className="text-gray-500 mb-8 max-w-2xl">
                            Members of the Sports Council are responsible for participating in and managing
                            different sports events. The council comprises both Faculty and Student members.
                        </p>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-800 text-white">
                                        <th className="px-6 py-4 text-left font-semibold">S.No.</th>
                                        <th className="px-6 py-4 text-left font-semibold">Name</th>
                                        <th className="px-6 py-4 text-left font-semibold">Designation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sportsCouncil.map((member, i) => (
                                        <tr
                                            key={i}
                                            className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-yellow-50 transition-colors`}
                                        >
                                            <td className="px-6 py-4 text-gray-500">{member.sno}</td>
                                            <td className="px-6 py-4 font-semibold text-gray-800">{member.name}</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                                                    {member.designation}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* ── TEAMS TAB ── */}
                {activeTab === "teams" && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sports Teams</h2>

                        {/* Team Selector */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {Object.keys(teams).map((team) => (
                                <button
                                    key={team}
                                    onClick={() => setActiveTeam(team)}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${activeTeam === team
                                        ? "bg-gray-800 text-white shadow-md"
                                        : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
                                        }`}
                                >
                                    <span>{teamIcons[team]}</span>
                                    {team}
                                </button>
                            ))}
                        </div>

                        {/* Team Table */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-4 flex items-center gap-3">
                                <span className="text-2xl">{teamIcons[activeTeam]}</span>
                                <h3 className="text-white font-bold text-lg">{activeTeam} Team</h3>
                                <span className="ml-auto text-gray-300 text-sm">
                                    {teams[activeTeam as keyof typeof teams].length} Players
                                </span>
                            </div>
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="px-6 py-3 text-left text-gray-500 font-semibold">S.No.</th>
                                        <th className="px-6 py-3 text-left text-gray-500 font-semibold">Name</th>
                                        <th className="px-6 py-3 text-left text-gray-500 font-semibold">Branch</th>
                                        <th className="px-6 py-3 text-left text-gray-500 font-semibold">Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teams[activeTeam as keyof typeof teams].map((player, i) => (
                                        <tr
                                            key={i}
                                            className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-yellow-50 transition-colors`}
                                        >
                                            <td className="px-6 py-3 text-gray-400">{player.sno}</td>
                                            <td className="px-6 py-3 font-medium text-gray-800">{player.name}</td>
                                            <td className="px-6 py-3">
                                                <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                                                    {player.branch}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3 text-gray-500">{player.year}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* ── ACHIEVEMENTS TAB ── */}
                {activeTab === "achievements" && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Achievements</h2>
                        <p className="text-gray-500 mb-8">
                            Our students and teams have made NGFCET proud at various inter-college tournaments.
                        </p>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-800 text-white">
                                        <th className="px-4 py-4 text-left font-semibold">S.No.</th>
                                        <th className="px-4 py-4 text-left font-semibold">Name</th>
                                        <th className="px-4 py-4 text-left font-semibold">Branch</th>
                                        <th className="px-4 py-4 text-left font-semibold">Achievement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {achievements.map((a, i) => (
                                        <tr
                                            key={i}
                                            className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-yellow-50 transition-colors`}
                                        >
                                            <td className="px-4 py-4 text-gray-400">{a.sno}</td>
                                            <td className="px-4 py-4 font-semibold text-gray-800">{a.name}</td>
                                            <td className="px-4 py-4">
                                                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
                                                    {a.branch}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4 text-gray-600 whitespace-pre-line leading-relaxed">
                                                {a.achievement}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}