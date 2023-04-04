import { useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function InventoryItem(props) {
    const navigate = useNavigate();

    return (
        <Card className='inventory_item'>
            <CardMedia
                component="img"
                sx={{ height: 300 }}
                image={props.filmData.Poster}
            />
            <CardContent>
                <Typography>{props.filmData.Title}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    variant="contained"
                    onClick={() => navigate(`/film/${props.filmData.imdbID}`)}
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
