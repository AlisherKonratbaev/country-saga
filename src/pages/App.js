import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCountryAction} from "../store/actions";
import CardBox from "../components/Card";
import {Container} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/material/Box";
import Filters from "../components/Filters";



function App() {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.country.list)
    const isLoading = useSelector(state => state.country.isLoading)

    useEffect(() => {
        if(countries.length === 0)
        dispatch(getCountryAction())
    }, [dispatch])

    return (
        <>
            <Filters/>
            <Container maxWidth="lg">
                {isLoading ?
                    <Box sx={{display: 'flex', justifyContent: "center"}}>
                        <CircularProgress/>
                    </Box> :
                    <Box sx={{mt: "100px", display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                        {countries.length !== 0 && countries.map((country, index) => {
                                if(!country.isHideSearch && !country.isHideContinent) {
                                    return  <CardBox key={index} data={country}/>
                                }
                            }
                        )}
                    </Box>
                }
            </Container>
        </>
        
    );
}

export default App;
