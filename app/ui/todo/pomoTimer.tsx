"use client";
import { useStopwatch } from "react-timer-hook";
import { archivoBlack } from "../fonts";
export default function PomoTimer() {
  const { totalSeconds, seconds, minutes, hours, start, pause, reset } =
    useStopwatch({ autoStart: true });
  return (
    <div className="bg-bodyBox p-5 rounded-2xl row-span-5 col-span-3 relative">
      <div
        className={`${archivoBlack.className} pomotimer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl py-28 w-1/2 text-center `}
      >
        {minutes + hours * 60 < 10 ? 0 : ""}
        {minutes + hours * 60}:{seconds < 10 ? 0 : ""}
        {seconds}
      </div>
    </div>
  );
}
