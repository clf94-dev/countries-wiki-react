import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import CountriesList from '../../components/CountriesList'
import Filters from '../../components/Filters'

import { useStore } from '../../store'

function Home() {
    const [darkMode, setDarkMode] = useState(false);
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
        <div style={{display: 'flex',flexDirection: 'column', justifyContent:'center'}}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Filters />
            <CountriesList darkMode={darkMode} />
        </div>
    )
}

export default Home