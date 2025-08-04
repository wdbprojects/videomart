"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { LayoutProps } from "@/config/types";
import NextTopLoader from "nextjs-toploader";

const Providers = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <NextTopLoader showSpinner={false} />
      {children}
      <Toaster richColors closeButton position="bottom-right" />
    </ThemeProvider>
  );
};

export default Providers;
