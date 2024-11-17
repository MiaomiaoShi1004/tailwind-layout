import React, { useState } from 'react';
import { Settings, Bell, User } from 'lucide-react';

export default function SettingsSidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${
        isExpanded ? 'w-1/5 min-w-[200px]' : 'w-16'
      } max-w-[300px] bg-gray-200 p-4 transition-all duration-300`}
    >
      {/* Header with toggle button */}
      <div className="flex items-center justify-between">
        <h2 className={`${isExpanded ? 'block' : 'hidden'} text-lg font-bold`}>
          Settings
        </h2>
        <button onClick={toggleSidebar} className="p-2">
          {isExpanded ? '<' : '>'}
        </button>
      </div>

      {/* Sidebar content */}
      <div className="mt-4 space-y-4">
        <div className="flex items-center">
          <Settings className="w-6 h-6" />
          {isExpanded && <span className="ml-2">Settings</span>}
        </div>
        <div className="flex items-center">
          <Bell className="w-6 h-6" />
          {isExpanded && <span className="ml-2">Notifications</span>}
        </div>
        <div className="flex items-center">
          <User className="w-6 h-6" />
          {isExpanded && <span className="ml-2">Profile</span>}
        </div>
      </div>
    </div>
  );
}