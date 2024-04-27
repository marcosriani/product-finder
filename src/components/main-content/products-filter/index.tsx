import { filterOptions } from '../../../__data__/filter-options';
import { SearchProps } from '../../../types/common';
import Checkbox from '../checkbox';
import Search from '../search/search';
import styles from './products-filter.module.css';

const ProductsFilter = ({ onSearch }: SearchProps) => {
  return (
    <>
      <h1 className={styles['product-filter-title']}>Product Finder</h1>
      <Search onSearch={onSearch} />
      <div className={styles['product-filter-container']}>
        <Checkbox filterOptions={filterOptions} />
      </div>
    </>
  );
};

export default ProductsFilter;
