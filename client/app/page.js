import Link from "next/link";
import Hero from "./Components/Hero";
import CollectionLat from "./Components/CollectionLat";
import BestSellers from "./Components/BestSellers";
import Ads from "./Components/Ads";
import Features from "./Components/Features";
export default function Home() {
 

  return (
    <div className="flex items-center flex-col gap-20">
      <Hero />
      <CollectionLat />
      <Ads/>
      <BestSellers />
      <Features/>
    </div>
  );
}
