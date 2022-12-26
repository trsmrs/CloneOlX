import {
  Button,
  Container,
  Typography,
  Grid
} from '@mui/material'

import TemplateDefault from '../../src/templates/Default'
import CardM from '../../src/components/Card'
import Link from 'next/link'

export default function Home() {

  return (
    <TemplateDefault>
      <Container sx={{ padding: '100px 0px 6px' }} maxWidth='sm'>
        <Typography component="h1" variant="h2" align='center'>
          Meus Anúncios
        </Typography>
        <Link href='/user/publish'>
          <Button sx={{ margin: '30px auto', display: "block" }} variant='contained' color='secondary'>
            Publicar novo anúncio
          </Button>
        </Link>
      </Container>
      <Container maxWidth="md">
      <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>
        <CardM
          image='https://source.unsplash.com/random'
          title="Produtos"
          subtitle='R$ 120,00'
          actions={
            <>
              <Button size='small' color='secondary'>
                Editar
              </Button>
              <Button size='small' color='secondary'>
                Remover
              </Button>
            </>
          }
        />
     </Grid>
     </Grid>
      </Container>
    </TemplateDefault>
  )
}