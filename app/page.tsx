import { Banner } from "@/components/Banner";
import { NewsLatter } from "./NewsLatter";
import LatestNews from "./latestNews";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-auto item-center justify-center gap-20 ">
      <Banner/>
      <LatestNews/>
      <NewsLatter/>
      
    </div>
  );
}
