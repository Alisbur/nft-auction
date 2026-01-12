"use client";

import { ButtonHTMLAttributes, FC } from "react";

import { Button, MutateFunctionType } from "@/shared";

import { useCreateNft } from "../../model";

type TCreateNftButtonButtonProps = {
  mutate?: MutateFunctionType;
  theme?: "dark" | "white";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const CreateNftButton: FC<TCreateNftButtonButtonProps> = ({
  mutate,
  theme = "white",
  ...props
}) => {
  const { createNft, isLoading } = useCreateNft();

  const handleButtonClick = () => {
    createNft();
    mutate?.();
  };

  return (
    <Button
      onClick={handleButtonClick}
      variant="regular"
      theme={theme}
      {...props}
      isLoading={isLoading}
    >
      Create nft
    </Button>
  );
};
