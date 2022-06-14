import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {useNavigate} from "react-router-dom";

function CountryDetails(props) {
    const {isLoading, country} = props;
    const navigate = useNavigate();

    const getBorderCountry = () => {
        return (
            country.borders?.map(border => {
                return (<Button
                    key={border}
                    size="small"
                    variant="outlined"
                    className="border-country"
                    onClick={() => {
                        navigate(`/country:${border}`)
                    }}>{border}
                </Button>)
            })
        )
    }

    return (
        <>
        {isLoading ?
                <Box sx={{display: 'flex', justifyContent: "center"}}>
                    <CircularProgress/>
                </Box> :

                <Box className='country-detail_wrap'>
                    <img src={country.flag} alt="flag" width="40%" height="40%"/>
                    <div style={{marginLeft: "50px"}}>
                        <Typography component="p" variant="h3">{country.name}</Typography>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <div>
                                <Typography>Название: {country.nativeName}</Typography>
                                <Typography>Насиление: {country.population}</Typography>
                                <Typography>Столица: {country.capital}</Typography>
                                <Typography>Регион: {country.region}</Typography>
                                <Typography>Субрегион: {country.subregion}</Typography>
                            </div>
                            <div>
                                <Typography>Домен верхного
                                    уровня: {country.topLevelDomain?.map(domain => domain).join(", ")}</Typography>
                                <Typography>Валюты: {country.currencies?.map(currency => currency.name).join(",")}</Typography>
                                <Typography>Языки:{country.languages?.map(language => language.name).join(", ")}</Typography>
                            </div>
                        </div>
                        <Typography sx={{mb: "10px"}}>Приграничные страны:</Typography>
                        <div style={{display: "flex", flexWrap: "wrap"}}>
                            {getBorderCountry()}
                        </div>
                    </div>
                </Box>
        }
        </>
    );
}

export default CountryDetails;