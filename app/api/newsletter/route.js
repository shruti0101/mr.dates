import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return Response.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Newsletter" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      cc: [
        "customercare@mrdates.in",
        
      ],

      subject: "New Newsletter Subscriber",

      html: `
        <div style="font-family:sans-serif;padding:20px">
          <h2>New Subscriber 🎉</h2>
          <p><strong>Email:</strong> ${email}</p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Subscribed successfully",
    });

  } catch (error) {
    console.log(error);

    return Response.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}