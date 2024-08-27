import { Inter } from "next/font/google";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Banner from "./components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Banner/>
   <Categories/>
   <Featured/>
    </>
  );
}
