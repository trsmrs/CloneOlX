import { DeleteForever, ErrorSharp } from '@mui/icons-material'
import { forwardRef } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
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
    MenuItem,
    Input,


} from '@mui/material'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { IMaskInput } from 'react-imask'
import PropTypes from 'prop-types'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'

import TemplateDefault from '../../src/templates/Default'
import { number } from 'yup/lib/locale'
import { color, style } from '@mui/system'



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

 const onFocus = (stil)=> {
    stil:{
        border: ' black'
    }
  }

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



    const [maskVal, setMaskValues] = useState({
        textmask: ''

    });

    const handleMaskDollar = (event) => {
        setMaskValues({
            ...maskVal,
            [event.target.name]: event.target.value,
        });
    };


    const handleRemoveFile = (fileName) => {
        const newFiles = files.filter(file => file.name !== fileName)
        setFiles(newFiles)
    }

    const ValidationSchema = yup.object().shape({
        title: yup.string().required('Campo obrigatório')
            .min(6, 'Digite pelo menos seis caracteres')
            .max(100, 'Limite excedido'),

        category: yup.string().required('Campo obrigatório'),
        dollar: yup.number().required('Digite um valor'),
        nome: yup.string().required('Digite seu nome'),
        email: yup.string().required('Digite um email válido'),
        descript: yup.string()
        .min(50, 'Escreva no mínimo cinquenta caracteres')
        .required('Necessário deixar uma descrição do produto.'),

    })

    return (
        <TemplateDefault>
            <Formik
                initialValues={{
                    title: '',
                    category: '',
                    dollar: '',
                    nome: '',
                    tel: '',
                    email: '',
                    descript: '',
                }}
                validationSchema={ValidationSchema}

                onSubmit={(values) => {
                    console.log('ok foi', values)
                }}
            >
                {
                    ({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                    }) => {
                        console.log(errors)
                        return (
                            <form onSubmit={handleSubmit}>
                                <Container maxWidth='md'>
                                    <Container sx={{ backgroundColor: "#e8e3e9", padding: '10px 0 6px', marginTop: '100px' }} maxWidth='md'>
                                        <Typography component='h1' variant="h2" align='center'>
                                            Publicar Anúncio
                                        </Typography>
                                        <Typography component='h5' variant="h5" align='center'>
                                            Quanto mais detalhado, melhor!
                                        </Typography>
                                    </Container>
                                    <Container maxWidth="md">
                                        <Box sx={{ bgcolor: 'primary', padding: '4px' }}>
                                            
                                            <FormControl error={errors.title} fullWidth >
                                                <InputLabel sx={{fontWeight: 400, color:'#000'}}>Título do Anúncio</InputLabel>
                                                <OutlinedInput sx={{ bgcolor: '#e8e3e9', "&:hover":{border:'1px solid black' }}}
                                                    placeholder="Ex..: Processador Duron 800 Mhz"
                                                    name='title'
                                                    value={values.title}
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.title}
                                                </FormHelperText>
                                            </FormControl>

                                            <br /> <br />
                                            
                                            <FormControl error={errors.category} fullWidth>
                                            <InputLabel sx={{fontWeight: 400, color:'#000'}}>Categoria</InputLabel>
                                                <Select sx={{ bgcolor: '#e8e3e9', "&:hover":{ border:' 1px solid black'}}}
                                                    name='category'
                                                    value={values.category}
                                                    variant='outlined'
                                                    fullWidth
                                                    onChange={handleChange}
                                                >

                                                    <MenuItem value="Agricultura">Agricultura</MenuItem>
                                                    <MenuItem value="Lazer">Lazer</MenuItem>
                                                    <MenuItem value="Moda">Moda</MenuItem>
                                                    <MenuItem value="Instrumentos musicais">Instrumentos musicais</MenuItem>
                                                    <MenuItem value="Automotivo">Automotivo</MenuItem>
                                                    <MenuItem value="Computadores">Computadores</MenuItem>
                                                    <MenuItem value="Eletrônicos">Eletrônicos</MenuItem>
                                                    <MenuItem value="Celulares">Celulares</MenuItem>
                                                    <MenuItem value="Outros">Outros</MenuItem>
                                                </Select>
                                                <FormHelperText>
                                                    {errors.category}
                                                </FormHelperText>
                                            </FormControl>
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
                                            <FormControl error={errors.descript} fullWidth variant='outlined'>
                                            <InputLabel sx={{fontWeight: 400, color:'#000'}}>Descrição do Produto</InputLabel>
                                            <OutlinedInput sx={{ bgcolor: '#e8e3e9', "&:hover":{ border:' 1px solid black'}}}
                                                multiline
                                                rows={6}
                                                 
                                            />
                                            <FormHelperText>
                                                    {errors.descript}
                                                </FormHelperText>
                                            </FormControl>
                                        </Box>
                                    </Container>

                                    <Container maxWidth='md'>
                                        <Box sx={{ padding: '4px' }}>
                                            <Typography component='h6' variant="h6" align='left' marginTop={3} gutterBottom>
                                                Preço
                                            </Typography>
                                            <br />
                                            <FormControl error={errors.dollar} fullWidth variant='outlined'>
                                                <InputLabel>Valor</InputLabel>
                                                <OutlinedInput sx={{ bgcolor: '#e8e3e9', "&:hover":{ border:' 1px solid black'}}}
                                                    onChange={() => { }}
                                                    startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                                                    label="react"
                                                    name='dollar'

                                                />
                                                <FormHelperText>
                                                    {errors.dollar}
                                                </FormHelperText>
                                            </FormControl>
                                        </Box>
                                    </Container>

                                    <Container sx={{marginTop: 10}} maxWidth="md">
                                        <Box sx={{ padding: '4px' }}>
                                            <Typography component='h6' variant="h6" align='center' gutterBottom>
                                                Dados para o Contato
                                            </Typography>
                                            <FormControl error={errors.nome} fullWidth variant='outlined'>
                                            <InputLabel sx={{fontWeight: 400, color:'#000'}}>Nome</InputLabel>
                                                <OutlinedInput sx={{ bgcolor: '#e8e3e9', "&:hover":{ border:' 1px solid black'}}}
                                                    name='nome'

                                                    onChange={() => { }}
                                                    label="react"

                                                />
                                                <FormHelperText>
                                                    {errors.nome}
                                                </FormHelperText>
                                            </FormControl>
                                            <br /><br />

                                            <FormControl fullWidth variant="outlined">
                                            <InputLabel sx={{fontWeight: 400, color:'#000'}}>Telefone</InputLabel>
                                                <OutlinedInput sx={{ bgcolor: '#e8e3e9', "&:hover":{ border:' 1px solid black'}}}

                                                    value={maskVal.textmask}
                                                    placeholder='( )___ ____'
                                                    onChange={handleMaskDollar}
                                                    name="textmask"
                                                    id="formatted-text-mask-input"
                                                    inputComponent={TextMaskCustom}
                                                    
                                                />

                                            </FormControl>

                                            <br /><br />

                                            <FormControl error={errors.email} fullWidth variant="outlined">
                                            <InputLabel sx={{fontWeight: 400, color:'#000'}}>E-mail</InputLabel>
                                                <OutlinedInput sx={{ bgcolor: '#e8e3e9', "&:hover":{ border:' 1px solid black'}}}
                                                    onChange={() => { }}
                                                    name='email'

                                                />
                                                <FormHelperText>
                                                    {errors.email}
                                                </FormHelperText>
                                            </FormControl>
                                            <br /><br />

                                        </Box>
                                    </Container>

                                    <Container maxWidth="md">
                                        <Box textAlign="right">
                                            <Button
                                                type='submit'
                                                variant='contained'
                                                color='secondary'
                                            >
                                                Publicar Anúncio
                                            </Button>
                                        </Box>
                                    </Container>
                                </Container>
                            </form>
                        )
                    }
                }
            </Formik>
        </TemplateDefault>

    )
}





export default Publish