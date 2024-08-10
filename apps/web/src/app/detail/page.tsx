"use client";

import React, { useState, ReactNode } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

interface DragCloseDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
}

const DragCloseDrawer: React.FC<DragCloseDrawerProps> = ({
  open,
  setOpen,
  children,
}) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70 flex items-center justify-center"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-80 w-full sm:w-[480px] md:w-[640px] overflow-hidden rounded-t-3xl bg-white"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-white p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex-col justify-between min-h-screen mx-auto">
      <div className="fixed bottom-0 w-full flex justify-center">
        <button
          onClick={() => setOpen(true)}
          className="rounded-t-2xl font-bold text-lg sm:text-xl w-72 sm:w-96 bg-blue1 px-4 py-2 text-white transition-colors hover:bg-blue3"
        >
          Buy ticket
        </button>
        <DragCloseDrawer open={open} setOpen={setOpen}>
          <div className="mx-auto max-w-lg sm:max-w-2xl space-y-4 text-neutral-400">
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-200">
              Drag the handle at the top of this modal downwards 100px to close it
            </h2>
            <p>tes</p>
          </div>
        </DragCloseDrawer>
      </div>
      <div className="flex justify-center w-full h-64 sm:h-96 relative">
        <div className="absolute inset-0 bg-[url('/kpop3.jpg')] bg-cover bg-center bg-no-repeat blur-sm"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative self-center">
          <img src="/kpop3.jpg" className="max-w-sm sm:max-w-2xl" />
        </div>
      </div>
          <div className="max-w-7xl mx-auto my-10 p-5 space-y-6">
  <h1 className="text-3xl md:text-4xl font-bold text-center text-black1">
    NewJeans Fan Meeting: "Bunnies Camp 2024" at Tokyo Dome
  </h1>

  <p className="text-base md:text-xl font-normal text-black1 leading-relaxed">
    Get ready for an unforgettable experience with NewJeans! Join us at the iconic Tokyo Dome for the highly anticipated "Bunnies Camp 2024" Fan Meeting. This exclusive event is your chance to connect with your favorite members up close, enjoy special performances, and be part of an incredible community of fans.
  </p>

  <div>
    <h2 className="text-xl md:text-2xl font-semibold text-black1">Event Details:</h2>
    <ul className="list-disc list-inside ml-5 text-base md:text-xl font-normal text-black1 leading-relaxed">
      <li>Date: [Event Date]</li>
      <li>Time: [Event Time]</li>
      <li>Venue: Tokyo Dome, Tokyo, Japan</li>
    </ul>
  </div>

  <div>
    <h2 className="text-xl md:text-2xl font-semibold text-black1">What to Expect:</h2>
    <ul className="list-disc list-inside ml-5 text-base md:text-xl font-normal text-black1 leading-relaxed space-y-2">
      <li>Live Performances: Experience NewJeans performing their latest hits and fan-favorite songs.</li>
      <li>Fan Interactions: Participate in interactive segments, Q&A sessions, and more.</li>
      <li>Exclusive Merch: Get access to limited-edition fan meeting merchandise.</li>
      <li>Surprises & Giveaways: Be ready for special surprises and giveaways throughout the event.</li>
    </ul>
  </div>

  <div>
    <h2 className="text-xl md:text-2xl font-semibold text-black1">Ticket Inclusions:</h2>
    <ul className="list-disc list-inside ml-5 text-base md:text-xl font-normal text-black1 leading-relaxed space-y-2">
      <li>Admission to the fan meeting</li>
      <li>Exclusive "Bunnies Camp 2024" merchandise</li>
      <li>[Any other perks, such as early entry or VIP access]</li>
    </ul>
  </div>
  <p className="text-base md:text-xl font-normal text-black1 leading-relaxed">
    Don't miss out on this once-in-a-lifetime opportunity to create lasting memories with NewJeans and fellow Bunnies! Secure your tickets now and be part of the magic at "Bunnies Camp 2024" in Tokyo Dome.
  </p>
</div>
    </div>
  );
}
