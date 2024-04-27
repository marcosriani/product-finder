import { fundData } from '../../__data__/fund-data';
import styles from './main-content.module.css';
import ProductsFilter from './products-filter';
import ProductsTable from './products-table';

const MainContent = () => {
  return (
    <div className={styles['main-content']}>
      <section className={styles['main-content__section']}>
        <ProductsFilter />
        <ProductsTable fundData={fundData} />
      </section>
    </div>
  );
};

export default MainContent;
