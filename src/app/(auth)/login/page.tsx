import { redirect } from "next/navigation";
import { routes } from "@/config/routes";
import { auth } from "@/lib/auth";
import LoginPage from "@/modules/presentation/auth/login-main";
import { headers } from "next/headers";

const LoginPageMain = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    return redirect(routes.home);
  }

  return <LoginPage />;
};

export default LoginPageMain;
