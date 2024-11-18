import SettingsSidebar from '../components/SettingsSidebar';
import EmailListPanel from '../components/EmailListPanel';
import EmailDetails from '../components/EmailDetails';

export default function Home() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <SettingsSidebar />

      {/* Content Area */}
      <div className="flex flex-1"> 
        <EmailListPanel />
        <EmailDetails />
      </div>
    </div>
  );
}
