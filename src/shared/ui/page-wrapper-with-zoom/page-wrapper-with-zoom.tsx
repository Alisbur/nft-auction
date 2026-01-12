"use client";

import { ReactNode, useEffect, useState } from "react";

import styles from "./page-wrapper-with-zoom.module.scss";

const PAGE_MAX_WIDTH = 1920;
const SCROLL_BAR_WIDTH = 32;

type Props = {
  children: ReactNode;
};

const PageWrapperWithZoom = ({ children }: Props) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScale(width > PAGE_MAX_WIDTH ? width / (PAGE_MAX_WIDTH + SCROLL_BAR_WIDTH) : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={styles.wrapper}
      style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
    >
      {children}
    </div>
  );
};

export default PageWrapperWithZoom;
