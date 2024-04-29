import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles['footer__inner-container']}>
      <img
        src="images/Huguenots_mark.svg"
        alt="Huguenots Mark"
        className={styles['footer__inner-container-image']}
      />
      <p className={styles['footer__inner-container-paragraph']}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua
      </p>
      <ul className={styles['footer__inner-container-list']}>
        <li>
          <a href="#" className={styles['footer__inner-container-list-item']}>
            Terms of Use
          </a>
        </li>
        <li>
          <a href="#" className={styles['footer__inner-container-list-item']}>
            Legal Terms
          </a>
        </li>
        <li>
          <a href="#" className={styles['footer__inner-container-list-item']}>
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className={styles['footer__inner-container-list-item']}>
            Cookie Policy
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
