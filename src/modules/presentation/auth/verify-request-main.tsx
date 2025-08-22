"use client";

import { useEffect, useState, useTransition } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button, buttonVariants } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { routes } from "@/config/routes";
import { toast } from "sonner";
import { ArrowBigLeft, Loader2, Send } from "lucide-react";
import Link from "next/link";
import DarkMode from "@/components/shared/dark-mode";

const VerifyRequestMain = () => {
  const [emailPending, startTransition] = useTransition();
  const [otp, setOtp] = useState("");
  const [otpLength, setOtpLength] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") as string;

  const verifyOTP = () => {
    startTransition(async () => {
      await authClient.signIn.emailOtp({
        email: email,
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            router.push(routes.home);
            toast.success(
              "Email verified successfully, you will be redirected...",
            );
          },
          onError: (err) => {
            toast.error(`Error verifying OTP: ${err.error.message}`);
          },
        },
      });
    });
  };

  useEffect(() => {
    const otpArray = otp.split("");
    setOtpLength(otpArray.length);
  }, [otp, setOtp]);

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
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
        <CardTitle className="text-xl">Please check your email</CardTitle>
        <CardDescription>
          We have sent a verification email <strong>code</strong> to your email
          address. Please open the email and paste the code below
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 max-w-[270px] mx-auto">
        <div className="flex flex-col items-center space-y-2 justify-center w-auto">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => {
              setOtp(value);
            }}
            className="gap-2"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <p className="text-center text-sm mt-2 text-muted-foreground">
          Enter the 6-digit code sent to your email
        </p>
        <Button
          variant="default"
          size="sm"
          className="w-full"
          disabled={otpLength !== 6 || emailPending}
          onClick={verifyOTP}
        >
          {emailPending ? (
            <div className="flex items-center gap-2">
              <Loader2 className="size=3.5 animate-spin" />
              <span>Loading...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Send className="size-3.5" />
              <span>Submit code</span>
            </div>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default VerifyRequestMain;
