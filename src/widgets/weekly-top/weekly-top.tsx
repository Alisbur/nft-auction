"use client";

import { HTMLAttributes } from "react";

import { normalizeApiResponse, useGetAuctionList } from "@/entities";
import { Spinner } from "@/shared";

import { AuctionSlider } from "../auction-slider";
import styles from "./weekly-top.module.scss";

type Props = HTMLAttributes<HTMLDivElement>;

export const WeeklyTop = ({ className, ...props }: Props) => {
  const { data, error, isLoading, mutate } = useGetAuctionList();
  // const data = [];
  // const error = true;
  // const isLoading = true;

  if (isLoading) {
    return (
      <section className={styles.wrapper}>
        <div className={styles.service}>
          <Spinner size="L" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.wrapper}>
        <div className={styles.service}>
          <p>Ups... Something went wrong</p>
        </div>
      </section>
    );
  }

  const auctions = data ? normalizeApiResponse(data) : [];

  if (!auctions.length) return null;

  return (
    <section className={styles.wrapper} {...props}>
      <div className={styles.content}>
        <h2>Weekly – Top NFT</h2>
        <AuctionSlider items={auctions} /*mutate={mutate}*/ />
      </div>
    </section>
  );
};
