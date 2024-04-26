import Header from './components/header';
import MainContent from './components/main-content';
import Footer from './components/footer';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles['app-container']}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
