"use client";

import classNames from "classnames";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import { Spinner } from "../spinner/spinner";
import styles from "./button.module.scss";

type TButtonProps = {
  children: string | ReactNode;
  theme?: "dark" | "white";
  variant?: "header" | "drawer" | "regular" | "card" | "promo";
  caption?: string;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<TButtonProps> = ({
  children,
  theme = "dark",
  variant = "regular",
  className,
  isLoading = false,
  disabled,
  ...props
}) => {
  return (
    <button
      type="button"
      {...props}
      className={classNames(
        styles.button,
        { [styles[`button_${theme}`]]: theme },
        { [styles[`button_${variant}`]]: variant },
        className,
      )}
      disabled={disabled || isLoading}
    >
      <span
        className={classNames(styles.button__content, {
          [styles.button__content_hidden]: isLoading,
        })}
      >
        {children}
      </span>

      {isLoading && (
        <span className={styles.button__spinner}>
          <Spinner size={"M"} />
        </span>
      )}
    </button>
  );
};
