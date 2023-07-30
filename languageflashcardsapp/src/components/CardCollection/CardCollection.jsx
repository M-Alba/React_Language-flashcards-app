import { useState } from 'react'

import styles from './CardCollection.module.css';

import WordCard from '../WordCard/WordCard';

export default function CardCollection({words}) {

    const [index, setIndex] = useState(0);

    const showPreviousCard = () => {
        if (index === 0) {
            setIndex(words.length - 1);
        } else if (index > 0) {
            setIndex(index - 1);
            }
    };
    const showNextCard = () => {
        if (index === words.length - 1) {
            setIndex(0);
        } else if (index < words.length - 1) {
            setIndex(index + 1);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <button className={styles.btn} onClick={showPreviousCard}>Назад</button>
                    <WordCard 
                        english = {words[index].english}
                        transcription = {words[index].transcription}
                        russian = {words[index].russian}
                    />
                <button className={styles.btn} onClick={showNextCard}>Вперед</button>
            </div>
        </div>
    )
}

/*CardCollection.defaultProps = {
    words: [
        {
            english: 'No words available',
            transcription: '',
            russian: '',
        },
    ],
};*/