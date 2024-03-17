"use client";
import { useStopwatch } from "react-timer-hook";
import { archivoBlack } from "../fonts";
import { useState } from "react";
import clsx from "clsx";
export default function PomoTimer({
  minutes,
  hours,
  seconds,
}: {
  hours: number;
  minutes: number;
  seconds: number;
}) {
  // const { totalSeconds, seconds, minutes, hours, start, pause, reset } =
  //   useStopwatch({ autoStart: true });
  const [fullPage, setFullPage] = useState<boolean>(true);
  return (
    <div
      className={clsx("bg-bodyBox p-5 rounded-2xl row-span-5 col-span-4 ", {
        relative: !fullPage,
      })}
    >
      <div
        className={clsx(
          archivoBlack.className,
          "pomotimer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl py-28 text-center",
          {
            "w-1/2": !fullPage,
            "w-full h-full flex justify-center items-center text-9xl": fullPage,
          }
        )}
      >
        {minutes + hours * 60 < 10 ? 0 : ""}
        {minutes + hours * 60}:{seconds < 10 ? 0 : ""}
        {seconds}
      </div>
      <button
        className={clsx({ absolute: fullPage, "left-0 top-0 m-6": fullPage })}
        onClick={(e) => setFullPage(fullPage ? false : true)}
      >
        full page
      </button>
    </div>
  );
}
