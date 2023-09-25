import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-slate-200 w-80 rounded-xl">
      <Link className="ml-12" href="./about">
        About
      </Link>
      <div className="w-80 h-80 bg-blue-300 rounded-lg text-center p-20">
        <h1 className="text-4xl">Hello, Welcome</h1>
      </div>
    </main>
  );
}
