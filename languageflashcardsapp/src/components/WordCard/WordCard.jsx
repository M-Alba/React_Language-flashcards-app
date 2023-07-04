import { useState } from 'react';

import styles from './WordCard.module.css';

export default function WordCard(props) {
    /*const { english, transcription, russian } = item;*/

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <div className={styles.container}>
            <div className={styles.item}>{props.english}</div>
            <div className={styles.item_transcription}>{props.transcription}</div>
            <div>
                {click ? <div className={styles.item}>{props.russian}</div> :
                    <button className={styles.btn} onClick={handleClick}>Показать перевод</button>}
            </div>
        </div>
    )
}



