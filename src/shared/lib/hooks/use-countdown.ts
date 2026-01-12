"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";

type UseCountdownOptions = {
  endDate: string | Date;
  onFinish?: () => void;
};

type CountdownResult = {
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
};

export const useCountdown = ({
  endDate,
  onFinish,
}: UseCountdownOptions): CountdownResult => {
  const calculate = () => {
    const now = dayjs();
    const end = dayjs(endDate);
    const diff = end.diff(now, "second");

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isFinished: true,
      };
    }
    
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = diff % 60;

    return {
      hours,
      minutes,
      seconds,
      isFinished: false,
    };
  };

  const [state, setState] = useState<CountdownResult>(calculate);

  useEffect(() => {
    if (state.isFinished) return;

    const interval = setInterval(() => {
      setState((prev) => {
        const next = calculate();

        if (next.isFinished) {
          clearInterval(interval);
          onFinish?.();
        }

        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate, state.isFinished]);

  return state;
};
