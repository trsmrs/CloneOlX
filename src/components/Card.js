import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography
  } from '@mui/material'


const GridController = () =>{

return(
<Grid container spacing={4}>
<Grid item xs={12} sm={6} md={4}>
  <Card>
    <CardMedia sx={{ paddingTop: "56%" }} image={'https://source.unsplash.com/random'}
      title="Titulo da imagem"
    />
    <CardContent>
      <Typography variant='h5' component='h2'>
        Produto X
      </Typography>
      <Typography>
        R$ 60,00
      </Typography>
    </CardContent>
    <CardActions>
      <Button size='small' color='secondary'>
        Editar
      </Button>
      <Button size='small' color='secondary'>
        Remover
      </Button>
    </CardActions>
  </Card>
</Grid>

<Grid item xs={12} sm={6} md={4}>
  <Card>
    <CardMedia sx={{ paddingTop: "56%" }} image={'https://source.unsplash.com/random'}
      title="Titulo da imagem"
    />
    <CardContent>
      <Typography variant='h5' component='h2'>
        Produto X
      </Typography>
      <Typography>
        R$ 60,00
      </Typography>
    </CardContent>
    <CardActions>
      <Button size='small' color='secondary'>
        Editar
      </Button>
      <Button size='small' color='secondary'>
        Remover
      </Button>
    </CardActions>
  </Card>
</Grid>

<Grid item xs={12} sm={6} md={4}>
  <Card>
    <CardMedia sx={{ paddingTop: "56%" }} image={'https://source.unsplash.com/random'}
      title="Titulo da imagem"
    />
    <CardContent>
      <Typography variant='h5' component='h2'>
        Produto X
      </Typography>
      <Typography>
        R$ 60,00
      </Typography>
    </CardContent>
    <CardActions>
      <Button size='small' color='secondary'>
        Editar
      </Button>
      <Button size='small' color='secondary'>
        Remover
      </Button>
    </CardActions>
  </Card>
</Grid>
</Grid>
)
}
export default GridController