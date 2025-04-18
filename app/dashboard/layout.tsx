import React from "react";
import LeftSidebar from "@/components/dashboard/LeftSidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full">
      <div className="flex">
        <LeftSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default layout;
