import styles from './App.module.css';

import words from '../../json/wordsData';

import Header from '../Header/Header';
import Table from '../Table/Table';
import Footer from '../Footer/Footer';
import CardCollection from '../CardCollection/CardCollection';
/*import Training from '../Training/Training';*/


function App() {
  return (
    <div className = {styles.App}>
      <Header />
      <Table />
      <CardCollection words={words}/>
      <Footer />
    </div>
  );
}

export default App;
