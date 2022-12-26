import {
    Box,
    Container,
    Grid,
    Typography,
    Chip,
    CardHeader,
    Avatar,
    Card,
    CardMedia,

} from "@mui/material"
import Link from "next/link"
import Carousel from "react-material-ui-carousel"



import TemplateDefault from '../src/templates/Default'



const Products = () => {
    return (
        <TemplateDefault>
            <Container maxWidth='lg' sx={{ marginTop: 20 }}>
                <Grid container spacing={3}>
                    <Grid item xs={8}>

                        <Box sx={{ bgcolor: '#fff', marginBottom: 3 }}>
                            <Carousel autoPlay={false}
                                animation="slide"
                                navButtonsAlwaysVisible='true'
                                navButtonsProps={{
                                    style: {
                                        backgroundColor: 'white',
                                        color: 'black',
                                        marginLeft: 20,
                                        marginRight: 23

                                    }
                                }} >
                                <Card sx={{ height: '100%', width: '95%', marginTop: 1, marginLeft: 2 }}>
                                    <CardMedia sx={{ paddingTop: '50%' }}
                                        image='https://source.unsplash.com/random?a=1'
                                        title="Título aqui"
                                    />
                                </Card>
                                <Card sx={{ height: '100%', width: '95%', marginTop: 1, marginLeft: 2 }}>
                                    <CardMedia sx={{ paddingTop: '50%' }}
                                        image='https://source.unsplash.com/random/?a=2'
                                        title="Título aqui"
                                    />
                                </Card>
                            </Carousel>
                        </Box>
                        <Box sx={{ bgcolor: '#fff', textAlign: 'left', marginBottom: '15px' }}>
                            <Typography component='span' variant="caption">Publicado xx/xx/xxxx</Typography>
                            <Typography sx={{ margin: "15px 0" }} component='h4' variant="h4">HeadSet Wireless</Typography>
                            <Typography sx={{ fontWeight: 'bold', marginBottom: '15px' }} component='h4' variant="h4">R$ 675,93</Typography>
                        </Box>
                        <Box sx={{ bgcolor: '#fff', textAlign: 'left' }}>
                            <Typography component='h6' variant="h6">Descrição</Typography>
                            <Typography component='p' variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum condimentum bibendum. Fusce eu turpis scelerisque, mattis purus a, fermentum orci. In tempor erat tortor, lacinia suscipit diam posuere eu. Quisque lectus erat, consequat a volutpat ut, laoreet vitae tortor. Mauris eu tellus vitae lectus varius facilisis. Vestibulum at elit in ligula dictum posuere sed nec orci. Proin sollicitudin justo ex, sit amet scelerisque massa cursus id. </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={0} sx={{ padding: '10px 4px' }}>
                            <CardHeader
                                avatar={
                                    <Avatar>T</Avatar>
                                }
                                title='Tiago Machado'
                                subheader="trsminfo@gmail.com"
                            />
                        </Card>
                        <Box sx={{ bgcolor: '#fff', marginTop: 4, padding: '5px 2px' }}>
                            <Typography component='h6' variant="h6">Localzação</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>


    )
}



export default Products