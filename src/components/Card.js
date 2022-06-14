import React, {} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate} from "react-router-dom";


function CardBox(props) {
    const {data} = props;
    const navigate = useNavigate();

    const handleDetails = (e) => {
        e.preventDefault();
        navigate(`/country:${data.alpha3Code}`);
    }
    
    return (
            <Card sx={{ width: 240, mb:"40px" }} onClick={handleDetails}>
                <CardActionArea>
                    <CardMedia
                        sx={{borderBottom:"1px solid #ccc"}}
                        component="img"
                        height="140"
                        image= {data.flag}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Население: {data.population}
                            <br />
                            Регион: {data.region}
                            <br />
                            Столица: {data.capital}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    );
}

export default CardBox;