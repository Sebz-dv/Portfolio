"use client";
import { transitionVariantsPage } from "@/utils/motion-transition";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
    return (
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                    className="fixed top-0 bottom-0 right-full w-screen h-screen z-30"
                    variants={transitionVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
                    style={{
                        opacity: 0.9,
                        backgroundImage: "linear-gradient(to left, #9000ff, #8800ff, #8000ff, #7700ff, #6e00ff)",
                    }}
                > 
                    <motion.div
                        initial={{ scale: 1.2, rotate: 45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 1.2, rotate: -45 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute inset-0"
                    ></motion.div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

export default TransitionPage;
