import {useEffect} from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Box, Button} from "@mui/material";
import {getCountryDetailsAction} from "../store/actions";

import CountryDetails from "../components/CountryDetails";


function Details(props) {
    const parapms = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const country = useSelector(state => state.country.countryDetails)
    const isLoading = useSelector(state => state.country.isLoadingDetails)

    useEffect(() => {
        let code = parapms.alpha3Code.slice(1)
        dispatch(getCountryDetailsAction(code))
    }, [parapms])



    return (
        <Container maxWidth="lg">
            <Box sx={{mt: "50px"}}>
                <Button
                    variant="outlined"
                    onClick={() => {
                    navigate('/')}}
                >Home
                </Button>
                <CountryDetails isLoading={isLoading} country={country} />
            </Box>
        </Container>
    )
}

export default Details;