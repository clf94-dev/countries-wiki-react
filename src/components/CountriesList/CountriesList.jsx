import React, { useState } from 'react'

import styles from './CountriesList.module.css'

function CountriesList() {
    const [showCountryName, setShowCountryName] = useState(false)
    return(
        <div className={styles.listContainer}>
            {[1, 2, 3].map(item =>  <div 
                className={styles.card}
                onMouseEnter={() => setShowCountryName(true)}
                onMouseLeave={() => setShowCountryName(false)}
            >
                <p className={styles.image}>Image {item}</p>
                { showCountryName ? <div className={styles.countryOverlay}>
                    <p className={styles.name}>name</p>
                </div> : null}
            </div>)}
        </div>
    )
}
export default CountriesList