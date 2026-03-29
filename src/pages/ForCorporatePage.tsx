import { useState } from "react";

const facilities = [
    {
        icon: "🏛️",
        title: "AC Auditoriums & Lecture Halls",
        description:
            "Fully equipped with multimedia systems and Wi-Fi for pre-placement talks, aptitude tests, and presentations.",
    },
    {
        icon: "🗣️",
        title: "GD & Interview Rooms",
        description:
            "Dedicated Group Discussion and Personal Interview rooms designed for a professional recruitment experience.",
    },
    {
        icon: "🤝",
        title: "Student Volunteers",
        description:
            "Trained student volunteers available to assist with all arrangements on the day of your campus visit.",
    },
    {
        icon: "💻",
        title: "Online Test Process",
        description:
            "Seamless online testing infrastructure to conduct aptitude and technical assessments efficiently.",
    },
    {
        icon: "🚗",
        title: "Pick-up & Drop",
        description:
            "Complimentary pick-up and drop facility from your preferred destinations for visiting recruiters.",
    },
    {
        icon: "🏨",
        title: "Guest House Stay",
        description:
            "Comfortable accommodation at the NGFCET Guest House for outstation recruiters, subject to availability.",
    },
];

export default function ForCorporatePage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        organization: "",
        industry: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            organization: "",
            industry: "",
            message: "",
        });
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white font-sans">
            {/* ── Hero Banner ── */}
            <section className="relative overflow-hidden py-24 px-6 text-center">
                {/* Decorative gradient blobs */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#c9a227]/10 blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#c9a227]/5 blur-[80px]" />
                </div>

                <p className="relative uppercase tracking-[0.35em] text-[#c9a227] text-xs font-semibold mb-4">
                    Training &amp; Placement Cell · NGFCET
                </p>
                <h1 className="relative text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                    Partner With{" "}
                    <span className="text-[#c9a227]">NGF College</span>
                </h1>
                <p className="relative max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
                    Recruit from one of Delhi's premier engineering institutions. Connect
                    with talented graduates who are industry-ready, ethically grounded,
                    and driven to excel.
                </p>
            </section>

            {/* ── Corporate Recruiters + Enquiry Form ── */}
            <section className="relative px-6 pb-20 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-10 bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">

                    {/* Left — Info */}
                    <div className="p-10 flex flex-col justify-center gap-6 bg-gradient-to-br from-[#c9a227]/10 to-transparent">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-[#c9a227]/15 border border-[#c9a227]/30 rounded-full px-4 py-1 text-[#c9a227] text-xs font-semibold uppercase tracking-widest mb-4">
                                For Recruiters
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Corporate Recruiters</h2>
                            <p className="text-gray-400 leading-relaxed">
                                If you'd like to contact the T&amp;P Cell of NGFCET, kindly
                                fill out the form. Use our information request form to ask us to
                                get in touch with you. Read our{" "}
                                <a
                                    href="#"
                                    className="text-[#c9a227] underline underline-offset-2 hover:text-yellow-300 transition-colors"
                                >
                                    Privacy Policy
                                </a>{" "}
                                for details on how your information may be used.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-[#c9a227]/40 to-transparent" />

                        <div className="space-y-3 text-sm text-gray-300">
                            <div className="flex items-center gap-3">
                                <span className="text-[#c9a227] text-lg">📍</span>
                                <span>NGF College of Engineering & Technology, Faridabad</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[#c9a227] text-lg">✉️</span>
                                <span>placement@ngfcet.ac.in</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[#c9a227] text-lg">📞</span>
                                <span>+91-XXXXXXXXXX</span>
                            </div>
                        </div>
                    </div>

                    {/* Right — Enquiry Form */}
                    <div className="p-10">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            Enquiry Now
                            <span className="ml-2 h-1 w-12 bg-[#c9a227] rounded-full inline-block" />
                        </h3>

                        {submitted ? (
                            <div className="flex flex-col items-center justify-center h-64 text-center gap-4 animate-pulse">
                                <div className="text-5xl">✅</div>
                                <p className="text-[#c9a227] text-lg font-semibold">
                                    Enquiry Submitted!
                                </p>
                                <p className="text-gray-400 text-sm">
                                    We'll get back to you shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        required
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-[#c9a227]/60 focus:bg-white/8 transition-all"
                                    />
                                    <input
                                        required
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-[#c9a227]/60 transition-all"
                                    />
                                </div>

                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-[#c9a227]/60 transition-all"
                                />

                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm select-none">
                                        🇮🇳 +91
                                    </span>
                                    <input
                                        required
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="Mobile Number"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-20 pr-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-[#c9a227]/60 transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        required
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        placeholder="Organization"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-[#c9a227]/60 transition-all"
                                    />
                                    <input
                                        required
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        placeholder="Industry"
                                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-[#c9a227]/60 transition-all"
                                    />
                                </div>

                                <textarea
                                    required
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Your Enquiry / Message"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-[#c9a227]/60 transition-all resize-none"
                                />

                                <button
                                    type="submit"
                                    className="w-full bg-[#c9a227] hover:bg-[#e0b830] text-black font-bold py-3 rounded-lg tracking-wide uppercase text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#c9a227]/30 active:scale-[0.98]"
                                >
                                    Request Callback
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* ── Facilities for Recruiters ── */}
            <section className="px-6 pb-24 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <p className="uppercase tracking-[0.3em] text-[#c9a227] text-xs font-semibold mb-3">
                        What We Offer
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Facilities for Recruiters
                    </h2>
                    <div className="mt-4 mx-auto h-1 w-16 bg-[#c9a227] rounded-full" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilities.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#c9a227]/50 hover:bg-white/8 transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover glow */}
                            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#c9a227]/5" />

                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#c9a227] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {item.description}
                            </p>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-[#c9a227] transition-all duration-500 rounded-full" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}