import CountryDetail from "../../components/CountryDetail"
import Navbar from "../../components/Navbar"
import styles from '../Page.module.css'

function Country () {
    return (
        <div className={styles.pageContainer}>
            <Navbar />
            <CountryDetail />
        </div>
    )
}
export default Country