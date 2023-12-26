import axios
 from "axios";
const getCountriesList = () => {
    return axios({
        method: 'get',
        url: 'https://restcountries.com/v3.1/all',
      })
       
}

export {
    getCountriesList
}