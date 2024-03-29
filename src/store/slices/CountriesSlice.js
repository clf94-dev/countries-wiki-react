import {
    getCountriesList
} from '../../services/countries'

import { capitalizeString } from '../../utils/funtions'

const DARK_MODE_NAME = 'dark_mode_flag';
const getInitialDarkMode = () => {
    const darkModeFlag = localStorage.getItem(DARK_MODE_NAME) === 'true';
    return darkModeFlag;
}

export const countriesSlice = (set) => ({
    countriesList: undefined,
    countryDetail: undefined,
    filteredCountriesList: undefined,
    regionFilterOptions: undefined,
    regionFilterSelected: undefined,
    currencyFilterOptions: undefined,
    currencyFilterSelected: undefined,
    searchFilterValue: undefined,
    darkModeOn: getInitialDarkMode(),
    updateRegionFilterSelected: (value) => set(() => ({
        regionFilterSelected: value
    })),
    updateCurrencyFilterSelected: (value) => set(() => ({
        currencyFilterSelected: value
    })),
    updateSearchFilterSelected: (value) => set(() => ({
        searchFilterValue: value
    })),
    activateDarkMode: () => set(() =>{
        localStorage.setItem(DARK_MODE_NAME, true)
        return {
            darkModeOn: true
        }
    }),
    deactivateDarkMode: () => set(() =>{
        localStorage.setItem(DARK_MODE_NAME, false)
        return {
            darkModeOn: false
        }
    }),
    filterCountriesListData: () => set((state) =>{
        const countriesFullList  = state.countriesList;
        const regionFilter = state.regionFilterSelected;
        const currencyFilter = state.currencyFilterSelected;
        const searchFilter = state.searchFilterValue;

       console.log({searchFilter})
        let filteredList = countriesFullList || [];
        let filteredListTest = []
       if (regionFilter) filteredList = filteredList.filter(country => country.region === regionFilter.value )
        if (currencyFilter) filteredList = filteredList.filter(country => country.currencies?.hasOwnProperty(currencyFilter.value))
        if (searchFilter)  filteredList = filteredList.filter(country => country.name.common.toLowerCase().includes(/* capitalizeString( */searchFilter)/* ) */)
        return {
            filteredCountriesList: filteredList
        }
    }),
    fetchCountryDetail: (data) => {
        console.log({data})
        set(() => ({
            countryDetail: data
        }))

    },
    resetCountryDetail:  () => {
        set(() => ({
            countryDetail: undefined,  
        }))
    },
    fetchCountriesData: async () => {
        const listData = await getCountriesList()

        const regionsList = listData.data.map(country => country.region)
        const noRepeatedRegionsList = [...new Set(regionsList)]
        const regionFilterValues = noRepeatedRegionsList.map(item =>( {value: item, label: item}))

        const currencyList = listData.data.map(country => country?.currencies)
        const currencyCodeList = currencyList?.map( currency => {
            console.log({currency})
            if(currency) return Object.keys(currency).map(key => {
                return {value: key, label: `${currency[key].name} (${currency[key].symbol})`}
            })
            return undefined
        }).flat().filter(e => e)
        const noRepeatedCurrenciesList = currencyCodeList.filter((value,index,array)=>array.findIndex(v2=>(v2.value===value.value))===index)

        set(() => ({
            countriesList: listData.data,
            filteredCountriesList:listData.data,
            regionFilterOptions: regionFilterValues,
            currencyFilterOptions: noRepeatedCurrenciesList
        }))
    }
})