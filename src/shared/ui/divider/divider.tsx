import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

import styles from "./divider.module.scss";

type TDividerProps = {
  className?: string;
  width?: number;
  dark?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Divider: FC<TDividerProps> = ({ className, width, dark = false, style }) => {
  return (
    <div
      className={classNames(
        styles.divider,
        { [styles.divider_fullWidth]: !!width },
        { [styles.divider_dark]: dark },
        className,
      )}
      style={{
        width: width ? `${width}px` : undefined,
        ...style,
      }}
    />
  );
};
