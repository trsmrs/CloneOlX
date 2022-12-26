import { Box, Container, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import TemplateDefault from '../src/templates/Default'
import CardMui from '../src/components/Card';




const Home = () => {
    return (
         
        <TemplateDefault>
            <Container sx={{ marginTop: 10, padding: '8, 10, 6' }} maxWidth='md'>
                <Typography component='h1' variant='h3' align='center' color='#000' marginBottom={4}>
                    Olá, o que está procurando?
                </Typography>
                <Paper sx={[
                    {
                        '&:hover': {
                            backgroundColor: '#f2e1f5',
                        },
                    },
                    { display: 'flex', justifyContent: 'center', padding: '0, 2', marginTop: '20' },
                ]}>
                    <InputBase sx={{ marginLeft: 2 }}
                        placeholder='Ex..: Monitor 27"'
                        fullWidth
                    />
                    <IconButton>
                        <SearchIcon></SearchIcon>
                    </IconButton>
                </Paper>
            </Container>
            <Container maxWidth='lg'>
                <Typography component='h2' variant='h4' align="center" color="#000" margin='10px auto '>
                    Destaques
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <CardMui
                            image='https://source.unsplash.com/random'
                            title="Produtos"
                            subtitle='R$ 120,00'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <CardMui
                            image='https://source.unsplash.com/random'
                            title="Produtos"
                            subtitle='R$ 120,00'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <CardMui
                            image='https://source.unsplash.com/random'
                            title="Produtos"
                            subtitle='R$ 120,00'
                        />
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

// sx={{ marginTop: 10, padding: '8px, 10px, 6px' }} 

export default Home

