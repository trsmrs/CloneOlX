import {
    Box,
    Button,
    Container,
    Select,
    TextField,
    Typography,
} from '@mui/material'

import TemplateDefault from '../../src/templates/Default'


const Publish = () => {

    return (

        <TemplateDefault>
            <Container sx={{ padding: '10px 0 6px', marginTop: '100px' }} maxWidth='sm'>
                <Typography component='h1' variant="h2" align='center'>
                    Publicar Anúncio
                </Typography>
                <Typography component='h5' variant="h5" align='center'>
                    Quanto mais detalhado, melhor!
                </Typography>
            </Container>

            <Container maxWidth="md">
                <Box sx={{ backgroundColor: 'white', padding: '4px' }}>
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
                <Box sx={{ backgroundColor: 'white', padding: '4px' }}>
                    <Typography component='h6' variant="h6" align='center' gutterBottom>
                        Imagens
                    </Typography>
                    <Typography component='div' variant="body2" align='center'>
                        A Primeira imagem será a foto principal do anúncio.
                    </Typography>
                </Box>
            </Container>

            <Container maxWidth="md">
                <Box sx={{ backgroundColor: 'white', padding: '4px' }}>
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
                <Box sx={{ backgroundColor: 'white', padding: '4px' }}>
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
        </TemplateDefault>
    )
}





export default Publish