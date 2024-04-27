import { useState } from 'react';
import { fundData as mockedFundData } from '../../__data__/fund-data';
import styles from './main-content.module.css';
import ProductsFilter from './products-filter';
import ProductsTable from './products-table';

const MainContent = () => {
  const [fundData, setFundData] = useState(mockedFundData);

  const handleSearch = (searchTerm: string) => {
    setFundData(
      mockedFundData.filter((fund) =>
        fund.fund_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div className={styles['main-content']}>
      <section className={styles['main-content__section-filter']}>
        <ProductsFilter onSearch={handleSearch} />
      </section>
      <section className={styles['main-content__section-body']}>
        <ProductsTable fundData={fundData} />
      </section>
    </div>
  );
};

export default MainContent;
