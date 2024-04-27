import { ChangeEvent, useState } from 'react';
import styles from './search.module.css';

const Search = ({ onSearch }: { onSearch: (searchTerm: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        type="text"
        placeholder="Enter fund name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <span className={styles.search__label}>
        <img src="images/Icon ionic-md-search.svg" alt="search" />
        <span className={styles['search__label-text']}>Search</span>
      </span>
    </div>
  );
};

export default Search;
