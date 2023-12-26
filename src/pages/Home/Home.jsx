
import CountriesList from '../../components/CountriesList'
import Filters from '../../components/Filters'
import Navbar from '../../components/Navbar'
function Home() {
    return(
        <div style={{display: 'flex',flexDirection: 'column', justifyContent:'center'}}>
            <Navbar />
            <Filters />
            <CountriesList />
        </div>
    )
}

export default Home