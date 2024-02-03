import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import CountriesList from '../../components/CountriesList'
import Filters from '../../components/Filters'

import { useStore } from '../../store'
import styles from '../Page.module.css'

function Home() {
    let firstLoad = true;

    const countriesList = useStore((state) => state.countriesList)
    const fetchCountriesData = useStore((state) => state.fetchCountriesData)
    useEffect(() => {
        if(!countriesList && firstLoad){
            console.log('here')
            firstLoad = false
            fetchCountriesData()
        }
    }, [true])
    console.log({countriesList})
    return(
        <div className={styles.pageContainer}>
            <Navbar />
            <Filters />
            <CountriesList  />
        </div>
    )
}

export default Home