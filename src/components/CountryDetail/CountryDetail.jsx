import { useStore } from "../../store"
import { useNavigate } from "react-router-dom"

import styles from './CountryDetail.module.css'

function CountryDetail() {
    const navigate = useNavigate();
    const countryDetail = useStore((state) => state.countryDetail);
    const resetCountryDetail = useStore((state) => state.resetCountryDetail)
    console.log({countryDetail})

    const handleBackClick = () =>{
        navigate('/')
        resetCountryDetail()
    }
    return(
        <div>
            <div className={styles.backRow}>
                <button className={styles.backBtn} onClick={() => handleBackClick()}>Back</button>
            </div>
            <div className={styles.countryInfoContainer}>
                <div className={styles.imageColumn}>
                    <img className={styles.countryFlag} src={countryDetail.flags.svg} alt={`${countryDetail.name.common} flag image`} />
                </div>
                <div className={styles.InfoColumn}>
                    <h3 className={styles.name}>{countryDetail.name.common}</h3>
                    <p className={styles.nativeName}><strong>Native name</strong>: {}</p>
                    <p className={styles.code}><strong>Country Code</strong>: {countryDetail.cca3}</p>
                    <p className={styles.population}><strong>Population</strong>: {countryDetail.population}</p>
                    <p className={styles.region}><strong>Region</strong>: {countryDetail.region}</p>
                    <p className={styles.subregion}><strong>Sub Region</strong>: {countryDetail.subregion}</p>
                    <p className={styles.capital}><strong>Capital</strong>: {countryDetail.capital[0]}</p>

                    <p className={styles.currency}><strong>Currency</strong>: {countryDetail.subregion}</p>
                    <p className={styles.timezone}><strong>Timezone</strong>: {countryDetail.timezones?.map( timezone => timezone)}</p>
                    <div>
                        <p>
                            <strong>Borders</strong>
                            :
                        </p> 
                        {countryDetail.borders?.map(border => <p>{border}</p>)}</div>


                </div>
            </div>
        </div>
    )
}

export default CountryDetail;