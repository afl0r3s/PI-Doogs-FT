import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getBreeds } from '../../1_actions';
import styles from './about.module.css';

export default function About() {
    const dispatch = useDispatch();
    const history = useHistory();

 
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getBreeds());
        history.push(`../home`);
    }

    return (
        <div className={styles.createContent}>
            <nav className={styles.navNav}>
                <span className={styles.navLogo}>Dog Mania App</span>
                <ul className={styles.navMenu}>
                    <li className={styles.navMenuItem}> <Link to={'/home'}> <span className={styles.navMenuLink} onClick={(e)=> handleClick(e)}> <i className="fa fa-home"></i> Home</span> </Link> </li>
                </ul>
            </nav>
            <div className={styles.tittle}>
                <div><h1>About...</h1></div>
            </div>
            <div className={styles.tittle}>
                <div><h2>Mi name is: Alejandro Flores</h2></div>
            </div>
            <div className={styles.tittle}>
            <div><h2>Cohorte: FT-15A</h2></div>
            </div>
            <div className={styles.content}>
                <div className={styles.data}> <img width="130" src="./images/icon_nodejs.png" alt="Node.JS" /> </div>
                <div className={styles.data}> <img width="130" src="./images/icon_react.png" alt="ReactJS" /> </div>
                <div className={styles.data}> <img width="130" src="./images/icon_redux.png" alt="Redux" /> </div>
                <div className={styles.data}> <img width="130" src="./images/icon_sequelize.png" alt="SequelizeJS" /> </div>
                <div className={styles.data}> <img width="130" src="./images/icon_postgres.png" alt="PostgreSQL" /> </div>
                <div className={styles.data}> <img width="130" src="./images/icon_css.png" alt="CSS" /> </div>
            </div>

            
        </div>
    )
}
