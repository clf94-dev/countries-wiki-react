export const countriesSlice = (set) => ({
    countriesList: undefined,
    fetchCountriesData: () => set((state) => ({countriesList: 'Spain'}))
})