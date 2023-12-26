import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './CountriesList.module.css'
import Card from '../Card'

function CountriesList({darkMode}) {

    return(
        <div className={darkMode ? `${styles.darkListContainer} ${styles.listContainer}` : styles.listContainer}>
            {[1, 2, 3].map(item =>  <Card data={item} />)}
        </div>
    )
}

CountriesList.propTypes = {
    darkMode: PropTypes.bool.isRequired
}
export default CountriesList