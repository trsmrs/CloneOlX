import { Button, Container, Typography } from '@mui/material'
import TemplateDefault from '../../src/templates/Default'





export default function Home() {
  

  return (
    <TemplateDefault>
      <Container sx={{padding: '10px 0px 6px'}} maxWidth='sm'>
      <Typography component="h1" variant="h2" align='center'>
        Meus Anúncios
      </Typography>
      <Button sx={{margin: '30px auto', display:"block"}} variant='contained' color='secondary'>
        Publicar novo anúncio
      </Button>
      </Container>
    </TemplateDefault>
  )
}
