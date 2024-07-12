import Image from "next/image";
import Navbar from "./components/Navbar";
import GameTable from "./components/GameTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-10 w-[90%] mx-auto">
      <Navbar/>
      <div className="w-full h-[80vh] overflow-y-scroll">
          <GameTable />
      </div>
    </main>
  );
}
