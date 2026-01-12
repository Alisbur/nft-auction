"use client";

import { FC } from "react";

import { Icon } from "@/shared";

import { useMobileMenu } from "../../model";
import styles from "./mobile-menu-button.module.scss";

type TMobileMenuButtonProps = {
  size?: number;
};

export const MobileMenuButton: FC<TMobileMenuButtonProps> = ({ size = 40 }) => {
  const { isOpen, toggle } = useMobileMenu();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggle?.();
  };

  return (
    <button type={"button"} className={styles.button} onClick={handleClick}>
      {isOpen ? <Icon name={"close"} size={size} /> : <Icon name={"burger"} size={size} />}
    </button>
  );
};
