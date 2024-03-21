"use client";
import { useStopwatch } from "react-timer-hook";
export default function Timer() {
  const { totalSeconds, seconds, minutes, hours, start, pause, reset } =
    useStopwatch({ autoStart: false });
  return (
    <p className="text-xs">
      {hours < 10 && 0}
      {hours}:{minutes < 10 && 0}
      {minutes}:{seconds < 10 && 0}
      {seconds}
    </p>
  );
}
