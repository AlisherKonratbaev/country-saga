import React, {} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {DarkMode, LightMode} from "@mui/icons-material";
import {Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setModeAction} from "../store/actions";
import {themeMode} from "../themeMode";

function Header(props) {
    const mode = useSelector(state => state.mode.mode);
    const dispatch = useDispatch();

    const handleChangeMode = () => {
        mode === themeMode.light ? dispatch(setModeAction(themeMode.dark)) :dispatch(setModeAction(themeMode.light));
    }
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar className={mode === themeMode.light ? "header-light" : "header-dark"} position="static">
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            onClick={handleChangeMode}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >

                            { mode === themeMode.light ?
                                <DarkMode />:
                                <LightMode />
                            }
                        </IconButton>
                        <Typography onClick={handleChangeMode} variant="h6" component="div" sx={{ flexGrow: 1, cursor:"pointer" }}>
                            { mode === themeMode.light ?
                                themeMode.dark :
                                themeMode.light
                            }
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Header;