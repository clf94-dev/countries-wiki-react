import { useState } from "react"
import PropTypes from 'prop-types';

import styles from './Card.module.css'
import { Link } from 'react-router-dom'

import { useStore } from "../../store";
function Card({ data }) {
    
    const darkModeOn = useStore((state) => state.darkModeOn);
    const fetchCountryDetail = useStore((state) => state.fetchCountryDetail)
    const [showCountryName, setShowCountryName] = useState(false)
    const handleLinkClick = () => {
        console.log({data})
        fetchCountryDetail(data)

    }
    return (
    <Link to={`country`} onClick={() => handleLinkClick()} >
        <div 
            className={`${styles.card} ${darkModeOn ? styles.dark : ''}`}
            onMouseEnter={() => setShowCountryName(true)}
            onMouseLeave={() => setShowCountryName(false)}
        >
            <img src={data.flags.png} className={styles.image} />
            { showCountryName ? <div className={styles.countryOverlay}>
                <p className={styles.name}>{data.name.common}</p>
            </div> : null}
        </div>
    </Link>
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