import { useStore } from "../../store"
import { useNavigate } from "react-router-dom"

function CountryDetail() {
    const navigate = useNavigate();
    const countryDetail = useStore((state) => state.countryDetail);
    const resetCountryDetail = useStore((state) => state.resetCountryDetail)
    console.log({countryDetail})

    const handleBackClick = () =>{
        navigate('/')
        resetCountryDetail()
    }
    return(
        <div>
            <div>
                <button onClick={() => handleBackClick()}>Back</button>
            </div>
            <div>
                <img src={countryDetail.flags.svg} alt={`${countryDetail.name.common} flag image`} />
            </div>
            <div>
                <h3>{countryDetail.name.common}</h3>
                <p><strong>Native name</strong>: {}</p>
                <p><strong>Country Code</strong>: {countryDetail.cca3}</p>
                <p><strong>Population</strong>: {countryDetail.population}</p>
                <p><strong>Region</strong>: {countryDetail.region}</p>
                <p><strong>Sub Region</strong>: {countryDetail.subregion}</p>
                <p><strong>Capital</strong>: {countryDetail.capital[0]}</p>

                <p><strong>Currency</strong>: {countryDetail.subregion}</p>
                <p><strong>Timezone</strong>: {countryDetail.timezones?.map( timezone => timezone)}</p>
                <div>
                    <p>
                        <strong>Borders</strong>
                        :
                    </p> 
                    {countryDetail.borders?.map(border => <p>{border}</p>)}</div>


            </div>
        </div>
    )
}

export default CountryDetail;