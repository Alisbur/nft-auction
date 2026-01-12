export type TAuction = {
  id: string;
  title: string;
  image: string;
  currentBid: number;
  endDate: string | Date;
}