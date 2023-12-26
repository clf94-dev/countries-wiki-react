import { useState } from "react"
import PropTypes from 'prop-types';

import styles from './Card.module.css'

function Card({ data }) {
    const [showCountryName, setShowCountryName] = useState(false)
    return (
    <div 
        className={styles.card}
        onMouseEnter={() => setShowCountryName(true)}
        onMouseLeave={() => setShowCountryName(false)}
    >
        <img src={data.flags.png} className={styles.image} />
        { showCountryName ? <div className={styles.countryOverlay}>
            <p className={styles.name}>{data.name.common}</p>
        </div> : null}
    </div>
    )
}

Card.propTypes = {
    data: PropTypes.shape({
       altSpellings: PropTypes.arrayOf(PropTypes.string),
        area: PropTypes.number,
        capital: PropTypes.arrayOf(PropTypes.string),
        capitalInfo: PropTypes.object,
        /* car: PropTypes.object,
        cca2: PropTypes.string,
        cca3: PropTypes.string,
        ccn3: PropTypes.string, */
        coatOfArms: PropTypes.object,
        continents: PropTypes.arrayOf(PropTypes.string),
        currencies: PropTypes.object,
       /*  demonyms: PropTypes.object,
        flag: PropTypes.string, */
        flags: PropTypes.object,
        /* idd: PropTypes.object,
        independent: PropTypes.bool,
        landLocked: PropTypes.bool,
        languages: PropTypes.object,
        latlng: PropTypes.arrayOf(PropTypes.number),
        maps: PropTypes.object, */
        name: PropTypes.string,
        population: PropTypes.number,
        postalCode: PropTypes.object,
        region: PropTypes.string,
        /* startOfWeek: PropTypes.string,
        status: PropTypes.string, */
        subregion: PropTypes.string,
        timezones: PropTypes.arrayOf(PropTypes.string),
       /*  tld: PropTypes.arrayOf(PropTypes.string),
        translations: PropTypes.object, */
        unMember: PropTypes.bool 
    })
}
export default Card