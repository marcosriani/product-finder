import styles from './main-content.module.css';
import ProductsFilter from './products-filter';
import ProductsTable from './products-table';

const MainContent = () => {
  return (
    <div className={styles['main-content']}>
      <section className={styles['main-content__section']}>
        <ProductsFilter />
        <ProductsTable />
      </section>
    </div>
  );
};

export default MainContent;
