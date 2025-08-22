"use client";

import { ChangeEvent, useState, useTransition } from "react";
import { routes } from "@/config/routes";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import LoginForm from "@/modules/components/auth/login-form";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [isGithubPending, startGithubTransition] = useTransition();
  const [isGooglePending, startGoogleTransition] = useTransition();
  const [isEmailPending, startEmailTransition] = useTransition();
  const [email, setEmail] = useState("");
  const { signIn } = authClient;
  const router = useRouter();

  /* //INFO: SIGN IN WITH GITHUB */
  const signInWithGithub = () => {
    startGithubTransition(async () => {
      await signIn.social({
        provider: "github",
        callbackURL: routes.home,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed in with Github, you will be redirected...");
          },
          onError: (err) => {
            toast.error(`Error signing in: ${err?.error.message}`);
          },
        },
      });
    });
  };
  /* //INFO: SIGN IN WITH GITHUB */
  const signInWithGoogle = () => {
    startGoogleTransition(async () => {
      await signIn.social({
        provider: "google",
        callbackURL: routes.home,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed in with Google, you will be redirected...");
          },
          onError: (err) => {
            toast.error(`Error signing in: ${err?.error.message}`);
          },
        },
      });
    });
  };

  const handleEmailOTP = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  /* //INFO: SIGN IN WITH EMAIL OTP */
  const signInWithEmail = () => {
    startEmailTransition(async () => {
      await authClient.emailOtp.sendVerificationOtp({
        email: email,
        type: "sign-in",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Email sent!");
            router.push(`${routes.verifyRequest}?email=${email}`);
          },
          onError: () => {
            toast.error("Error sending email");
          },
        },
      });
    });
  };

  return (
    <LoginForm
      signInWithGithub={signInWithGithub}
      signInWithGoogle={signInWithGoogle}
      signInWithEmail={signInWithEmail}
      isGithubPending={isGithubPending}
      isGooglePending={isGooglePending}
      email={email}
      handleEmailOTP={handleEmailOTP}
      isEmailPending={isEmailPending}
    />
  );
};

export default LoginPage;
