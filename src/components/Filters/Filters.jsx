
import styles from './Filters.module.css';
import Select from 'react-select'

import { useStore } from '../../store';

function Filters() {

    const darkModeOn = useStore((state) => state.darkModeOn);
    const regionFilterOptions = useStore((state) => state.regionFilterOptions);
    const currencyFilterOptions = useStore((state) => state.currencyFilterOptions)

    const updateRegionFilterSelected = useStore((state) => state.updateRegionFilterSelected);
    const updateCurrencyFilterSelected = useStore((state) => state.updateCurrencyFilterSelected)
    const updateSearchFilterSelected = useStore((state) => state.updateSearchFilterSelected);
    const filterCountriesListData = useStore((state) => state.filterCountriesListData)
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
          borderRadius: "4px",
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
          padding: "6px",
          border:'none',
          borderRadius: "4px",    
          backgroundColor: "#fff",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#000" }),
      };

      const handleChangeCurrency = (e)  => {
        console.log({e})
        updateCurrencyFilterSelected(e);
        filterCountriesListData();
      }
      const handleChangeRegion = (e)  => {
        console.log({e})
        updateRegionFilterSelected(e);
        filterCountriesListData();
      }
      const handleChangeSearch = (e)  => {
        console.log({e}, e.target.value)
        updateSearchFilterSelected(e.target.value);
        filterCountriesListData();
      }
    return (
       <div className={darkModeOn ? `${styles.filters} ${styles.dark}` : styles.filters}>
            <div className={darkModeOn ? `${styles.inputComponent} ${styles.dark}` : styles.inputComponent}>
                <ion-icon name='search' size="small" className={styles.searchIcon}></ion-icon>
                <input 
                  type="text" 
                  placeholder='Search for a country' 
                  className={`${styles.searchBar} ${darkModeOn ? styles.dark : ''}`}
                  onChange={handleChangeSearch}  />
            </div>
            
            <Select 
              placeholder="Select currency" 
              className={styles.currencyFilter}
              styles={darkModeOn ? customStyles : customStylesLight} 
              options={currencyFilterOptions} 
              onChange={handleChangeCurrency}
            />
            <Select 
              className={styles.regionFilter}
              placeholder="Select region" 
              styles={darkModeOn ? customStyles : customStylesLight}
              options={regionFilterOptions} 
              onChange={handleChangeRegion}
            />
    
       </div>
    )
}

export default Filters;