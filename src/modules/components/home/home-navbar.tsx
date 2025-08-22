"use client";

import DarkMode from "@/components/shared/dark-mode";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const HomeNavbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push(routes.login);
          toast.warning("User logged out successfully");
        },
      },
    });
  };

  return (
    <nav className="fixed top-0 right-0 px-2 z-50 flex justify-between items-center border-b bg-background h-16 py-2 w-full">
      <div className="flex items-center gap-1 sm:gap-2 md:gap-4 w-full justify-between">
        {/* //NOTE: MENU & LOGO */}
        <div className="flex items-center gap-2 flex-shrink-0 p-1">
          <Link
            href={routes.home}
            className="cursor-pointer hidden sm:flex flex-row gap-0 items-center"
          >
            <h6 className="text-xl font-extrabold text-primary tracking-tight">
              Video
            </h6>
            <h6 className="text-xl font-extrabold text-foreground tracking-tight">
              Mart
            </h6>
          </Link>
        </div>
        {/* //NOTE: BUTTONS & AUTH */}
        <div className="flex flex-shrink-0 items-center gap-3 p-1">
          {!session ? (
            <Button asChild variant="outline" size="sm">
              <Link href={routes.login}>Login</Link>
            </Button>
          ) : (
            <Button variant="secondary" size="sm" onClick={handleSignOut}>
              {isPending ? (
                <div>
                  <Loader2 className="size-3.5 animate-spin" />
                  <span>Loading...</span>
                </div>
              ) : (
                <span>Log out</span>
              )}
            </Button>
          )}
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
