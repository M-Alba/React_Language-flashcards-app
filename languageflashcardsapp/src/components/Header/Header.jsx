import styles from './Header.module.css';

function Header() {
    return(
        <div className = {styles.header}>
            <div className = {styles.wrapper}>
                <div>Здесь будут логотип и навигация</div>
            </div>
        </div>
    )
}

export default Header;