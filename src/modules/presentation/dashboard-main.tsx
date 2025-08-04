import DashboardNavbar from "../components/dashboard/dashboard-navbar";
import DashboardSidebar from "../sidebar/dashboard-sidebar";

const DashboardMain = () => {
  return (
    <div className="w-full h-full">
      <DashboardNavbar />
      <div className="flex overflow-y-auto">
        <DashboardSidebar />
        <div className="flex flex-col justify-between pb-[0rem] pt-[4rem] w-full">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold font-primary">
              Dashboard Content goes here
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
