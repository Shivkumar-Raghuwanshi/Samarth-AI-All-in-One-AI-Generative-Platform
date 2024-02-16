import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { ReactNode } from "react";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <>
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-white">
          <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
        </div>
        <main className="md:pl-72">
          <Navbar />
          {children}
        </main>
      </div>
    </>
  );
};
export default DashboardLayout;