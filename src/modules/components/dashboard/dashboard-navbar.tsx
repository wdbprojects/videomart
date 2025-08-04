import DarkMode from "@/components/shared/dark-mode";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { routes } from "@/config/routes";
import Link from "next/link";

const DashboardNavbar = () => {
  return (
    <nav className="fixed top-0 right-0 px-2 z-50 flex justify-between items-center border-b bg-background h-16 py-2 w-full">
      <div className="flex items-center gap-1 sm:gap-2 md:gap-4 w-full justify-between">
        {/* //NOTE: MENU & LOGO */}
        <div className="flex items-center gap-2 flex-shrink-0 p-1">
          <SidebarTrigger />
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
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
