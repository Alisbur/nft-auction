import Image from "next/image";
import { FC } from "react";

import { Bid, TAuction } from "@/entities";
import { PlaceBidButton } from "@/features";
import { CountdownTimerClient, MutateFunctionType } from "@/shared";

import styles from "./auction-card.module.scss";

type TAuctionCardProps = {
  auction?: TAuction;
  mutate?: MutateFunctionType;
};

export const AuctionCard: FC<TAuctionCardProps> = ({ auction, mutate }) => {
  if (!auction) return null;

  return (
    <article className={styles.card}>
      <div className={styles.card__imageContainer}>
        <Image src={auction.image} fill sizes={"300px"} alt={auction.title} />
        <CountdownTimerClient
          auctionId={auction.id}
          endDate={auction?.endDate}
          onFinish={() => {}}
          className={styles.timer}
        />
      </div>
      <h4>{auction.title}</h4>
      <div className={styles.card__actions}>
        <Bid bid={auction.currentBid} />
        <PlaceBidButton auctionId={auction.id} mutate={mutate} />
      </div>
    </article>
  );
};
