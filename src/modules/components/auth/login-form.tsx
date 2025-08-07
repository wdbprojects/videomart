import { ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGithubAlt, FaGoogle } from "react-icons/fa";
import { Loader, Send } from "lucide-react";
import Link from "next/link";

const LoginForm = ({
  signInWithGithub,
  signInWithGoogle,
  signInWithEmail,
  isGithubPending,
  isGooglePending,
  isEmailPending,
  emailValue,
  handleOnChangeEmail,
}: {
  signInWithGithub: () => void;
  signInWithGoogle: () => void;
  signInWithEmail: () => void;
  isGithubPending: boolean;
  isGooglePending: boolean;
  isEmailPending: boolean;
  emailValue: string;
  handleOnChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <Card className="!pt-1 !mt-0">
        <CardHeader className="!pt-0">
          <CardTitle className="text-xl text-foreground font-semibold text-center">
            Welcome back!
          </CardTitle>
          <CardDescription className="text-center">
            Login with your Github or Google Account
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button
            size="sm"
            className="w-full"
            variant="outline"
            onClick={signInWithGithub}
            disabled={isGithubPending}
          >
            {isGithubPending ? (
              <div className="flex items-center gap-2">
                <Loader className="animate-spin size-3.5" />
                <span>Loading...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <FaGithubAlt className="size-3.5" />
                <span>Sign in with Github</span>
              </div>
            )}
          </Button>
          <Button
            size="sm"
            className="w-full"
            variant="outline"
            onClick={signInWithGoogle}
            disabled={isGooglePending}
          >
            {isGooglePending ? (
              <div className="flex items-center gap-2">
                <Loader className="animate-spin size-3.5" />
                <span>Loading...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <FaGoogle className="size-3.5" />
                <span>Sign in with Google</span>
              </div>
            )}
          </Button>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-card px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
          <div className="grid gap-3">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="m@example.com"
                autoComplete="off"
                name="email"
                value={emailValue}
                onChange={handleOnChangeEmail}
                required
              />
            </div>
            <Button
              size="sm"
              onClick={signInWithEmail}
              disabled={isEmailPending}
            >
              {isEmailPending ? (
                <div className="flex items-center gap-2">
                  <Loader className="animate-spin size-3.5" />
                  <span>Loading...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="size-3.5" />
                  <span>Continue with email</span>
                </div>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-balance text-xs text-muted-foreground">
        By clicking continue, you agree to out
        <span className="hover:text-primary hover:underline underline-offset-4 cursor-pointer transition-all">
          <Link href="#">Terms of service</Link>
        </span>{" "}
        and{" "}
        <span className="hover:text-primary hover:underline underline-offset-4 cursor-pointer transition-all">
          <Link href="#">Privacy Policy</Link>
        </span>
        .
      </div>
    </>
  );
};

export default LoginForm;
