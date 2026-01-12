"use client";

import { FC } from "react";

import { Button } from "@/shared";

import { useSellArtwork } from "../../model";

type TSellArtWorkButtonProps = {
  upperCase?: boolean;
};

export const SellArtWorkButton: FC<TSellArtWorkButtonProps> = () => {
  const { sellArtwork, isLoading } = useSellArtwork();

  const handleSellArtWork = () => {
    sellArtwork();
  };

  return (
    <Button onClick={handleSellArtWork} theme={"dark"} variant={"promo"} isLoading={isLoading}>
      Sell ArtWork
    </Button>
  );
};
