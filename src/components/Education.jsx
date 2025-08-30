import { useScroll, useTransform, motion, delay } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import assets, { educations } from "../assets/assets"; // assets import

export const Education = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Animation Variants
  const headingVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay:0.8, ease: "easeOut" } },
  };

  const leftVariants = {
    hidden: { x: -80, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const rightVariants = {
    hidden: { x: 80, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      ref={containerRef}
      className="relative sm:px-10 px-5 lg:px-20 h-auto mt-15 md:mt-25 mb-10 pb-10 "
    >
      {/* ⭐ Background image */}
      <div className="-z-10">
        <img
          src={assets.stars}
          alt="stars background"
          className="absolute bottom-0 left-0 w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Heading */}
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="font-bold text-3xl md:text-6xl flex justify-center bg-gradient-to-r from-red-700/90 to-purple-600 bg-clip-text text-transparent tracking-wider"
      >
        My Education
      </motion.h2>

      <div ref={ref} className="relative pb-12">
        {educations.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-26 md:gap-20"
          >
            {/* Timeline dot + left content */}
            <motion.div
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-xl md:w-full"
            >
              <div className="h-10 absolute -left-[15px] md:left-3 w-10 rounded-full flex items-center justify-center bg-midnight">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
              </div>
              <div className="flex-col hidden gap-3 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                <h3 className="font-mono">{item.date}</h3>
                <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                <h3 className="text-3xl text-neutral-500">{item.institution}</h3>
              </div>
            </motion.div>

            {/* Mobile view + right content */}
            <motion.div
              variants={rightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative pl-20 pt-10 pr-4 md:pl-4 w-full"
            >
              <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden">
                <h3 className="font-mono">{item.date}</h3>
                <h3>{item.title}</h3>
              </div>
              {item.contents.map((content, idx) => (
                <p
                  key={idx}
                  className="mb-3 font-['Manrope'] text-neutral-400"
                >
                  {content}
                </p>
              ))}
            </motion.div>
          </div>
        ))}

        {/* vertical line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[4px] bg-gradient-to-t from-purple-500 via-blue-600 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
