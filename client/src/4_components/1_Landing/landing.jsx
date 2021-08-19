import React from 'react'
import { Link } from 'react-router-dom'
import styles from './landing.module.css'

export default function Landing() {
    return (
        <div className={styles.mainConent}>
            <div className={styles.content}>
                <h1 data-text="Dog Mania">Dog Mania</h1>
                <div className={styles.text}>The place for Dog lovers... </div>
                <div className={styles.buttonConteiner}>
                    <Link to={'/home'}> <button className={styles.button}>Go to Start &#187; </button> </Link> 
                </div>
                <div className={styles.develop}>"Soy Henry" P.I. App<br/>Developed by Alejandro Flores</div>
            </div>
        </div>
    )
}
