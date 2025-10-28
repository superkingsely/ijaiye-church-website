



"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useHeroStore } from "../stores/heroStore";

const HeroSection = () => {
  const { views, count, next, prev, auto } = useHeroStore();

  useEffect(() => {
    auto();
  }, [auto]);

  const currentView = views[count];

  return (
    <section className="relative h-screen overflow-hidden z-[-10]">
      <AnimatePresence mode="sync"> {/* 👈 changed from wait to sync */}
        <motion.div
          key={count}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }} // longer fade
          className="absolute inset-0"
        >
          <Image
            src={currentView.img}
            alt={currentView.title}
            fill
            className="object-cover"
            priority={count === 0}
            quality={70}
            sizes="100vw"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white">
            <motion.h1
              key={`title-${count}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
            >
              {currentView.title}
            </motion.h1>
            <motion.p
              key={`subtitle-${count}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-2xl max-w-2xl px-4 drop-shadow"
            >
              {currentView.subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* navigation arrows */}
      <div className="absolute inset-0 flex justify-between items-center px-6 text-white">
        <button
          onClick={prev}
          className="bg-black/30 hover:bg-black/50 p-2 rounded-full transition"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="bg-black/30 hover:bg-black/50 p-2 rounded-full transition"
        >
          ▶
        </button>
      </div>

      {/* indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {views.map((_, index) => (
          <button
            key={index}
            onClick={() => useHeroStore.setState({ count: index })}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === count
                ? "bg-yellow-400 scale-125"
                : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;











// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useHeroStore } from "../stores/heroStore";

// const HeroSection = () => {
//   const { views, count, next, prev, auto } = useHeroStore();

//   useEffect(() => {
//     auto(); // start auto slide
//   }, [auto]);

//   const currentView = views[count];

//   return (
//     <section className="relative h-screen overflow-hidden z-[-10]">
//       {/* AnimatePresence allows smooth fade/slide transition */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={count} // re-render on count change
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -50 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={currentView.img}
//             alt={currentView.title}
//             fill
//             className="object-cover"
//             priority={count === 0} // load first fast
//             quality={70} // reduce image size for faster load
//             sizes="100vw"
//           />

//           {/* overlay */}
//           <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
//               {currentView.title}
//             </h1>
//             <p className="text-lg md:text-2xl max-w-2xl px-4 drop-shadow">
//               {currentView.subtitle}
//             </p>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* navigation arrows */}
//       <div className="absolute inset-0 flex justify-between items-center px-6 text-white">
//         <button
//           onClick={prev}
//           className="bg-black/30 hover:bg-black/50 p-2 rounded-full transition"
//         >
//           ◀
//         </button>
//         <button
//           onClick={next}
//           className="bg-black/30 hover:bg-black/50 p-2 rounded-full transition"
//         >
//           ▶
//         </button>
//       </div>

//       {/* indicators (pagination dots) */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
//         {views.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => useHeroStore.setState({ count: index })}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === count
//                 ? "bg-yellow-400 scale-125"
//                 : "bg-white/60 hover:bg-white"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>

//   );
// };

// export default HeroSection;










// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useHeroStore } from "../stores/heroStore";

// const HeroSection = () => {
//   const { views, count, next, auto } = useHeroStore();

//   useEffect(() => {
//     auto(); // start auto slide
//   }, [auto]);

//   const currentView = views[count];

//   return (
//     <section className="relative h-screen overflow-hidden z-[-10]">
//       {/* AnimatePresence allows smooth fade/slide transition */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={count} // re-render on count change
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -50 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={currentView.img}
//             alt={currentView.title}
//             fill
//             className="object-cover"
//             priority={count === 0} // load first fast
//             quality={70} // reduce image size for faster load
//             sizes="100vw"
//           />

//           {/* overlay */}
//           <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
//               {currentView.title}
//             </h1>
//             <p className="text-lg md:text-2xl max-w-2xl px-4 drop-shadow">
//               {currentView.subtitle}
//             </p>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* navigation arrows */}
//       <div className="absolute inset-0 flex justify-between items-center px-6 text-white">
//         <button
//           onClick={() => useHeroStore.getState().prev()}
//           className="bg-black/30 hover:bg-black/50 p-2 rounded-full"
//         >
//           ◀
//         </button>
//         <button
//           onClick={() => next()}
//           className="bg-black/30 hover:bg-black/50 p-2 rounded-full"
//         >
//           ▶
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
