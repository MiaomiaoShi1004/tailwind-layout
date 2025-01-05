import React, { ReactNode } from 'react';

// Type for our layout content props
type MainContentProps = {
  isFirstTime: boolean;  // or we could use cards.length === 1
  children: ReactNode;
};

// Extracted MainContent component
const MainContent: React.FC<MainContentProps> = ({ isFirstTime, children }) => {
  if (isFirstTime) {
    return (
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="container mx-auto px-6 py-16 max-w-7xl">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {children}
      </div>
    </div>
  );
};

export default MainContent;
