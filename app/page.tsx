import Navbar from "./components/Navbar";
import GameTable from "./components/GameTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-4 w-[90%] mx-auto">
      <Navbar/>
      <div className="w-full h-[80vh] overflow-y-scroll shadow-md rounded-lg">
          <GameTable />
      </div>
    </main>
  );
}
