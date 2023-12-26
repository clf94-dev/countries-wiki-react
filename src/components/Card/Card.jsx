import { useState } from "react"
import PropTypes from 'prop-types';

import styles from './Card.module.css'

function Card(props) {
    const { data } = props;
    console.log({props})
    const [showCountryName, setShowCountryName] = useState(false)
    return (
    <div 
        className={styles.card}
        onMouseEnter={() => setShowCountryName(true)}
        onMouseLeave={() => setShowCountryName(false)}
    >
        <p className={styles.image}>Image {data}</p>
        { showCountryName ? <div className={styles.countryOverlay}>
            <p className={styles.name}>name</p>
        </div> : null}
    </div>
    )
}

Card.propTypes = {
    data: PropTypes.number.required
}
export default Card