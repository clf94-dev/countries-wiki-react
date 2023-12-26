import styles from './Navbar.module.css'
function Navbar(){
    return (
        <div className={styles.navContainer}>
            <div className={styles.title}>
                <h3>Countries Wiki</h3>
            </div>
            <div className={styles.btnSection}>
                <button className={styles.darkModeBtn}>
                    <ion-icon name='moon-outline' size="small"></ion-icon>
                    <p>Dark Mode</p>
                </button>
            </div>
        </div>
    )
}

export default Navbar