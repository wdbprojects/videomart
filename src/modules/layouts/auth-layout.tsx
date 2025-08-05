import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { LayoutProps } from "@/config/types";
import Link from "next/link";

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href={routes.home}
          className="cursor-pointer hidden sm:flex flex-row gap-0 items-center w-full justify-center  mb-0"
        >
          <h6 className="text-3xl font-semibold text-primary tracking-tight mb-0">
            Video
          </h6>
          <h6 className="text-3xl font-semibold text-foreground tracking-tight mb-0">
            Mart
          </h6>
        </Link>
        {children}
        <div className="text-center text-balance text-xs text-muted-foreground">
          By clicking continue, you agree to out{" "}
          <span className="hover:text-primary hover:underline underline-offset-4 cursor-pointer transition-all">
            <Link href="#">Terms of service</Link>
          </span>{" "}
          and{" "}
          <span className="hover:text-primary hover:underline underline-offset-4 cursor-pointer transition-all">
            <Link href="#">Privacy Policy</Link>
          </span>
          .
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
