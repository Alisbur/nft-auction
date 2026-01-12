export type TCountdownTimerProps = {
  auctionId: string;
  endDate: string | Date;
  className?: string;
  onFinish: (id: string) => void;
};
