export type TApiResponseItem = {
  id: string;
  contract_address: string | null;
  name: string;
  asset_platform_id: string;
  symbol: string;
};

export type TApiResponse = TApiResponseItem[];
