import classNames from "classnames";

import styles from "./spinner.module.scss";

type SizeOption = "S" | "M" | "L";

type Props = {
  size?: SizeOption | number;
  className?: string;
};

const SIZE_MAP: Record<SizeOption, number> = {
  S: 10,
  M: 16,
  L: 32,
};

export const Spinner = ({ size = "M", className }: Props) => {
  const pixelSize = typeof size === "number" ? size : SIZE_MAP[size];
  const borderWidth = Math.max(2, Math.floor(pixelSize / 8));

  return (
    <span
      className={classNames(styles.spinner, className)}
      style={{
        width: pixelSize,
        height: pixelSize,
        borderWidth,
      }}
      aria-label="Loading"
    />
  );
};
