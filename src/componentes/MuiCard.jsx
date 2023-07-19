import {Box, Card , CardContent, Typography,CardActions,Button,CardMedia} from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia
            component='img'
            height='140'
            image='https://upload.wikimedia.org/wikipedia/commons/6/65/Pac-Man_Cutscene.svg' 
            alt='Pacman'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    React
                </Typography>
                <Typography variant='body2'
                color='text.secondary'>
                La alpaca (del quechua allpaqa, paqu o a veces paqucha, a través del aimara allpaqa) (Vicugna pacos) es una especie doméstica de mamífero artiodáctilo de la
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>
                    Share
                </Button>
                <Button size='small'>
                    Learn More
                </Button>
            </CardActions>
        </Card>    
    </Box>
  )
}

