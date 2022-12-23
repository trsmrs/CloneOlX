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

import TemplateDefault from '../../src/templates/Default'

export default function Home() {

  return (
    <TemplateDefault>
      <Container sx={{ padding: '10px 0px 6px' }} maxWidth='sm'>
        <Typography component="h1" variant="h2" align='center'>
          Meus Anúncios
        </Typography>
        <Button sx={{ margin: '30px auto', display: "block" }} variant='contained' color='secondary'>
          Publicar novo anúncio
        </Button>
      </Container>
      <Container maxWidth="md">
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


        </Grid> {/* fim do grid container */}
      </Container>
    </TemplateDefault>
  )
}