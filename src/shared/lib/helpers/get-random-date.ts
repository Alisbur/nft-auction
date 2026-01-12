import dayjs from "dayjs";

export function getRandomDate({ within_days }: { within_days: number }): string {
  const now = dayjs();

  const OFFSET_MS = within_days * 24 * 60 * 60 * 1000;

  const randomOffset = Math.floor(Math.random() * OFFSET_MS);

  return now.add(randomOffset, "millisecond").toString();
}
