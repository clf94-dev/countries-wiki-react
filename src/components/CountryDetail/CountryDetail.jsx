import { useStore } from "../../store"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"

import styles from './CountryDetail.module.css'

function CountryDetail() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const countryDetail = useStore((state) => state.countryDetail);
    const darkModeOn = useStore((state) => state.darkModeOn);
    const resetCountryDetail = useStore((state) => state.resetCountryDetail)
    
    const handleBackClick = () =>{
        navigate('/')
        resetCountryDetail()
    }

    return(
        <div className={darkModeOn ? `${styles.darkDetailContainer} ${styles.detailContainer}` : styles.detailContainer}>
            <div className={styles.backRow}>
                <button className={darkModeOn?  `${styles.darkBackButton} ${styles.backBtn}`  :  styles.backBtn} onClick={() => handleBackClick()}> <ion-icon className={styles.arrowIcon} name="arrow-back-outline" size="medium"></ion-icon>{t('detail.backBtn')}</button>
            </div>
            <div className={styles.countryInfoContainer}>
                <div className={styles.imageColumn}>
                    <img className={styles.countryFlag} src={countryDetail.flags.svg} alt={`${countryDetail.name.common} flag image`} />
                </div>
                <div className={darkModeOn ? `${styles.darkInfoColumn} ${styles.infoColumn}` : styles.infoColumn}>
                    <h1>{countryDetail.name.common}</h1>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>{t('detail.officialName')}</strong>: {countryDetail.name.official}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>{t('detail.countryCode')}</strong>: {countryDetail.cca3}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>{t('detail.population')}</strong>: {countryDetail.population}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>{t('detail.region')}</strong>: {countryDetail.region}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>{t('detail.subregion')}</strong>: {countryDetail.subregion}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>{t('detail.capital')}</strong>: {countryDetail.capital[0]}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>{t('detail.currency')}</strong>: {countryDetail.subregion}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>{t('detail.timezone')}</strong>: {countryDetail.timezones?.map( timezone => timezone)}</p>
                    <div className={styles.borders}>
                        <p>
                            <strong className={styles.detailTitle}>{t('detail.borders')}</strong>
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