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
        const  listData = await getCountriesList()
        console.log({listData})
        set((state) => ({countriesList: listData.data}))
    }
})