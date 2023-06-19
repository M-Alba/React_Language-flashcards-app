import styles from './WordList.module.css'

import words from "../JSON/wordsData";

function WordList(props) {
/*const {english, transcription, russian} = props;*/

    return (
        <div className = {styles.wrapper}>
            <div className = {styles.container}>
                <div>Слово</div>
                <div>Транскрипция</div>
                <div>Перевод</div>
            </div>
        </div>
    )

}

export default WordList;