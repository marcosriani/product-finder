export type FilterOptionsProps = {
  [key: string]:
    | {
        value: string;
        label: string;
        options?: { value: string; label: string }[];
      }[]
    | {
        group: string;
        options: {
          value: string;
          label: string;
          options?: { value: string; label: string }[];
        }[];
      }[];
};

export type FundDataProps = {
  fund_name: string;
  primary_ticker: string;
  income_treatment: string;
  share_class_currency: string;
  ISN: string;
  strategy: string;
  asset_class: string;
  region: string;
  style: string;
}[];

export type SearchProps = {
  onSearch: (searchTerm: string) => void;
};
