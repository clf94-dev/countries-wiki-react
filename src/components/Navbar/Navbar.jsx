import PropTypes from 'prop-types'
import styles from './Navbar.module.css'
function Navbar({darkMode, setDarkMode}){

    const handleClickMode = () =>{
        
        setDarkMode((prev) => !prev)
    }
    console.log(darkMode)
    return (
        <div className={darkMode ? `${styles.navContainer} ${styles.darkContainer}`: styles.navContainer}>
            <div className={styles.title}>
                <h3>Countries Wiki</h3>
            </div>
            <div className={styles.btnSection}>
                <button className={darkMode ?  `${styles.darkModeBtn} ${styles.active}` : styles.darkModeBtn} onClick={handleClickMode}>
                    {darkMode ? <ion-icon name='sunny-outline' size="small"></ion-icon> : <ion-icon name='moon-outline' size="small"></ion-icon>}
                    <p>Dark Mode</p>
                </button>
            </div>
        </div>
    )
}

Navbar.propTypes = {
    darkMode: PropTypes.bool.required,
    setDarkMode: PropTypes.func.required,
}
export default Navbar