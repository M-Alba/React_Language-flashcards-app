import styles from './Table.module.css';

import WordList from '../WordList/WordList';
import words from '../../json/wordsData';

export default function Table() {

    return (
        <div className = {styles.wrapper}>
            <div className = {styles.container}>
                <div className = {styles.item_title}>Слово</div>
                <div className = {styles.item_title}>Транскрипция</div>
                <div className = {styles.item_title}>Перевод</div>
                <div className = {styles.item_title}></div>  
            </div>
            {words.map((item) => 
                    <WordList key = { item.id } item = {{ ...item }}/>
                )}
                
        </div>
    )
}