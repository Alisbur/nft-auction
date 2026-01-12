import classNames from "classnames";

import { useCountdown } from "@/shared/lib/hooks";

import styles from "./countdown-timer.module.scss";
import { TCountdownTimerProps } from "./types/countdown-tymer-props.type";

export default function CountdownTimer({
  auctionId,
  endDate,
  className,
  onFinish,
}: TCountdownTimerProps) {
  const { hours, minutes, seconds, isFinished } = useCountdown({
    endDate,
    onFinish: () => onFinish(auctionId),
  });

  const format = (value: number) => String(value).padStart(2, "0");

  return (
    <span className={classNames(styles.timer, className)}>
      {isFinished ? "Finished" : `${format(hours)}h ${format(minutes)}m ${format(seconds)}s`}
    </span>
  );
}
