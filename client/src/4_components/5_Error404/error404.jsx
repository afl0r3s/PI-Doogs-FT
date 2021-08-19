import React from 'react'
import styles from './error404.module.css'

export default function error404() {
    return (
        <div className={styles.contentError}>
            <div className={styles.error}>
                {/* <img width="230" src="./sad_dog.png" alt="error.." /> */}
                <div className={styles.errorText}>
                    Atention !!<p></p><br></br>
                    Page not found ... 
                </div>
            </div>
        </div>
    )
}
