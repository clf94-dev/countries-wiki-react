import { useStore } from "../../store"
import { useNavigate } from "react-router-dom"

import styles from './CountryDetail.module.css'

function CountryDetail() {
    const navigate = useNavigate();
    const countryDetail = useStore((state) => state.countryDetail);
    const darkModeOn = useStore((state) => state.darkModeOn);
    const resetCountryDetail = useStore((state) => state.resetCountryDetail)
    console.log({countryDetail})

    const handleBackClick = () =>{
        navigate('/')
        resetCountryDetail()
    }
    return(
        <div className={darkModeOn ? `${styles.darkDetailContainer} ${styles.detailContainer}` : styles.detailContainer}>
            <div className={styles.backRow}>
                <button className={darkModeOn?  `${styles.darkBackButton} ${styles.backBtn}`  :  styles.backBtn} onClick={() => handleBackClick()}> <ion-icon className={styles.arrowIcon} name="arrow-back-outline" size="medium"></ion-icon>Back</button>
            </div>
            <div className={styles.countryInfoContainer}>
                <div className={styles.imageColumn}>
                    <img className={styles.countryFlag} src={countryDetail.flags.svg} alt={`${countryDetail.name.common} flag image`} />
                </div>
                <div className={darkModeOn ? `${styles.darkInfoColumn} ${styles.infoColumn}` : styles.infoColumn}>
                    <h1>{countryDetail.name.common}</h1>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>Native name</strong>: {}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>Country Code</strong>: {countryDetail.cca3}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>Population</strong>: {countryDetail.population}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>Region</strong>: {countryDetail.region}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>Sub Region</strong>: {countryDetail.subregion}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>Capital</strong>: {countryDetail.capital[0]}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>Currency</strong>: {countryDetail.subregion}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>Timezone</strong>: {countryDetail.timezones?.map( timezone => timezone)}</p>
                    <div className={styles.borders}>
                        <p>
                            <strong className={styles.detailTitle}>Borders</strong>
                            :
                        </p> 
                        <div className={styles.borderItems}>
                            {countryDetail.borders?.map(border => <div className={darkModeOn ? `${styles.darkBorderItem} ${styles.borderItem}` :styles.borderItem}>{border}</div>)}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CountryDetail;