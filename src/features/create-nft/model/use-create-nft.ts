"use client";

import { useCallback, useState } from "react";

export const useCreateNft = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createNft = useCallback(async (): Promise<boolean> => {
    if (isLoading) return false;

    setIsLoading(true);

    try {
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
      });

      console.log("NFT is created");
      return true;
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return { createNft, isLoading };
};
