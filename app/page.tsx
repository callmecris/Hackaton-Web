import Image from "next/image";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans light:bg-white dark:bg-black">
      <Navbar />
      <ProgressBar percentage={50} />
      
    </div>
  );
}
