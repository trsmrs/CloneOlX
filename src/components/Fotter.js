import { createTheme, Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Box, Container } from "@mui/system"
import Link from "next/link"



const styles = makeStyles((theme) =>({
    footer:{
    [theme.breakpoints.up('sm')]:{
       paddingTop: theme.spacing(6),
       paddingBottom: theme.spacing(6),
       backgroundColor: 'red' 
    }
}
}))

const Footer = () =>{
 const classes = styles()

    
    return (

        <Container sx={{borderTop: '1px solid #fff',
        paddingTop: {md:2, sm:6, xs: 8},
        paddingBottom: {md:3, sm: 6, xs: 8}}}
        maxWidth="lg"
        component='footer'
         >
            <Grid container spacing={3}>
             <Grid item xs={6} sm={3}>
                <Box textAlign='center'>
                    <Link href="/"><Typography>Quem somos</Typography></Link>
                </Box>
             </Grid>

             <Grid item xs={6} sm={3}>
                <Box textAlign='center'>
                    <Link href="/"><Typography>Nossos parceiros</Typography></Link>
                </Box>
             </Grid>

             <Grid item xs={6} sm={3}>
                <Box textAlign='center'>
                    <Link href="/"><Typography variant="subtitle1">Nossas unidades</Typography></Link>
                </Box>
             </Grid>
             <Grid item xs={6} sm={3}>
                <Box textAlign='center'>
                    <Link href="/"><Typography variant="subtitle1">Mapa</Typography></Link>
                </Box>
             </Grid>
            </Grid>
        </Container>


    )
}


export default Footer