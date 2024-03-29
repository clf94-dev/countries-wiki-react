import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Switch from "react-switch";
import styles from './Navbar.module.css'
import EnglishIcon from '../../assets/sh.svg'
import SpanishIcon from '../../assets/es.svg'
import { useStore } from '../../store'

function Navbar(){
    const { t, i18n } = useTranslation();
    const [languageSelected, setLanguageSelected] = useState(i18n.language === 'es')
    const darkModeOn = useStore((state) => state.darkModeOn);
    const activateDarkMode= useStore((state) => state.activateDarkMode);
    const deactivateDarkMode= useStore((state) => state.deactivateDarkMode);

    const handleClickMode = () =>{
        if (darkModeOn) deactivateDarkMode()
        else activateDarkMode()
    }
  
    const handleChangeLanguage = (e)  => {
      i18n.changeLanguage(e ? "es" : "en");
      localStorage.setItem('i18nextLng', e ? "es" : "en")
      setLanguageSelected(e)
    }
    
    return (
        <div className={darkModeOn ? `${styles.navContainer} ${styles.darkContainer}`: styles.navContainer}>
            <div className={styles.title}>
                <h3>{t('title')}</h3>
            </div>

            <div className={styles.rightSideItems}>
                <div className={styles.languageSelector}>
                    <img className={styles.languageIcon} src={EnglishIcon} alt="english language icon" />
                    <Switch
                        onChange={handleChangeLanguage}
                        checked={languageSelected} 
                        checkedIcon={false}
                        uncheckedIcon={false}  
                    />
                    <img className={styles.languageIcon} src={SpanishIcon} alt="spanish language icon" />
                </div>
            <div className={styles.btnSection}>
                <button className={darkModeOn ?  `${styles.darkModeBtn} ${styles.active}` : styles.darkModeBtn} onClick={handleClickMode}>
                    <div className={styles.darkModeIcon} >
                        {darkModeOn 
                            ? <ion-icon name='sunny-outline' size="small"></ion-icon>
                            : <ion-icon name='moon-outline' size="small"></ion-icon>}
                    </div>
                    <div className={styles.darkModeText}>
                        <p>{darkModeOn ? t('lightModeBtn') : t('darkModeBtn')}</p>
                    </div>
                </button>
            </div>
            </div>
        </div>
    )
}

export default Navbar;