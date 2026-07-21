// import { Card } from "@heroui/react";
// import Image from "next/image";
// import React from "react";

// const SummerTipsCare = async () => {
//   const res = await fetch("http://localhost:3000/tips.json");
//   const tips = await res.json();
//   console.log(tips);

//   return (
//     <section>
//       <div className="max-w-7xl mx-auto mt-8">
//         <div className="flex flex-col items-center  pb-5">
//           <div className="flex gap-2 items-center">
//             <Image
//               src={"/summercare.png"}
//               alt="logo"
//               loading="eager"
//               width={60}
//               height={60}
//               className="object-cover h-auto w-auto"
//             />
//             <h3 className="font-black text-3xl text-[#422ad5]">
//              Summer care Tips
//             </h3>
//           </div>
//           <p className=" text-xl text-muted font-medium">
//             Important tips for learning growth
//           </p>
//         </div>

//         <div className=" grid sm:grid-cols-1 lg:grid-cols-2 gap-8  ">
//           <div>
//             <h3 className="text-2xl font-bold m-3 text-[#f43098]">
//               Learning Tips
//             </h3>

//             <div className=" grid sm:grid-cols-1 lg:grid-cols-3 gap-3 py-4">
//               {" "}
//               {tips.map((tip) => (
//                 <Card
//                   key={tip.id}
//                   className="border rounded-xl overflow-hidden p-"
//                 >
//                   <div className="space-x-3">
//                     <h1 className="font-medium">{tip.studyTechniques}</h1>
//                     <h1 className="font-medium">{tip.timeManagementTip}</h1>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-2xl font-bold m-3 text-[#f43098]">
//               {" "}
//               Top Instructors Section{" "}
//             </h3>
//             <div className=" grid sm:grid-cols-1 lg:grid-cols-3 gap-3 p-2">
//               {" "}
//               {tips.map((tip) => (
//                 <Card
//                   key={tip.id}
//                   className="border group rounded-xl overflow-hidden"
//                 >
//                   <div className="relative  w-full aspect-square group">
//                     <Image
//                       src={tip.image}
//                       fill
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       alt={tip.title}
//                       className=" object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
//                     />
//                   </div>

//                   <div>
//                     <h1 className="font-medium transition-colors duration-300 group-hover:text-blue-600">
//                       {tip.title}
//                     </h1>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SummerTipsCare;

import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const SummerTipsCare = async () => {
  const res = await fetch("http://localhost:3000/tips.json", {
    cache: "no-store",
  });

  const data = await res.json();
  const tips = data.summerCareTips;

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col items-center text-center pb-8">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Image
              src="/summercare.png"
              alt="Summer Care"
              width={60}
              height={60}
              className="w-14 h-14 sm:w-16 sm:h-16"
            />

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Summer Care Tips
            </h2>
          </div>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Stay healthy and safe during the summer season.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <Card
              key={tip.id}
              className="border rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-52 sm:h-56 lg:h-60 overflow-hidden">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-[#422ad5] transition-colors">
                  {tip.title}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-3">
                  {tip.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-yellow-500 font-semibold">
                    ⭐ {tip.rating}
                  </span>

                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                    Summer Tip
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerTipsCare;
