import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";

const HomeMain = () => {
  return (
    <div>
      <h2>Welcome to abundance and love!!</h2>
      <Button asChild>
        <Link href={routes.dashboard}>Dashboard</Link>
      </Button>
    </div>
  );
};

export default HomeMain;
