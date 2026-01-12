"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";

import { DataItem } from "@/entities";
import { CreateNftButton } from "@/features";
import { Button, Divider, HERO_DATA_ITEMS } from "@/shared";

import styles from "./hero.module.scss";

type THeroProps = {} & HTMLAttributes<HTMLDivElement>;

export const Hero: FC<THeroProps> = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.main__top}>
            <Divider />
            <span>OVER 1M CREATORS</span>
          </div>
          <div className={styles.textContent}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
              className={styles.textContent__title}
            >
              Discover And Create NFTs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
              className={styles.textContent__text}
            >
              Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And
              Get a <span>$20 bonus</span>.
            </motion.p>
          </div>
          <div className={styles.buttons}>
            <Button
              variant={"regular"}
              theme={"dark"}
              onClick={() => {
                console.log("EXPLORE MORE");
              }}
            >
              Explore more
            </Button>
            <CreateNftButton theme={"white"}>Create NFT</CreateNftButton>
          </div>

          <div className={styles.data}>
            {HERO_DATA_ITEMS.map((item) => (
              <DataItem key={item.name} name={item.name} data={item.data} />
            ))}
          </div>
        </div>
        <div className={styles.promo}>
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.5,
              ease: "easeOut",
            }}
            className={styles.imgContainer_big}
          >
            <Image
              src={"/images/img2.png"}
              alt={"Promo image"}
              fill
              sizes={"400px"}
              className={styles.img_big}
            />
          </motion.div>
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 2,
              ease: "easeOut",
            }}
            className={styles.imgContainer_small}
          >
            <Image
              src={"/images/img1.png"}
              alt={"Promo image"}
              fill
              sizes={"400px"}
              className={styles.img_small}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 3,
              ease: "easeOut",
            }}
            className={styles.imgContainer_arrow}
          >
            <Image
              src={"/images/arrow.svg"}
              alt={"Promo image"}
              fill
              sizes={"400px"}
              className={styles.img_small}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
