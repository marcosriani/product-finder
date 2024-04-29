import { FundDataProps } from '../../../types/common';
import style from './products-table.module.css';

const ProductsTable = ({ fundData }: { fundData: FundDataProps }) => {
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
                ${cellIndex === 3 ? style['border-right-body'] : ''} ${
                  cellIndex > 0 ? style['table__row-item-center'] : ''
                }
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
