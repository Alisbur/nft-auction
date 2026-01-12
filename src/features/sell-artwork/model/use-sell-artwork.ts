"use client";

import { useCallback, useState } from "react";

export const useSellArtwork = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sellArtwork = useCallback(async (): Promise<boolean> => {
    if (isLoading) return false;

    setIsLoading(true);

    try {
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
      });

      console.log(`Sell artwork`);
      return true;
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return { sellArtwork, isLoading };
};
