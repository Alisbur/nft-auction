import { FC } from "react";

import styles from "./data-item.module.scss";

type TDataItemProps = {
  data: string;
  name: string;
};

export const DataItem: FC<TDataItemProps> = ({ data, name }) => {
  return (
    <div className={styles.wrapper}>
      <p>{data}</p>
      <h6>{name}</h6>
    </div>
  );
};
