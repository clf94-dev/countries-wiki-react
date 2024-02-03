import { useEffect } from "react";
import { useStore } from "../../store"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

import Map from "../Map";

import styles from './CountryDetail.module.css'


function CountryDetail() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const countryDetail = useStore((state) => state.countryDetail);
    const darkModeOn = useStore((state) => state.darkModeOn);
    const resetCountryDetail = useStore((state) => state.resetCountryDetail)
    const apiKey = import.meta.env.VITE_HERE_API_KEY
    let location = {}
    const language = i18n.language

    if(countryDetail && countryDetail.latlng ){
        location.lat = countryDetail.latlng[0]
        location.lng = countryDetail.latlng[1]
    }

    const handleBackClick = () =>{
        navigate('/')
        resetCountryDetail()
    }

    useEffect(() => {
        if (!countryDetail) navigate('/')

    }, [])
    console.log({countryDetail})

    return(
        <div className={darkModeOn ? `${styles.darkDetailContainer} ${styles.detailContainer}` : styles.detailContainer}>
            <div className={styles.backRow}>
                <button className={darkModeOn?  `${styles.darkBackButton} ${styles.backBtn}`  :  styles.backBtn} onClick={() => handleBackClick()}> <ion-icon className={styles.arrowIcon} name="arrow-back-outline" size="medium"></ion-icon>{t('detail.backBtn')}</button>
            </div>
            <div className={styles.countryInfoContainer}>
                <div className={styles.imageColumn}>
                    <img className={styles.countryFlag} src={countryDetail?.flags?.svg} alt={`${countryDetail?.name.common} flag image`} />
                </div>
                <div className={darkModeOn ? `${styles.darkInfoColumn} ${styles.infoColumn}` : styles.infoColumn}>
                    <h1>{countryDetail?.name.common}</h1>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>{t('detail.officialName')}</strong>: {countryDetail?.name.official}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>{t('detail.countryCode')}</strong>: {countryDetail?.cca3}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>{t('detail.population')}</strong>: {countryDetail?.population}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>{t('detail.region')}</strong>: {countryDetail?.region}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>{t('detail.subregion')}</strong>: {countryDetail?.subregion}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>{t('detail.capital')}</strong>: {countryDetail?.capital[0]}</p>
                    <p className={styles.detailParagrah}><strong className={styles.detailTitle}>{t('detail.currency')}</strong>: {countryDetail?.subregion}</p>
                    <div className={styles.timezones}>
                        <p>
                            <strong className={styles.detailTitle}>{t('detail.timezone')}</strong>
                            : 
                        </p>
                        <div className={styles.timezoneItems}>
                            {countryDetail?.timezones?.map( timezone => <div key={uuidv4()} className={darkModeOn ? `${styles.darkTimezoneItem} ${styles.timezoneItem}` :styles.timezoneItem}>{timezone}</div>)}
                        </div>
                    </div> 
                    <div className={styles.borders}>
                        <p>
                            <strong className={styles.detailTitle}>{t('detail.borders')}</strong>
                            :
                        </p> 
                        <div className={styles.borderItems}>
                            {countryDetail?.borders?.map(border => <div key={uuidv4()} className={darkModeOn ? `${styles.darkBorderItem} ${styles.borderItem}` :styles.borderItem}>{border}</div>)}
                        </div>
                    </div>


                </div>
            </div>
            <Map apiKey={apiKey} location={location} language={language} />
        </div>
    )
}

export default CountryDetail;