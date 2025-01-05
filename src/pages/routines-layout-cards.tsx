import React from 'react';

const RoutinesLayout: React.FC = () => {
  // This is just for testing multiple cards
  const cards = Array(20).fill("Card content");

  return (
    <div className="h-screen flex flex-col bg-blue-50 overflow-hidden">
      <header className="flex-none flex justify-between items-center px-6 py-4 bg-blue-200 border-2 border-orange-500">
        This is header
      </header>
      
      <main className="flex-1 overflow-y-auto bg-blue-300 border-2 border-orange-400">
        <div className="container mx-auto px-6 py-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-400 border-2 border-orange-300">
            {cards.map((content, index) => (
              <div 
                key={index}
                className="bg-blue-500 border-2 border-orange-200 p-4 rounded-lg"
              >
                {content} {index + 1}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoutinesLayout;