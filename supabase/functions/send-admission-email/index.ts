import { corsHeaders } from "../_shared/cors.ts";

const RECEIVING_EMAIL = "tanishchandila2005@gmail.com";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, mobile, email, course, branch } = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #c4963c; padding-bottom: 10px;">
          🎓 New Admission Application
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #555; width: 140px;">Full Name</td>
            <td style="padding: 10px; color: #1a1a2e;">${fullName}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; font-weight: bold; color: #555;">Mobile</td>
            <td style="padding: 10px; color: #1a1a2e;">+91 ${mobile}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #555;">Email</td>
            <td style="padding: 10px; color: #1a1a2e;">${email}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; font-weight: bold; color: #555;">Course</td>
            <td style="padding: 10px; color: #1a1a2e;">${course}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #555;">Branch</td>
            <td style="padding: 10px; color: #1a1a2e;">${branch}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #888; font-size: 12px;">
          This application was submitted from the NGF College website.
        </p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "NGF Admissions <onboarding@resend.dev>",
        to: [RECEIVING_EMAIL],
        subject: `New Application: ${fullName} - ${course} (${branch})`,
        html: htmlBody,
      }),
    });

    const data = await res.json();
    console.log("Email sent:", data);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
