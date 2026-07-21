import Banner from "@/components/Banner";
import SummerTipsCare from "@/components/SummerTips";
import Topproducts from "@/components/Topproducts";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Topproducts></Topproducts>
      <SummerTipsCare></SummerTipsCare>
    </div>
  );
}
