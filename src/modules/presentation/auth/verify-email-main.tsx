"use client";

import { Button } from "@/components/ui/button";
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
import { routes } from "@/config/routes";
import { authClient } from "@/lib/auth-client";
import { Loader, Send } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

const VerifyRequestMain = () => {
  const [otp, setOtp] = useState("");
  const [emailPending, startTransition] = useTransition();
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
    const otpArr = otp.split("");
    setOtpLength(otpArr.length);
  }, [otp, setOtp]);

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
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
          onClick={verifyOTP}
          disabled={otpLength !== 6 || emailPending}
          className="w-full"
        >
          {emailPending ? (
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
      </CardContent>
    </Card>
  );
};

export default VerifyRequestMain;
