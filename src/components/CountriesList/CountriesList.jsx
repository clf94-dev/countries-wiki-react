import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './CountriesList.module.css'
import Card from '../Card'

import { useStore } from '../../store';

function CountriesList({darkMode}) {
    const darkModeOn = useStore((state) => state.darkModeOn);
    const filteredCountriesList = useStore((state) => state.filteredCountriesList)
    return(
        <div className={darkModeOn ? `${styles.darkListContainer} ${styles.listContainer}` : styles.listContainer}>
            {filteredCountriesList?.length ? filteredCountriesList.map(item =>  <Card data={item} />) : null}
        </div>
    )
}

CountriesList.propTypes = {
    darkMode: PropTypes.bool.isRequired
}
export default CountriesList