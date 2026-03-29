import Layout from "@/components/Layout";
import SubPageLayout from "@/components/SubPageLayout";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const courses = [
  "B.Tech",
  "M.Tech",
  "BBA",
  "MBA",
  "BCA",
  "MCA",
];

const branchMap: Record<string, string[]> = {
  "B.Tech": [
    "Computer Science Engineering",
    "CSE - AI & ML",
    "CSE - Cyber Security",
    "Electronics & Communication Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Fashion & Apparel Engineering",
  ],
  "M.Tech": ["Computer Science Engineering"],
  "BBA": ["BBA General", "BBA Digital Marketing"],
  "MBA": ["MBA Dual Specialisation"],
  "BCA": ["BCA General", "BCA Data Science"],
  "MCA": ["Master of Computer Applications"],
};

const ApplyNowPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    course: "",
    branch: "",
    agreed: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const branches = form.course ? branchMap[form.course] || [] : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.mobile || !form.email || !form.course || !form.branch) {
      toast.error("Please fill all fields");
      return;
    }
    if (!/^\d{10}$/.test(form.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("admission_applications").insert({
        full_name: form.fullName,
        mobile: form.mobile,
        email: form.email,
        course: form.course,
        branch: form.branch,
        agreed_to_communications: form.agreed,
      });

      if (error) throw error;

      // Send notification email
      await supabase.functions.invoke("send-admission-email", {
        body: {
          fullName: form.fullName,
          mobile: form.mobile,
          email: form.email,
          course: form.course,
          branch: form.branch,
        },
      });

      setSubmitted(true);
      toast.success("Application submitted successfully!");
    } catch (err: any) {
      toast.error("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <SubPageLayout title="Application Submitted" subtitle="Thank you for applying to NGF College">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <CheckCircle2 className="mx-auto text-green-500 mb-6" size={64} />
            <h2 className="text-2xl font-display font-medium mb-4">Thank You!</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Your application has been received. Our admissions team will contact you shortly at {form.email} or {form.mobile}.
            </p>
          </motion.div>
        </SubPageLayout>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
          {/* Left - Image */}
          <div className="hidden lg:block relative">
            <img
              src={heroBg}
              alt="NGF College Campus"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>

          {/* Right - Form */}
          <div className="flex items-center justify-center p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
                Admissions Open 2025-26
              </h1>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  maxLength={100}
                />

                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5 border border-border rounded-lg px-3 py-3 bg-background text-sm shrink-0">
                    <span>🇮🇳</span>
                    <span className="text-muted-foreground">+91</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Enter Email Id"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  maxLength={255}
                />

                <select
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value, branch: "" })}
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                >
                  <option value="">Select Course</option>
                  {courses.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>

                <select
                  value={form.branch}
                  onChange={(e) => setForm({ ...form, branch: e.target.value })}
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  disabled={!form.course}
                >
                  <option value="">Select Branch</option>
                  {branches.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>

                <label className="flex items-start gap-3 text-xs text-muted-foreground cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.agreed}
                    onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                    className="mt-0.5 accent-primary"
                  />
                  I agree to receive information regarding my submitted application by signing up with NGF College via Email, SMS and WhatsApp.
                </label>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="/admissions"
                    className="text-primary font-bold text-sm uppercase tracking-wide hover:underline"
                  >
                    Already Registered?
                  </a>
                  <button
                    type="submit"
                    disabled={loading}
                    className="ml-auto bg-destructive text-destructive-foreground px-8 py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-destructive/90 transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    {loading && <Loader2 className="animate-spin" size={16} />}
                    Register Now
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApplyNowPage;
