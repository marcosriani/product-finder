import { ChangeEvent } from 'react';

export type FilterOptionsProps = {
  [key: string]:
    | {
        id: string;
        value: string;
        label: string;
        tags?: string[];
        options?: {
          id: string;
          value: string;
          label: string;
          tags?: string[];
        }[];
      }[]
    | {
        group: string;
        options: {
          id: string;
          value: string;
          label: string;
          tags?: string[];
          options?: {
            id: string;
            value: string;
            label: string;
            tags?: string[];
          }[];
        }[];
      }[];
};

export type CheckboxProps = {
  filterOptions: FilterOptionsProps;
  selectedOptions: string[];
  selectedOptionsHandler: (event: ChangeEvent<HTMLInputElement>) => void;
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

export type ProductsFilterProps = {
  onSearch: (searchTerm: string) => void;
  selectedOptions: string[];
  selectedOptionsHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};
