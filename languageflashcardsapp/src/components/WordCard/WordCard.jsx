import styles from './WordCard.module.css';

export default function WordCard(props) {

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



