import { useState } from 'react'

import styles from './CardCollection.module.css';

import WordCard from '../WordCard/WordCard';

export default function CardCollection({words}) {

    const [click, setClick] = useState(false);
    const [index, setIndex] = useState(0);

    const showPreviousCard = () => {
        let cardIndex = index;
        if (cardIndex !== 0) {
            cardIndex--;
            setIndex(cardIndex);
        }
        else if (cardIndex === 0) {
            setIndex(0);
        }
        setClick(false);
    }

    /*const showNextCard = () => {

    }*/

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <button className={styles.btn} onClick={showPreviousCard}>Назад</button>
                    <WordCard 
                        english = {words[index].english}
                        transcription = {words[index].transcription}
                        russian = {words[index].russian}
                    />
                <button>Вперед</button>
            </div>
        </div>
    )
}