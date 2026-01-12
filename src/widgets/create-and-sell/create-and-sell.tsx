"use client";

import classNames from "classnames";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";

import { SellArtWorkButton } from "@/features";
import { Button } from "@/shared";

import styles from "./create-and-sell.module.scss";

type TCreateAndSellProps = {} & HTMLAttributes<HTMLDivElement>;

export const CreateAndSell: FC<TCreateAndSellProps> = ({ className, ...props }) => {
  return (
    <section {...props} className={classNames(styles.wrapper, className)}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.info}>
            <div className={styles.info__textContent}>
              <h3 className={styles.info__textContent_title}>Create and Sell NFTs</h3>
              <p className={styles.info__textContent_text}>World’s Largest NFT Place</p>
            </div>
            <div className={styles.info__buttons}>
              <Button
                theme={"white"}
                variant={"promo"}
                onClick={() => {
                  console.log("EXPLORE MORE");
                }}
              >
                Explore more
              </Button>
              <SellArtWorkButton />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/images/promo-image.jpg"
              alt="Promo image"
              fill
              sizes={"369px, 249px"}
              priority
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
