import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Settings } from 'lucide-react';

const MainContentEditor: React.FC = () => {
  const [leftSidebarExpanded, setLeftSidebarExpanded] = useState(true);
  const [rightSidebarExpanded, setRightSidebarExpanded] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      const minWidth = 816 + (leftSidebarExpanded ? 256 : 56) + 56; // Width needed for collapsed right sidebar
      const fullWidth = 816 + (leftSidebarExpanded ? 256 : 56) + 256; // Width needed for expanded right sidebar
      
      if (window.innerWidth < minWidth && rightSidebarExpanded) {
        setRightSidebarExpanded(false);
      } else if (window.innerWidth >= fullWidth && !rightSidebarExpanded) {
        setRightSidebarExpanded(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [leftSidebarExpanded, rightSidebarExpanded]);

  return (
    <div className="h-full flex bg-blue-100 border-4 border-purple-500 relative">
      {/* Left Sidebar - Fixed Position */}
      <div 
        className={`h-full transition-all duration-300 border-r-4 border-pink-500 bg-blue-200 flex-shrink-0
          ${leftSidebarExpanded ? 'w-64' : 'w-14'} absolute left-0 top-0 z-10`}
      >
        <div className="flex justify-between items-center p-4 bg-blue-300 border-b-2 border-yellow-400">
          {leftSidebarExpanded && <span>Document tabs</span>}
          <button 
            onClick={() => setLeftSidebarExpanded(!leftSidebarExpanded)}
            className="hover:bg-blue-400 p-1 rounded"
          >
            {leftSidebarExpanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        <div className="p-2">
          {leftSidebarExpanded ? (
            <>
              <div className="p-2 hover:bg-blue-300 rounded border border-green-400">Tab 1</div>
              <div className="p-2 hover:bg-blue-300 rounded border border-green-400 mt-2">Tab 2</div>
            </>
          ) : (
            <div className="flex justify-center">
              <div>≡</div>
            </div>
          )}
        </div>
      </div>

      {/* Content Area with Left Padding */}
      <div 
        className={`flex-1 bg-blue-50 overflow-x-auto transition-all duration-300 border-2 border-orange-500
          ${leftSidebarExpanded ? 'ml-64' : 'ml-14'}`}
      >
        <div className="flex justify-center min-w-[816px]">
          <div className="w-[816px] bg-white shadow-lg my-8 min-h-[1056px] relative border-4 border-green-500">
            <div className="p-8">
              Content
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div 
        className={`h-full transition-all duration-300 border-l-4 border-pink-500 bg-blue-200 flex-shrink-0
          ${rightSidebarExpanded ? 'w-64' : 'w-14'}`}
      >
        {rightSidebarExpanded ? (
          <div className="p-4">
            <div className="flex justify-between items-center bg-blue-300 p-2 rounded border-2 border-yellow-400">
              <span>Template Setup</span>
              <button 
                onClick={() => setRightSidebarExpanded(false)}
                className="hover:bg-blue-400 p-1 rounded"
              >
                <X />
              </button>
            </div>
            <div className="mt-4">
              <div className="p-2 hover:bg-blue-300 rounded border border-green-400">Step 1</div>
              <div className="p-2 hover:bg-blue-300 rounded border border-green-400 mt-2">Step 2</div>
            </div>
          </div>
        ) : (
          <div className="p-4 flex justify-center">
            <button 
              onClick={() => setRightSidebarExpanded(true)}
              className="hover:bg-blue-300 p-1 rounded"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContentEditor;