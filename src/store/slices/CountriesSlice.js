import {
    getCountriesList
} from '../../services/countries'

const DARK_MODE_NAME = 'dark_mode_flag';
const getInitialDarkMode = () => {
    const darkModeFlag = localStorage.getItem(DARK_MODE_NAME) === 'true';
    return darkModeFlag;
}

export const countriesSlice = (set) => ({
    countriesList: undefined,
    regionFilterOptions: undefined,
    darkModeOn: getInitialDarkMode(),
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
    fetchCountriesData: async () => {
        const listData = await getCountriesList()

        const regionsList = listData.data.map(country => country.region)
        const noRepeatedRegionsList = [...new Set(regionsList)]
        const regionFilterValues = noRepeatedRegionsList.map(item =>( {value: item, label: item}))
        console.log({regionsList, noRepeatedRegionsList, regionFilterValues})
       /*  const currencyList = listData.data.map(country => country?.currencies)
        console.log({currencyList, listData})
        const currencyCodeList = currencyList?.map(currency => Object.getOwnPropertyNames(currency))
        const noRepeatedCurrenciesList = new Set(currencyList)
        console.log({listData, currencyList, noRepeatedCurrenciesList, currencyCodeList}) */
        set((state) => ({
            countriesList: listData.data,
            regionFilterOptions: regionFilterValues
        }))
    }
})