
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';

import styles from './CountriesList.module.css'
import Card from '../Card'

import { useStore } from '../../store';

function CountriesList() {
    const darkModeOn = useStore((state) => state.darkModeOn);
    const filteredCountriesList = useStore((state) => state.filteredCountriesList)
    return(
        <div className={darkModeOn ? `${styles.darkListContainer} ${styles.listContainer}` : styles.listContainer}>
            {filteredCountriesList?.length 
                ? filteredCountriesList.map(item =>  <Card key={uuidv4()} data={item} />) 
                : <div className={darkModeOn ? `${styles.dark} ${styles.noData}` :styles.noData}> 
                   <p className={styles.noDataMessage}>No data available</p>
                </div>
            }
        </div>
    )
}

CountriesList.propTypes = {
    darkMode: PropTypes.bool.isRequired
}
export default CountriesList