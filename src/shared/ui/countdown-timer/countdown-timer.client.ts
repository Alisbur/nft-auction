"use client";

import dynamic from "next/dynamic";

import type { TCountdownTimerProps } from "./types/countdown-tymer-props.type";

export const CountdownTimerClient = dynamic<TCountdownTimerProps>(
  () => import("./countdown-timer").then((el) => el.default),
  {
    ssr: false,
  },
);
