import Header from "@/components/Header";
import DashboardContent from "@/features/dashboard/dashboardContent";
import useRoutinesAPI from "@/hooks/useRoutinesAPI";
import { withAuth, withAuthRedirect } from "@/hooks/withAuth";
import useTranslation from "@/hooks/useTranslation";
import { useEffect, useState } from "react";
import { Template } from "@/features/dashboard/models/Template";

function Dashboard() {
  const t = useTranslation();
  const api = useRoutinesAPI();
  const [templates, setTemplates] = useState<Template[]>();

  useEffect(() => {
    if (!api) return;
    api.listBaseDocuments().then((data) => {
      const templates = data.map((response_object) => {
        return {
          id: response_object.id,
          name: response_object.name,
          description: response_object.description,
          template_preview_image_path: response_object.template_preview_image_path,
        };
      }
      setTemplates(templates);
      console.log(data);
    });
  }, [api]);



  return (
    <div className="h-screen flex flex-col overflow-hidden">
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