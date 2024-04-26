import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#">
        <img
          className={styles.header__logo}
          src="images/Huguenots_mark.svg"
          alt="Huguenots Mark"
        />
      </a>
      <nav>
        <ul className={styles['nav-list']}>
          <li>
            <a href="#">
              <img
                src="images/Flag_of_Great_Britain.png"
                alt="Flag of Great Britain"
                className={styles['nav-list__logo']}
              />
            </a>
          </li>
          <li>
            <a className={styles['nav-list__link']} href="#">
              Professional Investor
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
