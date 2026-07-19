import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <div className="bg-[url('/summer-banner.png')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
        {/* Overlay */}
        <div className="w-full h-full rounded-lg bg-black/50 flex items-center  ">
        {/* banner content  */}
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
              Summer Sale <span className="text-yellow-300">50% OFF</span>
            </h1>

            <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
              Refresh your summer with premium essentials. Shop Body Lotion,
              Beach Umbrella, Water Bottle, Portable Fan, Summer Footwear & Air
              Conditioner at amazing prices.
            </p>

            <div className="flex gap-4">
              <Link href="/products">
                <Button className="cursor-pointer bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 text-black shadow-lg hover:scale-105 transition-all duration-300">
                  Shop Now
                </Button>
              </Link>

              <Link href="/all-products">
                <Button variant="outline" className="cursor-pointer text-white">
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
