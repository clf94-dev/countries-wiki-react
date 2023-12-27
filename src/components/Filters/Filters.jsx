
import styles from './Filters.module.css';
import Select from 'react-select'

import { useStore } from '../../store';

function Filters() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
   
    const darkModeOn = useStore((state) => state.darkModeOn);
    const regionFilterOptions = useStore((state) => state.regionFilterOptions)
    const customStyles = {
        option: (defaultStyles, state) => ({
          ...defaultStyles,
          color: state.isSelected ? "#212529" : "#fff",
          backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
        }),
    
        control: (defaultStyles) => ({
          ...defaultStyles,
          backgroundColor: "#212529",
          padding: "6px",
          border: "none",
          boxShadow: "none",
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
      };
      const customStylesLight = {
        option: (defaultStyles, state) => ({
          ...defaultStyles,
          color: state.isSelected ? "#212529" : "#000",
          backgroundColor: state.isSelected ? "#a0a0a0" : "#fffff",
        }),
    
        control: (defaultStyles) => ({
          ...defaultStyles,
          backgroundColor: "#fff",
          padding: "6px",
          border: "none",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#000" }),
      };
    return (
       <div className={darkModeOn ? `${styles.filters} ${styles.dark}` : styles.filters}>
            <div className={darkModeOn ? `${styles.inputComponent} ${styles.dark}` : styles.inputComponent}>
                <ion-icon name='search' size="small" className={styles.searchIcon}></ion-icon>
                <input type="text" placeholder='Search for a country' className={styles.searchBar}  />
            </div>
            
            <Select placeholder="Select currency" styles={darkModeOn ? customStyles : customStylesLight} options={options} />
            <Select placeholder="Select region" styles={darkModeOn ? customStyles : customStylesLight} options={regionFilterOptions} />
    
       </div>
    )
}

export default Filters;