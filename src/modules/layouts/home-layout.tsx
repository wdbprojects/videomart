import { LayoutProps } from "@/config/types";
import HomeNavbar from "../components/home/home-navbar";

const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full min-h-screen">
      <HomeNavbar />
      <div className="block pt-[4rem] !h-screen">
        <main className="flex overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default HomeLayout;
