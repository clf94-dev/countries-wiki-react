import React, { useState } from 'react'

import styles from './CountriesList.module.css'
import Card from '../Card'

function CountriesList() {

    return(
        <div className={styles.listContainer}>
            {[1, 2, 3].map(item =>  <Card data={item} />)}
        </div>
    )
}
export default CountriesList