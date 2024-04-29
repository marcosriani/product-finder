import { filterOptions } from '../../../__data__/filter-options';
import { ProductsFilterProps } from '../../../types/common';
import Checkbox from '../checkbox';
import Search from '../search/search';
import styles from './products-filter.module.css';

const ProductsFilter = ({
  onSearch,
  selectedOptions,
  selectedOptionsHandler,
}: ProductsFilterProps) => {
  return (
    <div className={styles['products-filter']}>
      <h1 className={styles['product-filter-title']}>Product Finder</h1>
      <Search onSearch={onSearch} />
      <div className={styles['product-filter-container']}>
        <Checkbox
          filterOptions={filterOptions}
          selectedOptions={selectedOptions}
          selectedOptionsHandler={selectedOptionsHandler}
        />
      </div>
    </div>
  );
};

export default ProductsFilter;
