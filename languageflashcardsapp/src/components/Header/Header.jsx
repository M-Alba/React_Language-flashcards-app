import { NavLink } from "react-router-dom";

import styles from './Header.module.css';

export default function Header() {
    return(
        <div className = {styles.header}>
            <div className = {styles.wrapper}>
                <div>
                    <NavLink end to="/"><img className={styles.img} src='./assets/book_logo.svg' alt='logo' /></NavLink>
                </div>
                <div className={styles.nav}>
                    <div className={styles.link}><NavLink to="/" style={{ textDecoration: 'none', color: '#4d4d52' }}>Главная</NavLink></div>
                    <div className={styles.link}><NavLink to="/game" style={{ textDecoration: 'none', color: '#4d4d52' }}>Тренировка</NavLink></div>
                </div>
            </div>
        </div>
    )
}