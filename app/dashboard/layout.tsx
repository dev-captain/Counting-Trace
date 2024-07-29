import {ReactNode} from "react";
import Navbar from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const DashBoardLayout = ({children}: LayoutProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center w-[90%] mx-auto">
      <Navbar/>
      {children}
    </main>
  );
};

export default DashBoardLayout;
