import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

type Session = Awaited<ReturnType<typeof auth.api.getSession>>;

const HomeMain = ({ session }: { session: Session }) => {
  return (
    <div>
      <h2>Welcome to abundance and love!!</h2>
      <Button asChild>
        <Link href={routes.dashboard}>Dashboard</Link>
      </Button>
      {session && (
        <Card>
          <CardContent>
            <CardDescription>{session.user.name}</CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default HomeMain;
