import MainContent from '../components/routines/MainContent';

// Main Layout Component
const RoutinesLayout: React.FC = () => {
  // This could come from your state management or API
  const isFirstTime = false; // or true based on user state
  const cards = isFirstTime 
    ? [<div key="guide" className="bg-blue-500 border-2 border-orange-200 p-4 rounded-lg">Guide Card</div>]
    : Array(50).fill("Card content").map((content, index) => (
        <div key={index} className="bg-blue-500 border-2 border-orange-200 p-4 rounded-lg">
          {content} {index + 1}
        </div>
      ));

  return (
    <div className="h-screen flex flex-col bg-blue-50 overflow-hidden">
      <header className="flex-none flex justify-between items-center px-6 py-4 bg-blue-200 border-2 border-orange-500">
        This is header
      </header>
      
      <main className="flex-1 overflow-y-auto bg-blue-300 border-2 border-orange-400">
        <MainContent isFirstTime={isFirstTime}>
          {cards}
        </MainContent>
      </main>
    </div>
  );
};

export default RoutinesLayout;