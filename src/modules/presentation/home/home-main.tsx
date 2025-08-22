import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

const HomeMain = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      <h2>Welcome to abundance and love!!</h2>
      <Button asChild>
        <Link href={routes.dashboard}>Dashboard</Link>
      </Button>
      {session ? (
        <p className="text-xl font-semibold text-primary">
          {session.user.name}
        </p>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
};

export default HomeMain;
