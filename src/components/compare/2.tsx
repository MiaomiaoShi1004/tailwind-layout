import Header from "@/components/Header";
import DashboardContent from "@/features/dashboard/dashboardContent";
import useRoutinesAPI from "@/hooks/useRoutinesAPI";
import { withAuth, withAuthRedirect } from "@/hooks/withAuth";
import useTranslation from "@/hooks/useTranslation";

function Dashboard() {
  const t = useTranslation();
  
  console.log("Dashboard");
  const api = useRoutinesAPI();
  api?.listWorkflows().then((res) => { });

  return (
    <div className="bg-collection-1-gray-50 h-screen flex flex-col overflow-hidden">
      <Header>
        < h1 className="text-3xl font-h-2 text-collection-1-gray-900 mb-6" >
        {t("hello")}, {"{username}"}
        </h1 >
        <DashboardContent />
      </Header >
    </div>
  );
}

export default withAuthRedirect(Dashboard);