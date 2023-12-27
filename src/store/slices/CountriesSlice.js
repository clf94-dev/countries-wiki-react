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
    currencyFilterOptions: undefined,
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

        const currencyList = listData.data.map(country => country?.currencies)
        const currencyCodeList = currencyList?.map( currency => {
            console.log({currency})
            if(currency) return Object.keys(currency).map(key => {
                return {value: key, label: `${currency[key].name} (${currency[key].symbol})`}
            })
            return undefined
        }).flat().filter(e => e)
        const noRepeatedCurrenciesList = currencyCodeList.filter((value,index,array)=>array.findIndex(v2=>(v2.value===value.value))===index)

        set((state) => ({
            countriesList: listData.data,
            regionFilterOptions: regionFilterValues,
            currencyFilterOptions: noRepeatedCurrenciesList
        }))
    }
})