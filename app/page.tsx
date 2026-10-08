import Image from "next/image";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import Forms from "./components/Forms";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-baseline bg-zinc-50 font-sans gap-4">
      <Navbar />
      <ProgressBar percentage={50} />
      <Forms />
    </div>
  );
}
