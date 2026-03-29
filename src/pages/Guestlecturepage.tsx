import React, { useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useInView,
    useSpring,
} from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const sessions = {
    "2020-21": [
        { sno: 1, date: "16/02/2021", name: "Motivational talk by Mr. Tarun Sharma", batch: "Degree College & BB-1st Year & MBA-1st Year", students: 65 },
        { sno: 2, date: "23/02/2021", name: "Career Counselling by Mr. Manish Kumar & Inderjeet Singh (KVCH)", batch: "B.Tech 1st Year", students: 60 },
        { sno: 3, date: "23/02/2021", name: "Career Counselling by Mr. Manish Kumar & Inderjeet Singh (KVCH)", batch: "All DMS Students", students: 62 },
        { sno: 4, date: "24/02/2021", name: "Cyber Security by Mr. Naveen (SSDN Technologies, Gurugram)", batch: "B.Tech 1st Year", students: 60 },
        { sno: 5, date: "24/02/2021", name: "Digital Marketing by Mr. Amrish Kumar (SSDN Technologies, Gurugram)", batch: "All DMS Students", students: 12 },
        { sno: 6, date: "26/02/2021", name: "Motivational Talk by Mr. Tarun Sharma", batch: "B.Tech 1st Year", students: 69 },
        { sno: 7, date: "26/02/2021", name: "Session on Financial Awareness by Mr. Harvinder & Ratnesh (NCDEX, New Delhi)", batch: "B.Tech 3rd Year", students: 40 },
        { sno: 8, date: "03/02/2021", name: "Session on Financial Awareness by Mr. Harvinder & Ratnesh (NCDEX, New Delhi)", batch: "All DMS Students", students: 72 },
        { sno: 9, date: "03/08/2021", name: "How to Ace Your Summer Internship by Mr. O.P. Bhardwaj (Internshala)", batch: "B.Tech 2nd & 3rd Year", students: 37 },
        { sno: 10, date: "03/09/2021", name: "Workshop on Industrial Mechanical Systems by Mr. Avesh Bhatnagar (Sofcon India)", batch: "ME 2nd & 3rd Year", students: 15 },
        { sno: 11, date: "03/09/2021", name: "Workshop on Industrial Automation by Mr. Aakash (Sofcon India)", batch: "EE 2nd & 3rd Year", students: 8 },
        { sno: 12, date: "03/09/2021", name: "Workshop on Embedded Systems by Mr. Rahul Patel (Sofcon India)", batch: "ECE 2nd & 3rd Year", students: 8 },
        { sno: 13, date: "03/09/2021", name: "Workshop on Civil Design & Drawings by Mr. Gaurav (Sofcon India)", batch: "Civil 2nd & 3rd Year", students: 13 },
    ],
    "2019-20": [
        { sno: 1, date: "01/08/2019", name: "Pre Placement Talk by Dr. Manpreet Kaur", batch: "ME", students: 15 },
        { sno: 2, date: "06/08/2019", name: "Pre Placement Talk by Dr. Manpreet Kaur", batch: "ME, MBA, EE, CSE, ECE, Civil", students: 32 },
        { sno: 3, date: "14/08/2019", name: "Udyami Shivir by Mr. Mukesh Sharma CA", batch: "All Students", students: 32 },
        { sno: 4, date: "11/09/2019", name: "Preparing for Placements by Sandeep Singh (Luneblaze)", batch: "Management Students", students: null },
        { sno: 5, date: "16–19/09/2019", name: "Connect with Work by Mr. Raviender Pal Singh (Rubicon)", batch: "B.Tech Final Year & MBA 2nd Year", students: 67 },
        { sno: 6, date: "17/09/2019", name: "Zee TV Star Ms. Seema Gumber (Dillidarling Show)", batch: "B.Tech 1st, MBA & BBA 1st Year", students: 126 },
        { sno: 7, date: "19/09/2019", name: "Internship cum Placement Drive by Mr. Manish (KVCH)", batch: "CSE & ECE 4th Year", students: 36 },
        { sno: 8, date: "24/09/2019", name: "Cancer Awareness Session by Dr. Rennie Noel Mohapatra", batch: "Staff Members", students: null },
        { sno: 9, date: "26/09/2019", name: "Internet of Things with Arduino by Mr. Ritesh Kumar (Aptron)", batch: "All Students", students: null },
        { sno: 10, date: "04/10/2019", name: "Preparing for Placements by Sandeep Singh (Luneblaze)", batch: "B.Tech Final Year & MBA 2nd Year", students: 97 },
        { sno: 11, date: "09–11/10/2019", name: "NSTEDB Entrepreneurship Awareness Camp (3 Days) — Govt. of India", batch: "Engineering Final Year", students: 74 },
        { sno: 12, date: "08/11/2019", name: "Screening Test for Placement by Mr. Sandeep Singh (Luneblaze)", batch: "B.Tech Final Year & MBA 2nd Year", students: 92 },
        { sno: 13, date: "15/11/2019", name: "Safalta Apni Mein (Dainik Jagran)", batch: "B.Tech 3rd & 4th Year, BBA & MBA Final Year", students: 120 },
        { sno: 14, date: "07/02/2020", name: "Compensation & Benefits by Mr. Anil Das", batch: "BBA 1st & MBA 1st, 2nd Year", students: 32 },
        { sno: 15, date: "11–14/02/2020", name: "Connect with Work by Mr. Chander Bajaj", batch: "B.Tech 3rd Year", students: 65 },
        { sno: 16, date: "19/02/2020", name: "Future of AI: Career Prospects by Mr. Gauri Shankar Rai (Digital School Delhi)", batch: "B.Tech 3rd Year CSE, ECE & MBA", students: 43 },
        { sno: 17, date: "26/02/2020", name: "Career Counseling Session by Mr. Sahadab Khan", batch: "B.Tech 1st Year", students: 65 },
        { sno: 18, date: "26/02/2020", name: "Reshaping Business with Cloud Computing by Mr. Sahadab Khan (Training Basket)", batch: "BBA 1st & MBA 1st Year", students: 36 },
        { sno: 19, date: "27/02/2020", name: "Research Methodology by Mr. Asutosh (YMCA)", batch: "BBA 1st & MBA 1st Year", students: 32 },
    ],
    "2018-19": [
        { sno: 1, date: "29/08/2018", name: "Quiz Contest by Mr. Abhishek Sindhu (Career Launcher)", batch: "CSE 2nd & 3rd Year", students: 36 },
        { sno: 2, date: "29/08/2018", name: "Quiz Contest by Mr. Abhishek Sindhu (Career Launcher)", batch: "ME 2nd & 3rd Year", students: 33 },
        { sno: 3, date: "29/08/2018", name: "Quiz Contest by Mr. Abhishek Sindhu (Career Launcher)", batch: "F&A 2nd & 3rd Year", students: 11 },
        { sno: 4, date: "29/08/2018", name: "Quiz Contest by Mr. Abhishek Sindhu (Career Launcher)", batch: "2nd & 3rd Year", students: 28 },
        { sno: 5, date: "29/08/2018", name: "Quiz Contest by Mr. Abhishek Sindhu (Career Launcher)", batch: "EE 2nd & 3rd Year", students: 16 },
        { sno: 6, date: "29/08/2018", name: "Quiz Contest by Mr. Abhishek Sindhu (Career Launcher)", batch: "ECE 2nd & 3rd Year", students: 38 },
        { sno: 7, date: "30/08/2018", name: "Affiliate Marketing by Ms. Ritu (Digital School Delhi)", batch: "All DMS Students", students: 92 },
        { sno: 8, date: "30/08/2018", name: "Block-Chain by Mr. Sahadab Khan (Training Basket)", batch: "CSE 3rd & 4th Year", students: 52 },
        { sno: 9, date: "11/09/2018", name: "GST by Mr. Kapil Jain CA", batch: "All BBA & MBA 1st Year", students: 93 },
        { sno: 10, date: "11/09/2018", name: "Resume Writing Workshop by Mr. Saurav", batch: "CSE, ME, Civil, EE, ECE & MBA Final Year", students: 63 },
        { sno: 11, date: "18/09/2018", name: "Udyami Shivir by Mr. Mukesh Kumar CA", batch: "B.Tech Final Year", students: 94 },
        { sno: 12, date: "20/09/2018", name: "One Day Entrepreneurship Awareness Camp by Mr. Mukesh Kumar CA", batch: "MBA 1st Year", students: 12 },
        { sno: 13, date: "20/09/2018", name: "One Day Entrepreneurship Awareness Camp by Mr. Mukesh Kumar CA", batch: "BBA 1st, 2nd & 3rd Year", students: 30 },
        { sno: 14, date: "20/09/2018", name: "Excellence — Way to Live Life by Dr. Manpreet Kaur", batch: "B.Tech Final & MBA Final Year", students: 52 },
        { sno: 15, date: "20/09/2018", name: "Interview Preparation Workshop by Dr. Animesh Singh (NGFCET)", batch: "B.Tech Final & MBA Final Year", students: 52 },
        { sno: 16, date: "24/09/2018", name: "Body Language by Mr. Dinesh Sharma (Image Group)", batch: "B.Tech Final & MBA Final Year", students: 50 },
        { sno: 17, date: "24/09/2018", name: "Grooming & Etiquettes by Mr. Dinesh Sharma (Image Group)", batch: "B.Tech Final & MBA Final Year", students: 50 },
        { sno: 18, date: "28/09/2018", name: "Group Discussion by Ms. Sonam B Saluja", batch: "B.Tech Final & MBA Final Year", students: 50 },
        { sno: 19, date: "29/09/2018", name: "Group Discussion by Ms. Sonam B Saluja", batch: "B.Tech Final & MBA Final Year", students: 21 },
        { sno: 20, date: "15/10/2018", name: "English Speaking by Mr. Neeraj", batch: "BBA & MBA 1st Year", students: 38 },
        { sno: 21, date: "23/10/2018", name: "Indo-Japan Training Program by Mr. A.R. Yadav", batch: "B.Tech 4th Year & MBA 2nd Year", students: 95 },
        { sno: 22, date: "31/10/2018", name: "Mock Interview by Ms. Neelam (Concentrix)", batch: "B.Tech 4th Year & MBA Final", students: 35 },
        { sno: 23, date: "14/11/2018", name: "Mock Interview by Ms. Neelam (Concentrix)", batch: "B.Tech 4th Year & MBA Final", students: 22 },
        { sno: 24, date: "16/11/2018", name: "Goal Setting & Life Design by Mr. Sourabh Goyal", batch: "B.Tech 1st Year & MBA 1st Year", students: 62 },
        { sno: 25, date: "16/01/2019", name: "Udyami Shivir by Mr. Mukesh Kumar CA", batch: "All Students", students: 30 },
        { sno: 26, date: "06/02/2019", name: "Overview of Emerging Technologies by Mr. Vishal Jain", batch: "B.Tech CSE, ECE & EE 2nd & 3rd Year", students: 68 },
        { sno: 27, date: "12/02/2019", name: "Financial Literacy Program by Ms. Divya (BSE)", batch: "MBA 1st & 2nd & BBA 3rd Year", students: 36 },
        { sno: 28, date: "26/02/2019", name: "Video Profile by Mr. Dinesh Sharma (Image Group)", batch: "B.Tech 3rd Year & MBA 1st & 2nd Year", students: 87 },
        { sno: 29, date: "05/03/2019", name: "Android App Development by Mr. Nitish Kumar (Swaryantra Technologies)", batch: "CSE 3rd Year", students: 19 },
        { sno: 30, date: "10/03/2019", name: "Startup Training by Iamsmeof India (YMCA, Faridabad)", batch: "MBA 1st Year", students: 6 },
        { sno: 31, date: "27/03/2019", name: "Quality Control & ISO by Mr. Dinesh Sharma (Image Group)", batch: "MBA 1st & 2nd & BBA 3rd Year", students: 32 },
        { sno: 32, date: "27/03/2019", name: "Quality Control & ISO by Mr. Dinesh Sharma (Image Group)", batch: "ME 3rd Year", students: 25 },
        { sno: 33, date: "27/03/2019", name: "Employability by Mr. Atanu Motilal (Mychatri)", batch: "B.Tech 1st Year & BBA 1st Year", students: 75 },
        { sno: 34, date: "28/03/2019", name: "Combating Self Proclaimed Inhibitions by Ms. Bhawna (DAVIM Faridabad)", batch: "B.Tech 3rd & BBA 2nd Year", students: 46 },
        { sno: 35, date: "01/04/2019", name: "Ideation by Mr. Yogender Pal", batch: "MBA 1st, ME 3rd & BBA 2nd Year", students: 42 },
        { sno: 36, date: "02/04/2019", name: "Cyber Security by Mr. Imam Khan", batch: "BBA 2nd & MBA 1st & 2nd Year", students: 43 },
        { sno: 37, date: "04/04/2019", name: "Business Plan by Mr. R.K. Gupta (Ex Banker)", batch: "MBA 1st, ME 3rd & BBA 2nd Year", students: 40 },
        { sno: 38, date: "05/04/2019", name: "Highway by Mr. B.R. Chauhan (CIDC)", batch: "Civil 2nd & 3rd Year", students: 23 },
        { sno: 39, date: "30/03/2019", name: "FDP: Stress Management by Meditation", batch: "Faculty Development Programme", students: 65 },
    ],
};

const yearKeys = Object.keys(sessions) as (keyof typeof sessions)[];

const totalSessions = yearKeys.reduce((acc, y) => acc + sessions[y].length, 0);
const totalStudents = yearKeys.reduce(
    (acc, y) => acc + sessions[y].reduce((a, s) => a + (s.students ?? 0), 0),
    0
);

// ─── Helpers ─────────────────────────────────────────────────────────────────

const FadeUp = ({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};

const StatCard = ({
    value,
    label,
    delay,
}: {
    value: string;
    label: string;
    delay: number;
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 600 }}
            whileHover={{ scale: 1.04, rotateY: 3 }}
        >
            <p className="text-3xl font-bold text-yellow-500">{value}</p>
            <p className="text-sm text-gray-500 mt-1">{label}</p>
        </motion.div>
    );
};

// ─── Main Page ───────────────────────────────────────────────────────────────

const GuestLecturePage = () => {
    const [activeYear, setActiveYear] = useState<keyof typeof sessions>("2020-21");

    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
    const smoothY = useSpring(heroY, { stiffness: 80, damping: 20 });

    const tableRef = useRef(null);
    const tableInView = useInView(tableRef, { once: true, margin: "-40px" });

    const currentData = sessions[activeYear];

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">

            {/* ── 3D Hero ──────────────────────────────────────────────────── */}
            <div ref={heroRef} className="relative py-24 px-4 overflow-hidden">

                {/* Animated blobs */}
                <motion.div
                    className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-yellow-200/25 blur-3xl"
                    animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-16 right-0 w-72 h-72 rounded-full bg-gray-300/20 blur-3xl"
                    animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div
                    style={{ y: smoothY, opacity: heroOpacity, scale: heroScale }}
                    className="relative z-10 text-center max-w-3xl mx-auto"
                >
                    {/* Badge */}
                    <motion.p
                        className="text-yellow-600 font-semibold text-sm uppercase tracking-widest mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Training & Placement
                    </motion.p>

                    {/* 3D flip title — line 1 */}
                    <div className="overflow-hidden mb-1">
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold text-gray-900"
                            initial={{ rotateX: 90, opacity: 0, y: 50 }}
                            animate={{ rotateX: 0, opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            style={{ transformStyle: "preserve-3d", perspective: 700 }}
                        >
                            Guest
                        </motion.h1>
                    </div>

                    {/* 3D flip title — line 2 */}
                    <div className="overflow-hidden mb-6">
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold text-yellow-500"
                            initial={{ rotateX: 90, opacity: 0, y: 50 }}
                            animate={{ rotateX: 0, opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            style={{ transformStyle: "preserve-3d", perspective: 700 }}
                        >
                            Lectures
                        </motion.h1>
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        Guest lectures, seminars by corporate heads and workshops are regular features at
                        NGFCET — organized for better exposure, to be abreast with industry demands and
                        to promote employability among students.
                    </motion.p>

                    {/* Floating cards preview */}
                    <div className="mt-10 flex justify-center gap-3 flex-wrap">
                        {["Motivational", "Cyber Security", "AI & Tech", "Entrepreneurship", "Career Guidance"].map(
                            (tag, i) => (
                                <motion.span
                                    key={tag}
                                    className="bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full shadow-sm"
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                                    whileHover={{ scale: 1.08, y: -2 }}
                                >
                                    {tag}
                                </motion.span>
                            )
                        )}
                    </div>

                    {/* Scroll hint */}
                    <motion.div
                        className="mt-10 flex flex-col items-center gap-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
                        <motion.div
                            className="w-0.5 h-8 bg-yellow-400 rounded-full"
                            animate={{ scaleY: [1, 0.3, 1] }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* ── Stats ────────────────────────────────────────────────────── */}
            <div className="max-w-3xl mx-auto px-4 mb-14 grid grid-cols-3 gap-4">
                <StatCard value={`${totalSessions}+`} label="Total Sessions" delay={0} />
                <StatCard value={`${totalStudents}+`} label="Students Reached" delay={0.1} />
                <StatCard value="3+" label="Academic Years" delay={0.2} />
            </div>

            {/* ── Dark Banner ───────────────────────────────────────────────── */}
            <div className="px-4 mb-14 max-w-4xl mx-auto">
                <FadeUp>
                    <motion.div
                        className="bg-gray-900 rounded-2xl p-8 md:p-10 relative overflow-hidden"
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 180 }}
                    >
                        <motion.div
                            className="absolute top-0 left-0 w-1.5 h-full bg-yellow-500 rounded-l-2xl"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            style={{ originY: 0 }}
                        />
                        <motion.div
                            className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-400/10 rounded-full"
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ duration: 6, repeat: Infinity }}
                        />
                        <div className="relative z-10">
                            <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">
                                Our Objective
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Expert Insights for{" "}
                                <span className="text-yellow-400">Industry Readiness</span>
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                                The insight of any subject from a different perspective — the view of an
                                industry expert — increases the knowledge and understanding of students,
                                bridging the gap between academia and real-world expectations.
                            </p>
                        </div>
                    </motion.div>
                </FadeUp>
            </div>

            {/* ── Sessions Table ────────────────────────────────────────────── */}
            <div className="max-w-6xl mx-auto px-4 pb-16">
                <FadeUp>
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                        Industry Visits Organised for Students
                    </h2>
                    <p className="text-gray-400 text-sm text-center mb-8">
                        NGF College of Engineering & Technology, Palwal
                    </p>
                </FadeUp>

                {/* Year tabs */}
                <FadeUp delay={0.1}>
                    <div className="flex gap-2 mb-6 flex-wrap">
                        {yearKeys.map((y) => (
                            <motion.button
                                key={y}
                                onClick={() => setActiveYear(y)}
                                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${activeYear === y
                                    ? "bg-yellow-500 text-yellow-900 border-yellow-500"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-yellow-400"
                                    }`}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Session {y}
                            </motion.button>
                        ))}
                    </div>
                </FadeUp>

                {/* Table */}
                <motion.div
                    ref={tableRef}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    animate={tableInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm" style={{ tableLayout: "fixed" }}>
                            <colgroup>
                                <col style={{ width: "52px" }} />
                                <col style={{ width: "120px" }} />
                                <col style={{ width: "auto" }} />
                                <col style={{ width: "180px" }} />
                                <col style={{ width: "90px" }} />
                            </colgroup>
                            <thead>
                                <tr className="bg-gray-900 text-white">
                                    <th className="text-left px-4 py-3.5 font-medium">S.No.</th>
                                    <th className="text-left px-4 py-3.5 font-medium">Date</th>
                                    <th className="text-left px-4 py-3.5 font-medium">Session / Workshop</th>
                                    <th className="text-left px-4 py-3.5 font-medium">Batch / Year</th>
                                    <th className="text-left px-4 py-3.5 font-medium">Students</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentData.map((row, index) => (
                                    <motion.tr
                                        key={`${activeYear}-${row.sno}`}
                                        className={`border-t border-gray-100 hover:bg-yellow-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                                            }`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.03 }}
                                    >
                                        <td className="px-4 py-3 text-gray-400 font-medium">{row.sno}</td>
                                        <td className="px-4 py-3 text-gray-500 text-xs">{row.date}</td>
                                        <td className="px-4 py-3 text-gray-900 font-medium leading-snug">{row.name}</td>
                                        <td className="px-4 py-3 text-gray-500 text-xs leading-snug">{row.batch}</td>
                                        <td className="px-4 py-3">
                                            {row.students ? (
                                                <span className="inline-block bg-yellow-50 text-yellow-800 border border-yellow-200 text-xs font-medium px-2.5 py-1 rounded-full">
                                                    {row.students}
                                                </span>
                                            ) : (
                                                <span className="text-gray-300 text-xs">—</span>
                                            )}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                            Showing {currentData.length} sessions for {activeYear}
                        </span>
                        <span className="text-xs text-gray-400">
                            Total students:{" "}
                            <span className="font-medium text-yellow-600">
                                {currentData.reduce((a, s) => a + (s.students ?? 0), 0)}
                            </span>
                        </span>
                    </div>
                </motion.div>
            </div>

        </div>
    );
};

export default GuestLecturePage;