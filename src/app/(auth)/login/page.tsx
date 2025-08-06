import { auth } from "@/lib/auth";
import LoginPage from "@/modules/presentation/auth/login-main";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { routes } from "@/config/routes";

const LoginPageMain = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) redirect(routes.home);

  return <LoginPage />;
};

export default LoginPageMain;
