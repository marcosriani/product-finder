import { filterOptions } from '../../../__data__/filter-options';
import Checkbox from '../checkbox';
import Search from '../search/search';
import styles from './products-filter.module.css';

const ProductsFilter = ({
  onSearch,
}: {
  onSearch: (searchTerm: string) => void;
}) => {
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
