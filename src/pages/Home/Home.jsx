import { useState } from 'react'
import Navbar from '../../components/Navbar'
import CountriesList from '../../components/CountriesList'
import Filters from '../../components/Filters'
function Home() {
    const [darkMode, setDarkMode] = useState(false)
    return(
        <div style={{display: 'flex',flexDirection: 'column', justifyContent:'center'}}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Filters />
            <CountriesList darkMode={darkMode} />
        </div>
    )
}

export default Home