import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Layout from "@/components/Layout";

const courses = [
    "B.Tech — Computer Science Engineering",
    "B.Tech — CSE (AIML)",
    "B.Tech — CSE (Cyber Security)",
    "B.Tech — Electronics & Communication",
    "B.Tech — Mechanical Engineering",
    "B.Tech — Electrical Engineering",
    "B.Tech — Fashion & Apparel Engineering",
    "M.Tech — Computer Science Engineering",
    "BBA — General",
    "BBA — Digital Marketing",
    "MBA",
    "BCA — General",
    "BCA — Data Science",
    "MCA",
];

const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Other",
];

const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1.5px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.07)",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s, background 0.3s",
};

const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "#f5c518",
    marginBottom: "6px",
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
};

export default function AdmissionsApply() {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({
        from_name: "", from_email: "", phone: "", state: "", course: "",
    });
    const [focused, setFocused] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.from_name || !form.from_email || !form.phone || !form.state || !form.course) return;
        setStatus("sending");
        try {
            await emailjs.send(
                "service_4nhajfi",
                "template_zbfdxxu",
                {
                    from_name: form.from_name,
                    from_email: form.from_email,
                    phone: form.phone,
                    state: form.state,
                    course: form.course,
                },
                "HQ8XL8ufn9_PcnzZA"
            );
            setStatus("success");
            setForm({ from_name: "", from_email: "", phone: "", state: "", course: "" });
        } catch (err) {
            console.error("EmailJS Error:", JSON.stringify(err));
            setStatus("error");
        }

    };

    return (
        <Layout>
            <div
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, #0a0f1e 0%, #0d1b2a 50%, #0a1628 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "60px 20px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Animated background orbs */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            x: [0, 30, -20, 0],
                            y: [0, -40, 20, 0],
                            scale: [1, 1.2, 0.9, 1],
                        }}
                        transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
                        style={{
                            position: "absolute",
                            width: `${180 + i * 60}px`,
                            height: `${180 + i * 60}px`,
                            borderRadius: "50%",
                            background: i % 2 === 0
                                ? "rgba(245,197,24,0.04)"
                                : "rgba(13,27,42,0.6)",
                            left: `${[10, 70, 30, 80, 5][i]}%`,
                            top: `${[20, 60, 80, 10, 50][i]}%`,
                            transform: "translate(-50%,-50%)",
                            pointerEvents: "none",
                        }}
                    />
                ))}

                {/* Floating particles */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={`p${i}`}
                        animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
                        style={{
                            position: "absolute",
                            width: "3px", height: "3px",
                            borderRadius: "50%",
                            background: "#f5c518",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            pointerEvents: "none",
                        }}
                    />
                ))}

                <div style={{ width: "100%", maxWidth: "1100px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", position: "relative", zIndex: 1 }}>

                    {/* Left — Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                display: "inline-block",
                                background: "rgba(245,197,24,0.12)",
                                border: "1px solid rgba(245,197,24,0.3)",
                                color: "#f5c518",
                                fontSize: "11px",
                                fontWeight: 700,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                padding: "6px 14px",
                                borderRadius: "4px",
                                marginBottom: "24px",
                            }}
                        >
                            Admissions Open 2026
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            style={{
                                fontSize: "clamp(32px, 4vw, 52px)",
                                fontWeight: 900,
                                color: "#fff",
                                lineHeight: 1.1,
                                marginBottom: "16px",
                                textTransform: "uppercase",
                            }}
                        >
                            Shape Your<br />
                            <span style={{ color: "#f5c518" }}>Future</span> With<br />
                            NGF CET
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", lineHeight: 1.7, marginBottom: "36px" }}
                        >
                            Join one of Delhi NCR's top engineering colleges. Fill in your details and our admissions team will contact you within 24 hours.
                        </motion.p>

                        {/* Stats */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                            {[
                                { val: "15+", label: "Years Excellence" },
                                { val: "90%+", label: "Placement Rate" },
                                { val: "5000+", label: "Alumni Network" },
                                { val: "50+", label: "Top Recruiters" },
                            ].map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    style={{
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(245,197,24,0.15)",
                                        borderRadius: "12px",
                                        padding: "16px",
                                    }}
                                >
                                    <div style={{ fontSize: "24px", fontWeight: 800, color: "#f5c518" }}>{s.val}</div>
                                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>{s.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — 3D Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 60, rotateX: 15 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        whileHover={{ rotateY: 2, rotateX: -1, scale: 1.01 }}
                        style={{
                            background: "rgba(255,255,255,0.04)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "24px",
                            padding: "40px",
                            boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(245,197,24,0.05)",
                            transformStyle: "preserve-3d",
                            perspective: "1000px",
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    style={{ textAlign: "center", padding: "40px 0" }}
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 0.6 }}
                                        style={{ fontSize: "64px", marginBottom: "16px" }}
                                    >
                                        🎉
                                    </motion.div>
                                    <h2 style={{ color: "#f5c518", fontSize: "24px", fontWeight: 800, marginBottom: "10px" }}>
                                        Application Submitted!
                                    </h2>
                                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.6 }}>
                                        Thank you! Our admissions team will contact you within 24 hours.
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => setStatus("idle")}
                                        style={{
                                            marginTop: "24px",
                                            background: "#f5c518",
                                            color: "#000",
                                            border: "none",
                                            padding: "12px 28px",
                                            borderRadius: "8px",
                                            fontWeight: 700,
                                            fontSize: "14px",
                                            cursor: "pointer",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        Submit Another →
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: 800, marginBottom: "6px" }}>
                                        Admissions Open 2026!
                                    </h2>
                                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", marginBottom: "28px" }}>
                                        Fill in your details — we'll get back to you shortly.
                                    </p>

                                    <form ref={formRef} onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                                        {[
                                            { name: "from_name", label: "Full Name", type: "text", placeholder: "Enter Your Name" },
                                            { name: "from_email", label: "Email Address", type: "email", placeholder: "Enter Your Email" },
                                            { name: "phone", label: "Phone No.", type: "tel", placeholder: "Enter Your Phone No." },
                                        ].map((field) => (
                                            <motion.div
                                                key={field.name}
                                                whileFocus={{ scale: 1.01 }}
                                            >
                                                <label style={labelStyle}>{field.label}</label>
                                                <input
                                                    name={field.name}
                                                    type={field.type}
                                                    placeholder={field.placeholder}
                                                    value={form[field.name as keyof typeof form]}
                                                    onChange={handle}
                                                    onFocus={() => setFocused(field.name)}
                                                    onBlur={() => setFocused(null)}
                                                    required
                                                    style={{
                                                        ...inputStyle,
                                                        borderColor: focused === field.name ? "#f5c518" : "rgba(255,255,255,0.15)",
                                                        background: focused === field.name ? "rgba(245,197,24,0.06)" : "rgba(255,255,255,0.07)",
                                                    }}
                                                />
                                            </motion.div>
                                        ))}

                                        <div>
                                            <label style={labelStyle}>Select State</label>
                                            <select
                                                name="state"
                                                value={form.state}
                                                onChange={handle}
                                                onFocus={() => setFocused("state")}
                                                onBlur={() => setFocused(null)}
                                                required
                                                style={{
                                                    ...inputStyle,
                                                    borderColor: focused === "state" ? "#f5c518" : "rgba(255,255,255,0.15)",
                                                    background: focused === "state" ? "rgba(245,197,24,0.06)" : "#0d1b2a",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <option value="" disabled>Select State</option>
                                                {states.map((s) => <option key={s} value={s} style={{ background: "#0d1b2a" }}>{s}</option>)}
                                            </select>
                                        </div>

                                        <div>
                                            <label style={labelStyle}>Select Course</label>
                                            <select
                                                name="course"
                                                value={form.course}
                                                onChange={handle}
                                                onFocus={() => setFocused("course")}
                                                onBlur={() => setFocused(null)}
                                                required
                                                style={{
                                                    ...inputStyle,
                                                    borderColor: focused === "course" ? "#f5c518" : "rgba(255,255,255,0.15)",
                                                    background: focused === "course" ? "rgba(245,197,24,0.06)" : "#0d1b2a",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <option value="" disabled>Select Course</option>
                                                {courses.map((c) => <option key={c} value={c} style={{ background: "#0d1b2a" }}>{c}</option>)}
                                            </select>
                                        </div>

                                        {status === "error" && (
                                            <p style={{ color: "#ff6b6b", fontSize: "13px", textAlign: "center" }}>
                                                Something went wrong. Please try again.
                                            </p>
                                        )}

                                        <motion.button
                                            type="submit"
                                            disabled={status === "sending"}
                                            whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(245,197,24,0.3)" }}
                                            whileTap={{ scale: 0.97 }}
                                            style={{
                                                background: status === "sending" ? "rgba(245,197,24,0.6)" : "#f5c518",
                                                color: "#000",
                                                border: "none",
                                                padding: "14px",
                                                borderRadius: "8px",
                                                fontWeight: 800,
                                                fontSize: "15px",
                                                cursor: status === "sending" ? "not-allowed" : "pointer",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.08em",
                                                marginTop: "4px",
                                            }}
                                        >
                                            {status === "sending" ? "Sending..." : "APPLY NOW →"}
                                        </motion.button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}