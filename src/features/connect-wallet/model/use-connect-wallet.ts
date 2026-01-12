"use client";

import { useCallback, useState } from "react";

export const useConnectWallet = () => {
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = useCallback(async (): Promise<boolean> => {
    if (isLoading) return false;

    setIsLoading(true);

    try {
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
      });

      console.log("Wallet is connected");
      return true;
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return { connectWallet, isLoading };
};
