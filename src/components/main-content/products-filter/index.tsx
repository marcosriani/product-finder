import Checkbox from '../checkbox';
import styles from './products-filter.module.css';

const filterOptions = {
  strategy: [
    { value: 'thematic', label: 'Thematic' },
    { value: 'factors', label: 'Factors' },
    { value: 'equity-income', label: 'Equity Income' },
    { value: 'capital-strength', label: 'Capital Strength' },
    { value: 'currency-hedge', label: 'Currency Hedge' },
    { value: 'esg', label: 'ESG' },
  ],
  'asset class': [
    {
      group: 'equity',
      options: [
        { value: 'all-cap', label: 'All Cap' },
        { value: 'large-cap', label: 'Large Cap' },
        { value: 'small-cap', label: 'Small Cap' },
      ],
    },
    {
      group: 'fixed income',
      options: [
        { value: 'government', label: 'Government' },
        { value: 'currency', label: 'Currency' },
      ],
    },
  ],
  'market & region': [
    {
      group: 'market',
      options: [
        { value: 'developed', label: 'Developed' },
        { value: 'emerging', label: 'Emerging' },
      ],
    },
    {
      group: 'region',
      options: [
        { value: 'asia-pacific', label: 'Asia Pacific' },
        {
          value: 'europe',
          label: 'Europe',
          options: [
            { value: 'eurozone', label: 'Eurozone' },
            { value: 'germany', label: 'Germany' },
            { value: 'switzerland', label: 'Switzerland' },
            { value: 'united-kingdom', label: 'United Kingdom' },
          ],
        },
        { value: 'global', label: 'Global' },
        { value: 'north-america', label: 'North America' },
        { value: 'united-states', label: 'United States' },
      ],
    },
  ],
  style: [
    { value: 'index', label: 'Index' },
    { value: 'active', label: 'Active' },
  ],
};

const ProductsFilter = () => {
  return (
    <>
      <h1>Product Finder</h1>
      <input type="text" />

      <div className={styles['product-filter-container']}>
        <Checkbox filterOptions={filterOptions} />
      </div>
    </>
  );
};

export default ProductsFilter;
