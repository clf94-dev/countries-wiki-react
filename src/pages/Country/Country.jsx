import CountryDetail from "../../components/CountryDetail"
import Navbar from "../../components/Navbar"

function Country () {
    return (
        <div style={{display: 'flex', flexDirection:'column', justifyContent:'center'}}>
            <Navbar />
            <CountryDetail />
        </div>
    )
}
export default Country