import { useState } from 'react';
import styles from './WordList.module.css';


export default function WordList({ item }) {
    const { english, transcription, russian } = item;
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    };

    const handleCancel = () => {
        setEdit(!edit);
    };

    const saveCancelBtns = () => {
        return (
            <>
                <input className={styles.input} placeholder='Введите слово' defaultValue={english}></input>
                <input className={styles.input} placeholder='Введите транскрипцию' defaultValue={transcription}></input>
                <input className={styles.input} placeholder='Введите перевод' defaultValue={russian}></input>
                <div className={styles.btn_group}>
                    <button className={styles.btn}>Сохранить</button>
                    <button className={styles.btn} onClick={handleCancel}>Отмена</button>
                </div>
            </>
        )
    }

    const editDeleteBtns = () => {
        return (
            <>
                <div className={styles.item}>{english}</div>
                <div className={styles.item}>{transcription}</div>
                <div className={styles.item}>{russian}</div>
                <div className={styles.btn_group}>
                    <button className={styles.btn} onClick={handleEdit}>Редактировать</button>
                    <button className={styles.btn} >Удалить</button>
                </div>
            </>
        )
    }

    return (
        <div className={styles.container}>
            {edit ? saveCancelBtns() : editDeleteBtns()}
        </div >
    )

}

