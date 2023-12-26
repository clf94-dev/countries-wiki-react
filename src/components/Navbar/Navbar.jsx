import styles from './Navbar.module.css'
function Navbar(){
    return (
        <div className={styles.navContainer}>
            <div className={styles.title}>
                <h3>Countries Wiki</h3>
            </div>
            <div className={styles.btnSection}>
                <button className={styles.darkModeBtn}>Dark Mode</button>
            </div>
        </div>
    )
}

export default Navbar