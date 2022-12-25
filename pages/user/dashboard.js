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
import GridController from '../../src/components/Card'
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
        {/* GRID */}
        <GridController />
        {/* fim do grid container */}
      </Container>
    </TemplateDefault>
  )
}