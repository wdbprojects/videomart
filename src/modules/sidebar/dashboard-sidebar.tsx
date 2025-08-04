"use client";

import { Sidebar } from "@/components/ui/sidebar";

const DashboardSidebar = () => {
  return (
    <Sidebar
      className="pt-18 z-40 rounded border-none"
      variant="floating"
      collapsible="offcanvas"
    >
      <div className="p-4">
        <h2>Welcome love and abundance</h2>
      </div>
    </Sidebar>
  );
};

export default DashboardSidebar;
