import DarkMode from "@/components/shared/dark-mode";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { routes } from "@/config/routes";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import { FaGithubAlt, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <Card className="!pt-1 !mt-0">
      <CardHeader className="!pt-0">
        <div className="flex flex-row justify-between items-center">
          <Link
            href={routes.home}
            className={buttonVariants({
              size: "sm",
              variant: "outline",
              className: "absolute top-4 left-4 text-xs",
            })}
          >
            <ArrowBigLeft className="size-3" />
            <span>Home</span>
          </Link>

          <DarkMode className="absolute top-5 right-4" />
        </div>
        <CardTitle className="text-xl text-foreground font-semibold text-center">
          Welcome back!
        </CardTitle>
        <CardDescription className="text-center">
          Login with your Github Email Account
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {/* <Button size="sm" className="w-full" variant="outline">
          <FaGithubAlt className="size-4" />
          <span>Sign in with Github</span>
        </Button> */}
        <Button size="sm" className="w-full" variant="outline">
          <FaGoogle className="size-3.5" />
          <span>Sign in with Google</span>
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
            />
          </div>
          <Button size="sm">Continue with email</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
