import { DeleteForever } from '@mui/icons-material'
import { forwardRef } from 'react'
import {
    Box,
    Button,
    Container,
    IconButton,
    Select,
    TextField,
    Typography,
    OutlinedInput,
    InputAdornment,
} from '@mui/material'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import TemplateDefault from '../../src/templates/Default'

import { IMaskInput } from 'react-imask';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NumberFormat from 'react-number-format';



const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="(#0) 0000-00000"
            definitions={{
                '#': /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};


const Publish = () => {
    const [files, setFiles] = useState([])
    const [valor, setValor] = useState();

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'images/*', onDrop: (acceptFile) => {
            const newFiles = acceptFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })

            setFiles([
                ...files,
                ...newFiles])
        }
    })



    const [values, setValues] = useState({
        textmask: ''
        
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };


    const handleRemoveFile = (fileName) => {
        const newFiles = files.filter(file => file.name !== fileName)
        setFiles(newFiles)
    }


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
                            value={valor}
                            variant='filled'
                            fullWidth
                            onChange={(e) => setValor(e.target.value)}
                            inputProps={{
                                name: 'age',
                            }}
                        >
                            <option value="">Selecione</option>
                            <option id='1' value="Agricultura">Agricultura</option>
                            <option id='2' value="Lazer">Lazer</option>
                            <option id='3' value="Moda">Moda</option>
                            <option id='4' value="Instrumentos musicais">Instrumentos musicais</option>
                            <option id='5' value="Automotivo">Automotivo</option>
                            <option id='6' value="Computadores">Computadores</option>
                            <option id='7' value="Eletrônicos">Eletrônicos</option>
                            <option id='8' value="Celulares">Celulares</option>
                            <option id='9' value="Outros">Outros</option>
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
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Box sx={{
                                width: 200,
                                height: 150,
                                bgcolor: '#e8e3e9',
                                border: '2px dashed black',
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                textAlign: 'center',
                                cursor: 'pointer'
                            }}{...getRootProps()}>
                                <input {...getInputProps()} />
                                <Typography variant='body2' color="#000" >
                                    Clique para adicionar ou arraste uma imagem aqui.
                                </Typography>
                            </Box>
                            {
                                files.map((file, index) => (
                                    <Box key={file.name} sx={{
                                        backgroundImage: `url(${file.preview})`,
                                        position: 'relative',
                                        margin: '0px 15px 15px 0px',
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
                                            {
                                                index === 0 ?
                                                    <Box sx={{ position: 'absolute', padding: '6px 10px', bottom: 0, left: 0, bgcolor: '#9c27b0' }}>
                                                        <Typography variant='body' color='#fff'>
                                                            Principal
                                                        </Typography>
                                                    </Box>
                                                    : null
                                            }

                                            <IconButton sx={{ width: '20%', height: '20%', marginLeft: '80px', marginTop: '50px' }}
                                                onClick={() => { handleRemoveFile(file.name) }}
                                            >
                                                <DeleteForever sx={{
                                                    display: 'none',
                                                    color: '#fff'

                                                }}
                                                    className='delBtn' fontSize='large' />
                                            </IconButton>
                                        </Box>
                                    </Box>

                                ))
                            }

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

                <Container maxWidth='md'>
                    <Box sx={{ padding: '4px' }}>
                        <Typography component='h6' variant="h6" align='center' gutterBottom>
                            Preço
                        </Typography>
                        <br />
                        <FormControl fullWidth variant='outlined'>
                            <InputLabel>Valor</InputLabel>
                            <OutlinedInput sx={{marginBottom: 10}}
                            onChange={() => { }}
                            startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                            labelWidth={40}
                            label="react"
                            />
                        </FormControl>
                    </Box>
                </Container>

                <Container maxWidth="md">
                    <Box sx={{ padding: '4px' }}>
                        <Typography component='h6' variant="h6" align='center' gutterBottom>
                            Dados para o Contato
                        </Typography>
                        <FormControl fullWidth variant='outlined'>
                            <InputLabel>Nome</InputLabel>
                            <OutlinedInput
                                onChange={() => { }}
                                label="react"
                                
                            />
                        </FormControl>
                        <br /><br />

                        <FormControl fullWidth variant="outlined" sx={{ marginTop: 1 }}>
                            <InputLabel>Tel</InputLabel>
                            <OutlinedInput
                                value={values.textmask}
                                placeholder='( )___ ____'
                                onChange={handleChange}
                                name="textmask"
                                id="formatted-text-mask-input"
                                inputComponent={TextMaskCustom}
                                label="react"
                            />
                        </FormControl>

                        <br /><br />

                        <FormControl fullWidth variant="outlined">
                            <InputLabel>E-mail</InputLabel>
                            <OutlinedInput
                                onChange={() => { }}
                                label="react"
                            />
                        </FormControl>
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