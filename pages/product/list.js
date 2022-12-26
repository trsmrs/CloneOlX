import { Container, Typography, Paper, InputBase, IconButton, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import TempladeDefault from '../../src/templates/Default'
import CardMui from '../../src/components/Card';

const List = () => {
    return (
        <TempladeDefault>

            <Container sx={{ marginTop: 10, padding: '8, 10, 6' }} maxWidth='md'>
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
            <Container sx={{ bgcolor: '#fff', height: '100%', marginTop: 10, paddingBottom: 5 }}>
                <Typography variant='h6' component='h3'>Anúncios</Typography>
                <Typography variant='span' component='body2'>Produtos encontrados</Typography>
                <Grid container spacing={4} marginTop={1}>
                    <Grid item xs={12} sm={6} md={4}>
                        <CardMui
                            image='https://source.unsplash.com/random?a=2'
                            title="Produtos"
                            subtitle='R$ 120,00'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <CardMui
                            image='https://source.unsplash.com/random?a=5'
                            title="Produtos"
                            subtitle='R$ 120,00'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <CardMui
                            image='https://source.unsplash.com/random?a=1'
                            title="Produtos"
                            subtitle='R$ 120,00'
                        />
                    </Grid>
                </Grid>

            </Container>

        </TempladeDefault>
    )
}



export default List