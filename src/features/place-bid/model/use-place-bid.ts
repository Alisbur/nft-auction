"use client";

import { useCallback, useState } from "react";

export const usePlaceBid = () => {
  const [isLoading, setIsLoading] = useState(false);

  const placeBid = useCallback(
    async ({ bid, auctionId }: { bid: number; auctionId: string }): Promise<boolean> => {
      if (isLoading) return false;

      setIsLoading(true);

      try {
        await new Promise<void>((resolve) => {
          setTimeout(resolve, 1000);
        });

        console.log(`Bid ${bid} for auction ${auctionId} is placed`);
        return true;
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading],
  );

  return { placeBid, isLoading };
};
