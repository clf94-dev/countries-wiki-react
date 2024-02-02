import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css'

import { useStore } from '../../store'

function Navbar(){
    const { t } = useTranslation();
    const darkModeOn = useStore((state) => state.darkModeOn);
    const activateDarkMode= useStore((state) => state.activateDarkMode);
    const deactivateDarkMode= useStore((state) => state.deactivateDarkMode);

    const handleClickMode = () =>{
        if (darkModeOn) deactivateDarkMode()
        else activateDarkMode()
    }
    console.log({darkModeOn})
    return (
        <div className={darkModeOn ? `${styles.navContainer} ${styles.darkContainer}`: styles.navContainer}>
            <div className={styles.title}>
                <h3>{t('title')}</h3>
            </div>
            <div className={styles.btnSection}>
                <button className={darkModeOn ?  `${styles.darkModeBtn} ${styles.active}` : styles.darkModeBtn} onClick={handleClickMode}>
                    {darkModeOn ? <ion-icon name='sunny-outline' size="small"></ion-icon> : <ion-icon name='moon-outline' size="small"></ion-icon>}
                    <p>Dark Mode</p>
                </button>
            </div>
        </div>
    )
}

Navbar.propTypes = {

}
export default Navbar