import React from 'react';

const RoutinesLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <header className="flex justify-between items-center px-6 py-4 bg-blue-200 border-2 border-orange-500 sticky top-0 z-50">
        This is header
      </header>
      
      <main className="flex-1 flex flex-col bg-blue-300 border-2 border-orange-400 overflow-auto">
        <div className="flex-1 flex items-center justify-center">
          <div className="container mx-auto px-6 py-16 max-w-7xl bg-blue-400 border-2 border-orange-300">
            one card
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoutinesLayout;