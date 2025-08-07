import { betterAuth } from "better-auth";
import { emailOTP } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/db/prisma";
import { env } from "@/lib/env";
import { resend } from "@/lib/resend";
import EmailTemplate from "@/modules/components/auth/email-template";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
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
          subject: "Videomart - Verify your email",
          html: `<p>Your OTP is <strong>${otp}</strong></p>`,
          // react: EmailTemplate({ firstName: "Nata", otp: otp }),
        });
      },
    }),
  ],
});
