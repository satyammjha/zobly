
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const ParallaxScroll = ({
    images,
    className
}) => {
    const gridRef = useRef(null);
    const { scrollYProgress } = useScroll({
        container: gridRef,
        offset: ["start start", "end start"],
    });

    const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);

    const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

    const third = Math.ceil(images.length / 3);

    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        (<div
            className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
            ref={gridRef}>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
                ref={gridRef}>
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            // Apply the translateY motion value here
                            style={{
                                y: translateYFirst,
                                x: translateXFirst,
                                rotateZ: rotateXFirst,
                            }}
                            key={"grid-1" + idx}>
                            <img
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail" />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div key={"grid-2" + idx}>
                            <img
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail" />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div
                            style={{
                                y: translateYThird,
                                x: translateXThird,
                                rotateZ: rotateXThird,
                            }}
                            key={"grid-3" + idx}>
                            <img
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>)
    );
};
