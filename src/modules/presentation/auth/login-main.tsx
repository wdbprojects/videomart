"use client";

import { ChangeEvent, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import LoginForm from "@/modules/components/auth/login-form";
import { toast } from "sonner";
import { routes } from "@/config/routes";

const LoginPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [githubPending, startGithubTransition] = useTransition();
  const [googlePending, startGoogleTransition] = useTransition();
  const [emailPending, startEmailTransition] = useTransition();

  const router = useRouter();

  const signInWithGithub = () => {
    startGithubTransition(async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed in with Github, you will be redirected...");
          },
          onError: (err) => {
            toast.error(`Error signing in: ${err.error.message}`);
          },
        },
      });
    });
  };

  const signInWithGoogle = () => {
    startGoogleTransition(async () => {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed in with Google, you will be redirected...");
          },
          onError: (err) => {
            toast.error(`Error signing in: ${err.error.message}`);
          },
        },
      });
    });
  };

  const signInWithEmail = () => {
    startEmailTransition(async () => {
      await authClient.emailOtp.sendVerificationOtp({
        email: emailValue,
        type: "sign-in",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Email sent!");
            router.push(`${routes.verifyRequest}?email=${emailValue}`);
          },
          onError: () => {
            toast.error("Error sending email");
          },
        },
      });
    });
  };

  const handleOnChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  return (
    <LoginForm
      signInWithGithub={signInWithGithub}
      signInWithGoogle={signInWithGoogle}
      signInWithEmail={signInWithEmail}
      isGithubPending={githubPending}
      isGooglePending={googlePending}
      isEmailPending={emailPending}
      emailValue={emailValue}
      handleOnChangeEmail={handleOnChangeEmail}
    />
  );
};

export default LoginPage;
