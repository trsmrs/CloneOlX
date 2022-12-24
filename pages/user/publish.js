import { DeleteForever, Palette } from '@mui/icons-material'
import {
    Box,
    Button,
    Container,
    IconButton,
    Select,
    TextField,
    Typography,
} from '@mui/material'
import { useTheme } from "@mui/material/styles"

import TemplateDefault from '../../src/templates/Default'



const Publish = () => {
    const theme = useTheme();
    mask: { }
    return (

        <TemplateDefault>
            <Container>
                <Container sx={{ backgroundColor: "#e8e3e9", padding: '10px 0 6px', marginTop: '100px' }} maxWidth='sm'>
                    <Typography component='h1' variant="h2" align='center'>
                        Publicar Anúncio
                    </Typography>
                    <Typography component='h5' variant="h5" align='center'>
                        Quanto mais detalhado, melhor!
                    </Typography>
                </Container>

                <Container maxWidth="md">
                    <Box sx={{ bgcolor: 'primary', padding: '4px' }}>
                        <Typography component='h6' variant="h6" align='center' gutterBottom>
                            Título do Anúncio
                        </Typography>
                        <TextField
                            label="Ex..: Processador Duron 800 Mhz"
                            size='small'
                            variant='filled'
                            fullWidth
                        />
                        <br /> <br />
                        <Select
                            native
                            value=''
                            variant='filled'
                            fullWidth
                            onChange={() => { }}
                            inputProps={{
                                name: 'age',
                            }}
                        >
                            <option value="">Selecione</option>
                            <option value="{1}">Agricultura</option>
                            <option value="{2}">Lazer</option>
                            <option value="{3}">Moda</option>
                            <option value="{4}">Instrumentos musicais</option>
                            <option value="{5}">Automotivo</option>
                            <option value="{6}">Celulares</option>
                            <option value="{6}">Outros</option>
                        </Select>
                    </Box>
                </Container>

                <Container maxWidth="md">
                    <Box sx={{ backgroundColor: '#e8e3e9', padding: '4px' }}>
                        <Typography component='h6' variant="h6" align='center' gutterBottom>
                            Imagens
                        </Typography>
                        <Typography component='div' variant="body2" align='center'>
                            A Primeira imagem será a foto principal do anúncio.
                        </Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{
                                width: 200,
                                height: 150,
                                bgcolor: '#e8e3e9',
                                border: '2px dashed black',
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                textAlign: 'center'
                            }}>
                                <Typography variant='body2' color="#000" >
                                    Clique para adicionar ou arraste uma imagem aqui.
                                </Typography>
                            </Box>
                            <Box sx={{
                                backgroundImage: 'url(https://source.unsplash.com/rando)',
                                position: 'relative',
                                width: '200px',
                                height: '150px',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                            }}
                            >

                                <Box sx={{
                                    height: '100%',
                                    "&:hover": {
                                        
                                        display: 'flex',
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        '& .delBtn': { display: 'flex' }
                                    }
                                }}
                                >
                                    <Box sx={{position: 'absolute',padding:'6px 10px', bottom: 0, left: 0, bgcolor: '#9c27b0'}}>
                                    <Typography  variant='body' color='#fff'>
                                        Principal
                                    </Typography>
                                    </Box>
                                    <IconButton sx={{width:'20%', height: '20%', marginLeft:'80px', marginTop:'50px'}}>
                                        <DeleteForever sx={{
                                            display: 'none',
                                            color: '#fff'
                                           
                                        }}
                                            className='delBtn' fontSize='large' />
                                    </IconButton>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                </Container>

                <Container maxWidth="md">
                    <Box sx={{ padding: '4px' }}>
                        <Typography component='h6' variant="h6" align='center' gutterBottom>
                            Descrição
                        </Typography>
                        <Typography component='div' variant="body2" align='center'>
                            Descreva os detalhes do produto.
                        </Typography>
                        <TextField sx={{ bgcolor: '#e8e3e9' }}
                            multiline
                            rows={6}
                            variant='outlined'
                            fullWidth
                        />
                    </Box>
                </Container>

                <Container maxWidth="md">
                    <Box sx={{ padding: '4px' }}>
                        <Typography component='h6' variant="h6" align='center' gutterBottom>
                            Dados para o Contato
                        </Typography>

                        <TextField sx={{ bgcolor: '#e8e3e9' }}
                            label='Nome'
                            variant='outlined'
                            size='small'
                            fullWidth
                        />
                        <br /><br />

                        <TextField sx={{ bgcolor: '#e8e3e9' }}
                            label='Telefone'
                            variant='outlined'
                            size='small'
                            fullWidth
                        />
                        <br /><br />

                        <TextField sx={{ bgcolor: '#e8e3e9' }}
                            label='E-mail'
                            variant='outlined'
                            size='small'
                            fullWidth
                        />
                        <br /><br />
                    </Box>
                </Container>

                <Container maxWidth="md">
                    <Box textAlign="right">
                        <Button
                            variant='contained'
                            color='secondary'
                        >
                            Publicar Anúncio
                        </Button>
                    </Box>
                </Container>
            </Container>
        </TemplateDefault>

    )
}





export default Publish