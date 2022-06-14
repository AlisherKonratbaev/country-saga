import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import {Container, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch, useSelector} from "react-redux";
import {changeCountriesAction} from "../store/actions";

export default function Filters() {
    const countries = useSelector(state => state.country.list);
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const [regions, setRegions] = useState([]);
    const [activeRegion, setActiveRegion] = useState("");

    const handleSearch = (e) => {
        setText(e.target.value)
        const value = e.target.value.toLowerCase();
        countries.forEach(country => {
            country.name.toLowerCase().includes(value) ?
                country.isHideSearch = false :
                country.isHideSearch = true;
        })
        dispatch(changeCountriesAction(countries))
    }

    const handleSelectRegion = (e) => {
        setActiveRegion(e.target.value);
        const value = e.target.value

        for(let country of countries) {
            if(value === "") {
                country.isHideContinent = false;
            } else {
                country.region === value ?
                    country.isHideContinent = false :
                    country.isHideContinent = true;
            }
        }
        dispatch(changeCountriesAction(countries))
    };

    useEffect(() => {
        if (countries.length !== 0) {
            const allRegion = countries.map(country => country.region)
            const regionSet = Array.from(new Set(allRegion))
            setRegions(regionSet);
        }
    }, [countries])

    return (
        <Container maxWidth="lg">
            <Box sx={{mt: "30px", display: "flex", justifyContent: "space-between"}}>
                <TextField
                    onChange={handleSearch}
                    value={text}
                    sx={{width: "300px"}}
                    label="Search Country"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
                <Box sx={{minWidth: 220}}>
                    <FormControl fullWidth>
                        <InputLabel id="select-region">Filter</InputLabel>
                        <Select
                            labelId="select-region"
                            value={activeRegion}
                            label="region"
                            onChange={handleSelectRegion}
                        >
                            <MenuItem value="">
                                All
                            </MenuItem>
                            {regions.length !== 0 &&
                                regions.map((region, index) => {
                                    return <MenuItem key={index} value={region}>{region}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Container>
    );
}
