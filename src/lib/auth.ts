import { prisma } from "@/db/prisma";
import { betterAuth } from "better-auth";
import { emailOTP } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { env } from "@/lib/env";
import { resend } from "@/lib/resend";
import EmailOTP from "@/components/shared/email-otp";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp }) {
        await resend.emails.send({
          from: "Videomart <onboarding@resend.dev>",
          to: [email],
          subject: "Your access code",
          html: `<p>Your OPT is <strong>${otp}</strong></p>`,
          // react: EmailOTP({ code: otp }),
        });
      },
    }),
  ],
});
