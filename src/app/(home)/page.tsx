import { auth } from "@/lib/auth";
import HomeMain from "@/modules/presentation/home/home-main";
import { headers } from "next/headers";

const HomePage = async () => {
  "use server";
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return <HomeMain session={session} />;
};

export default HomePage;
