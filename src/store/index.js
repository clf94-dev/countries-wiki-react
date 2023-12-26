import { create } from 'zustand'
import { countriesSlice } from './slices/CountriesSlice'

export const useStore = create((...values) => ({
    ...countriesSlice(...values)
}))