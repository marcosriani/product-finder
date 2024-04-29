import { ChangeEvent, useEffect, useState } from 'react';
import { fundData as mockedFundData } from '../../__data__/fund-data';
import styles from './main-content.module.css';
import ProductsFilter from './products-filter';
import ProductsTable from './products-table';

const MainContent = () => {
  const [fundData, setFundData] = useState(mockedFundData);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const selectedOptionsHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  useEffect(() => {
    let filteredData = mockedFundData;

    if (searchTerm.trim() !== '') {
      filteredData = mockedFundData.filter((fund) =>
        fund.fund_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedOptions.length > 0) {
      filteredData = filteredData.filter((fund) => {
        return selectedOptions.every((option) =>
          Object.values(fund).some(
            (value) => value.toString().toLowerCase() === option.toLowerCase()
          )
        );
      });
    }

    setFundData(filteredData);
  }, [searchTerm, selectedOptions]);

  return (
    <div className={styles['main-content']}>
      <section className={styles['main-content__section-filter']}>
        <ProductsFilter
          onSearch={handleSearch}
          selectedOptions={selectedOptions}
          selectedOptionsHandler={selectedOptionsHandler}
        />
      </section>
      <section className={styles['main-content__section-body']}>
        {fundData.length > 0 ? (
          <ProductsTable fundData={fundData} />
        ) : (
          <p>Sorry! no funds found. Please try a different search.</p>
        )}
      </section>
    </div>
  );
};

export default MainContent;
