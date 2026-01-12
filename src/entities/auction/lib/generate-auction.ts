import { getRandomDate, getRandomItemFromArray } from "@/shared";

import { MOCK_IMAGES } from "../config";
import { TAuction } from "../types";

export const generateAuction = ({ id, name }: { id: string; name: string }): TAuction => ({
  id,
  title: name,
  image: getRandomItemFromArray<string>(MOCK_IMAGES)!,
  endDate: getRandomDate({ within_days: 3 }),
  currentBid: Math.random() * 5,
});
