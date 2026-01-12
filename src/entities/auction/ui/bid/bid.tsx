import { FC } from "react";

import { Icon } from "@/shared";

import { formatBid } from "../../lib";
import styles from "./bid.module.scss";

type TBidProps = {
  bid: number;
};

export const Bid: FC<TBidProps> = ({ bid }) => {
  return (
    <div className={styles.bid}>
      <p>Current bid</p>
      <div className={styles.bid_data}>
        <Icon name={"bidArrows"} />
        <span>{formatBid(bid)}</span>
      </div>
    </div>
  );
};
