import { NextResponse } from "next/server";
import EmailOTP from "@/components/shared/email-otp";
import { resend } from "@/lib/resend";

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Videomart <onboarding@resend.dev>",
      to: "ronyortizop@gmail.com",
      subject: "Your access code",
      react: EmailOTP({ code: 1234 }),
    });
    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json(data);
  } catch (err) {
    return Response.json({ error: err }, { status: 500 });
  }
}
