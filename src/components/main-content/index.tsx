import { ChangeEvent, useEffect, useState } from 'react';
import { fundData as mockedFundData } from '../../__data__/fund-data';
import styles from './main-content.module.css';
import ProductsFilter from './products-filter';
import ProductsTable from './products-table';
import { filterOptions } from '../../__data__/filter-options';

const MainContent = () => {
  const [fundData, setFundData] = useState(mockedFundData);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const tagsArray = Object.values(filterOptions).flatMap((options) => {
    if (Array.isArray(options)) {
      return options.flatMap((option) => {
        if ('options' in option && Array.isArray(option.options)) {
          return option.options.flatMap((nestedOption) => {
            if ('tags' in nestedOption && Array.isArray(nestedOption.tags)) {
              return nestedOption;
            }
            if (
              'options' in nestedOption &&
              Array.isArray(nestedOption.options)
            ) {
              return nestedOption.options.flatMap((innerNestedOption) => {
                if (
                  'tags' in innerNestedOption &&
                  Array.isArray(innerNestedOption.tags)
                ) {
                  return innerNestedOption;
                }
                return [];
              });
            }
            return [];
          });
        }
        return [];
      });
    }
    return [];
  });

  const selectedOptionsHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const selectedValues = [value];

    if (checked) {
      tagsArray.forEach((item) => {
        if ((item.tags as string[]).includes(value)) {
          selectedValues.push(item.value);
        }
      });

      setSelectedOptions([...selectedOptions, ...selectedValues]);
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
