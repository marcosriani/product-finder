type FundData = {
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

import style from './products-table.module.css';

const ProductsTable = ({ fundData }: { fundData: FundData }) => {
  console.log(fundData);

  // Get the keys from the first object in the fundData array
  const tableHeaders = fundData.length > 0 ? Object.keys(fundData[0]) : [];

  return (
    <table className={style.table}>
      <thead className={style.table__header}>
        <tr className={style.table__row}>
          {tableHeaders.map((header, index) => (
            <th
              className={`${style['table__row-item']} ${
                index <= 3
                  ? style['table__row-item-head-right']
                  : style['table__row-item-head-left']
              } ${index === 3 ? style['border-right-header'] : ''}`}
              key={index}
            >
              {header.split('_').join(' ')}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {fundData.map((fund, index) => (
          <tr className={style.table__row} key={index}>
            {tableHeaders.map((header, cellIndex) => (
              <td
                className={`${style['table__row-item']} 
                ${cellIndex === 3 ? style['border-right-body'] : ''}
                `}
                key={`${index}-${cellIndex}`}
              >
                {fund[header as keyof typeof fund]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
