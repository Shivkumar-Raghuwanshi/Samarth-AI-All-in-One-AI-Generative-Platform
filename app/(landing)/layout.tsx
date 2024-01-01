import { LandingNavbar } from "@/components/LandingNavbar";
import { ReactNode } from "react";

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-full bg-slate-100 overflow-auto">
      <LandingNavbar/>
      <div className="mx-auto max-w-screen-xl h-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
