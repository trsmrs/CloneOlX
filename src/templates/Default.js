import Header from '../components/Header'
import Footer from '../components/Fotter'
import { Box } from '@mui/material'


const Default = ({children}) =>{
    return (
        <>
        
        <Header />
        <Box sx={{padding:"6px 0px 56px"}}>
        {children}
        </Box>
        
        <Footer></Footer>
        </>
    )
}


export default Default