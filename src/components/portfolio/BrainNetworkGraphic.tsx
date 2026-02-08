import { motion, useReducedMotion } from "framer-motion";
import brainNetwork from "@/assets/brain-network1.png";

export function BrainNetworkGraphic() {
  const reduceMotion = useReducedMotion();

  const breathingAnim = reduceMotion
    ? undefined
    : {
        scale: [1, 1.03, 1], // inhale → exhale
      };

  return (
    <div className="relative mx-auto w-full max-w-[980px]">
      {/* Ambient glow behind the brain */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[48px] bg-gradient-to-br from-primary/25 via-accent/10 to-transparent blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[55%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-[48px] bg-gradient-to-tr from-accent/15 via-primary/10 to-transparent blur-2xl" />
      </div>

      {/* Brain image with breathing effect */}
      <motion.div
        className="relative aspect-[16/10] w-full"
        animate={breathingAnim}
        transition={
          reduceMotion
            ? { duration: 0.6 }
            : {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        <img
          src={brainNetwork}
          alt="Brain Network"
          draggable="false"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            background: "transparent",
            border: "none",
            outline: "none",
            boxShadow: "none",
          }}
        />
      </motion.div>
    </div>
  );
}
