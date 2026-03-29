import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useInView,
    useSpring,
} from "framer-motion";

// ─── Data ───────────────────────────────────────────────────────────────────

const benefits = [
    {
        icon: "🏭",
        title: "Industry Exposure",
        description:
            "Students get real-world exposure to the internal working environment of companies in a secured and guided state.",
    },
    {
        icon: "⚡",
        title: "Live Problem Solving",
        description:
            "Students are exposed to various live problems which they may confront in real situations ahead in their careers.",
    },
    {
        icon: "📚",
        title: "Bridge Theory & Practice",
        description:
            "Students experience the gap between theoretical studies & actual work in a company, and learn to fill that gap with practical knowledge.",
    },
    {
        icon: "🚀",
        title: "Career Readiness",
        description:
            "OJT prepares students to hit the ground running from day one of their professional career with confidence and competence.",
    },
];

const steps = [
    {
        step: "01",
        title: "Selection & Orientation",
        description:
            "Students are selected based on academic performance and interest. An orientation session briefs them about the company, work culture, and expectations.",
        isGold: true,
    },
    {
        step: "02",
        title: "Company Placement",
        description:
            "Students are placed in reputed partner companies where they work alongside experienced professionals on real projects.",
        isGold: false,
    },
    {
        step: "03",
        title: "Hands-on Training",
        description:
            "Students work on live problems and real tasks, experiencing the gap between classroom theory and actual industry practice.",
        isGold: true,
    },
    {
        step: "04",
        title: "Mentorship & Guidance",
        description:
            "A dedicated industry mentor guides the student throughout the training, helping them understand professional workflows.",
        isGold: false,
    },
    {
        step: "05",
        title: "Evaluation & Feedback",
        description:
            "At the end of training, students are evaluated by the company and receive detailed feedback on their performance.",
        isGold: true,
    },
    {
        step: "06",
        title: "Certificate & Report",
        description:
            "Students submit a training report and receive an industry-recognized certificate, adding real value to their profile.",
        isGold: false,
    },
];

// ─── Reusable animated components ───────────────────────────────────────────

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
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 48 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};

const FlipCard = ({
    b,
    delay,
}: {
    b: (typeof benefits)[0];
    delay: number;
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, rotateX: -30, y: 40 }}
            animate={inView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03, rotateY: 3, rotateX: 2 }}
            style={{ transformStyle: "preserve-3d", perspective: 800 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex gap-5 border-l-4 border-l-yellow-500 cursor-default"
        >
            <div className="text-3xl mt-0.5">{b.icon}</div>
            <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
            </div>
        </motion.div>
    );
};

const TimelineStep = ({
    s,
    index,
}: {
    s: (typeof steps)[0];
    index: number;
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const isLeft = index % 2 === 0;

    return (
        <div
            ref={ref}
            className="relative flex flex-col md:flex-row items-center gap-6"
            style={{ flexDirection: isLeft ? undefined : "row-reverse" } as React.CSSProperties}
        >
            {/* Card */}
            <motion.div
                className="w-full md:w-[calc(50%-2.5rem)]"
                initial={{ opacity: 0, x: isLeft ? -60 : 60, rotateY: isLeft ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ perspective: 800 }}
                whileHover={{ scale: 1.02 }}
            >
                <div
                    className={`rounded-xl p-5 shadow-sm border-l-4 ${s.isGold
                        ? "bg-yellow-50 border-yellow-500"
                        : "bg-gray-50 border-gray-800"
                        }`}
                >
                    <h3 className="text-base font-bold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
                </div>
            </motion.div>

            {/* Step circle */}
            <motion.div
                className="relative z-10 flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            >
                <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-white ${s.isGold
                        ? "bg-yellow-500 text-yellow-900"
                        : "bg-gray-800 text-white"
                        }`}
                >
                    {s.step}
                </div>
            </motion.div>

            {/* Spacer */}
            <div className="hidden md:block w-[calc(50%-2.5rem)]" />
        </div>
    );
};

// ─── Main Page ───────────────────────────────────────────────────────────────

const OnTheJobTrainingPage = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    // Parallax transforms for hero
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

    // Smooth spring for scroll
    const smoothY = useSpring(heroY, { stiffness: 80, damping: 20 });

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">

            {/* ── 3D Hero Intro ─────────────────────────────────────────────── */}
            <div ref={heroRef} className="relative py-24 px-4 overflow-hidden">
                {/* Animated background blobs */}
                <motion.div
                    className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-yellow-200/30 blur-3xl"
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-gray-300/20 blur-3xl"
                    animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div
                    style={{ y: smoothY, opacity: heroOpacity, scale: heroScale }}
                    className="relative z-10 text-center"
                >
                    {/* Badge */}
                    <motion.p
                        className="text-yellow-600 font-semibold text-sm uppercase tracking-widest mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Training & Placement
                    </motion.p>

                    {/* 3D title — letters animate in */}
                    <div className="overflow-hidden mb-4">
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                            initial={{ rotateX: 90, opacity: 0, y: 60 }}
                            animate={{ rotateX: 0, opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            style={{ transformStyle: "preserve-3d", perspective: 600 }}
                        >
                            On The Job
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden mb-6">
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold text-yellow-500 leading-tight"
                            initial={{ rotateX: 90, opacity: 0, y: 60 }}
                            animate={{ rotateX: 0, opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            style={{ transformStyle: "preserve-3d", perspective: 600 }}
                        >
                            Training
                        </motion.h1>
                    </div>

                    <motion.p
                        className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        A golden opportunity for students to get industry exposure in a secured state —
                        exposed to live problems and bridging the gap between theory and real-world practice.
                    </motion.p>

                    {/* Scroll hint */}
                    <motion.div
                        className="mt-10 flex flex-col items-center gap-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
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

            {/* ── Dark Hero Banner ───────────────────────────────────────────── */}
            <div className="px-4 mb-16">
                <FadeUp>
                    <motion.div
                        className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 md:p-10 relative overflow-hidden"
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <motion.div
                            className="absolute top-0 left-0 w-1.5 h-full bg-yellow-500 rounded-l-2xl"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            style={{ originY: 0 }}
                        />
                        <motion.div
                            className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/10 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        />
                        <div className="relative z-10">
                            <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">
                                Our Approach
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                                Bridging the Gap Between <br />
                                <span className="text-yellow-400">Theory & Real Work</span>
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                                Students experience the gap between theoretical studies & actual work in a company
                                & finally learn to fill the gap up with their practical knowledge — making them
                                industry-ready from day one.
                            </p>
                        </div>
                    </motion.div>
                </FadeUp>
            </div>

            {/* ── Timeline ──────────────────────────────────────────────────── */}
            <div className="max-w-4xl mx-auto px-4 mb-20">
                <FadeUp>
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                        OJT Process — Step by Step
                    </h2>
                    <p className="text-gray-400 text-sm text-center mb-12">
                        How the On The Job Training program works for every student
                    </p>
                </FadeUp>

                <div className="relative">
                    {/* Vertical line that grows on scroll */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-yellow-400 to-gray-300 hidden md:block"
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    />

                    <div className="space-y-10">
                        {steps.map((s, index) => (
                            <TimelineStep key={s.step} s={s} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Benefits ──────────────────────────────────────────────────── */}
            <div className="max-w-5xl mx-auto px-4 mb-16">
                <FadeUp>
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                        What Students Gain
                    </h2>
                </FadeUp>
                <div className="grid md:grid-cols-2 gap-5">
                    {benefits.map((b, i) => (
                        <FlipCard key={b.title} b={b} delay={i * 0.1} />
                    ))}
                </div>
            </div>

            {/* ── Quote Block ───────────────────────────────────────────────── */}
            <div className="max-w-3xl mx-auto px-4 pb-16">
                <FadeUp>
                    <motion.div
                        className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center"
                        whileHover={{ scale: 1.02, rotateZ: 0.5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.p
                            className="text-4xl mb-4"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            💼
                        </motion.p>
                        <p className="text-gray-700 text-base leading-relaxed italic font-medium">
                            "On The Job Training is not just a program — it is a golden opportunity for every
                            student to step into the real world, face real challenges, and emerge as a true
                            professional."
                        </p>
                        <p className="text-yellow-600 text-sm font-semibold mt-4 uppercase tracking-wide">
                            — NGF College of Engineering & Technology
                        </p>
                    </motion.div>
                </FadeUp>
            </div>

        </div>
    );
};

export default OnTheJobTrainingPage;