import CountryDetail from "../../components/CountryDetail"
import Navbar from "../../components/Navbar"
import styles from './Country.module.css'

function Country () {
    return (
        <div className={styles.countryContainer}>
            <Navbar />
            <CountryDetail />
        </div>
    )
}
export default Country