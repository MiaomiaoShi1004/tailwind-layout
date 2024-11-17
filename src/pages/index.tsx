import SettingsSidebar from '../components/SettingsSidebar';
import EmailListPanel from '../components/EmailListPanel';
import EmailDetails from '../components/EmailDetails';

export default function Home() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <SettingsSidebar />

      {/* Email List Panel */}
      <EmailListPanel />

      {/* Main Email View */}
      <EmailDetails />
    </div>
  );
}
