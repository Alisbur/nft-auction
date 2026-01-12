"use client";

import classNames from "classnames";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import { Button } from "@/shared";

import { useConnectWallet } from "../../model";
import styles from "./connect-wallet-button.module.scss";

type TButtonProps = {
  children?: string | ReactNode;
  variant?: "header" | "drawer";
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ConnectWalletButton: FC<TButtonProps> = ({
  fullWidth = false,
  variant = "header",
  className,
  ...props
}) => {
  const { connectWallet, isLoading } = useConnectWallet();

  return (
    <Button
      theme={"dark"}
      variant={variant}
      className={classNames(
        {
          [styles.button_full]: fullWidth,
        },
        className,
      )}
      isLoading={isLoading}
      {...props}
      onClick={connectWallet}
    >
      Connect wallet
    </Button>
  );
};
