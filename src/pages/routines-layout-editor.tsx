import MainContentEditor from "@/components/routines/MainContentEditor";

const EditorPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col bg-blue-50 overflow-hidden">
      <header className="flex-none flex justify-between items-center px-6 py-4 bg-blue-200 border-2 border-orange-500">
        This is header
      </header>
      
      <main className="flex-1 overflow-y-auto bg-blue-300 border-2 border-orange-400">
        <MainContentEditor />
      </main>
    </div>
  );
};

export default EditorPage; 