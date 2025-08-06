"use client";

import { useTransition } from "react";
import { authClient } from "@/lib/auth-client";
import LoginForm from "@/modules/components/auth/login-form";
import { toast } from "sonner";

const LoginPage = () => {
  const [githubPending, startGithubTransition] = useTransition();
  const [googlePending, startGoogleTransition] = useTransition();

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

  return (
    <LoginForm
      signInWithGithub={signInWithGithub}
      signInWithGoogle={signInWithGoogle}
      isGithubPending={githubPending}
      isGooglePending={googlePending}
    />
  );
};

export default LoginPage;
