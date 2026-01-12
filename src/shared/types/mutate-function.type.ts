import { KeyedMutator } from "swr";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MutateFunctionType = KeyedMutator<any> | (() => Promise<void>) | (() => void);
