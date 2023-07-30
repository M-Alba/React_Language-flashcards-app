import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from './App.module.css';

import words from '../../json/wordsData';

import Header from '../Header/Header';
import Table from '../Table/Table';
import CardCollection from '../CardCollection/CardCollection';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <div className = {styles.App}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/game" element={<CardCollection words={words}/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
