import styles from './App.module.css';

import Header from '../Header/Header';
import Table from '../Table/Table';
import Footer from '../Footer/Footer';
import WordCard from '../WordCard/WordCard';
/*import Training from '../Training/Training';*/


function App() {
  return (
    <div className = {styles.App}>
      <Header />
      <Table />
      <WordCard />
      <Footer />
    </div>
  );
}

export default App;
