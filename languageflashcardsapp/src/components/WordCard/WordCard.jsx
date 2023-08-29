import { useEffect, useRef } from 'react'

import styles from './WordCard.module.css';

export default function WordCard(props) {

    /*const btnTranslate = useRef(null);

    useEffect(() => {
        btnTranslate.current.focus()}, []);*/

    const handleClick = () => {
        props.setClick(!props.click);
        props.countWords();
    };

    

    return (
        <div className={styles.container}>
            <div className={styles.item}>{props.english}</div>
            <div className={styles.item_transcription}>{props.transcription}</div>
            <div>
                {props.click ? <div className={styles.item}>{props.russian}</div> :
                    <button className={styles.btn} onClick={handleClick}>Показать перевод</button>}
            </div>
        </div>
    )
}

//ref={btnTranslate} в button


