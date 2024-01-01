"use client";

import { Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}
const MobileSidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: MobileSidebarProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu
            className="md:hidden hover:bg-accent hover:text-accent-foreground h-6 w-6 text-white"
            type="button"
          >
            Menu
          </Menu>
        </SheetTrigger>

        <SheetContent side="left" className="p-0">
          <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
        </SheetContent>
      </Sheet>
    </>
  );
};
export default MobileSidebar;
