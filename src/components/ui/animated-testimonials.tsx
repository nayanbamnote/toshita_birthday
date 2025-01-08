"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Toshitaimonial = {
  id: number;
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedToshitaimonials = ({
  Toshitaimonials,
  autoplay = false,
}: {
  Toshitaimonials: Toshitaimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % Toshitaimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + Toshitaimonials.length) % Toshitaimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = (index: number) => {
    const rotations = [-8, -4, 0, 4, 8];
    return rotations[index % rotations.length];
  };
  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-10 md:py-20">
      <div className="relative flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-20">
        <div>
          <div className="relative h-64 sm:h-72 md:h-80 w-full">
            <AnimatePresence>
              {Toshitaimonials.map((Toshitaimonial, index) => (
                <motion.div
                  key={`${index}-${Toshitaimonial.name}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(index),
                    zIndex: isActive(index)
                      ? 999
                      : Toshitaimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={Toshitaimonial.src}
                    alt={Toshitaimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-2xl md:rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-2 md:py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-xl md:text-2xl font-bold dark:text-white text-black">
              {Toshitaimonials[active].name}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 dark:text-neutral-500">
              {Toshitaimonials[active].designation}
            </p>
            <motion.p className="text-base md:text-lg text-gray-500 mt-4 md:mt-8 dark:text-neutral-300">
              {Toshitaimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-6 md:pt-12">
            <button
              onClick={handlePrev}
              className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-4 w-4 md:h-5 md:w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
