"use client";

import { ButtonHTMLAttributes, FC } from "react";

import { Button, MutateFunctionType } from "@/shared";

import { usePlaceBid } from "../../model";

type TPlaceBidButtonProps = {
  auctionId: string;
  mutate?: MutateFunctionType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const PlaceBidButton: FC<TPlaceBidButtonProps> = ({ auctionId, mutate, ...props }) => {
  const { placeBid, isLoading } = usePlaceBid();

  const handleButtonClick = () => {
    placeBid({ auctionId, bid: 2.23 });
    mutate?.();
  };

  return (
    <Button
      onClick={handleButtonClick}
      variant="card"
      theme="dark"
      {...props}
      isLoading={isLoading}
    >
      Place bid
    </Button>
  );
};
