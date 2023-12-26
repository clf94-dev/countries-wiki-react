
import CountriesList from '../../components/CountriesList'
import Filters from '../../components/Filters'
function Home() {
    return(
        <div style={{display: 'flex',flexDirection: 'column', justifyContent:'center'}}>
            <Filters />
            <CountriesList />
        </div>
    )
}

export default Home