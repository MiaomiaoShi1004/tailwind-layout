import React from 'react';
import { Card } from './ui/card';

const emails = [
  { id: 1, sender: "Alice", subject: "Project Update", time: "10:00 AM" },
  { id: 2, sender: "Bob", subject: "Meeting Schedule", time: "11:30 AM" },
  { id: 3, sender: "Charlie", subject: "New Features", time: "2:45 PM" },
];

export default function EmailListPanel() {
  return (
    <div className="w-[350px] p-6 bg-gray-100 overflow-y-auto"> {/* Fixed width for EmailListPanel */}
      <div className="space-y-4"> {/* Inner container for spacing between cards */}
        {emails.map((email) => (
          <Card key={email.id} className="p-4 shadow">
            {/* Card Header */}
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold">{email.sender}</h3>
              <p className="text-sm text-gray-600">{email.time}</p>
            </div>
            {/* Card Body */}
            <div>
              <p>{email.subject}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}