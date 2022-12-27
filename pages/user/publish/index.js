import { Formik } from 'formik'
import {
    Box,
    Button,
    Container,
    Select,
    Typography,
    OutlinedInput,
    InputAdornment,
    MenuItem,
} from '@mui/material'
import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import { NumericFormat } from 'react-number-format'

import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema, TextMaskCustom } from './formValues'
import FileUploads from '../../../src/components/FileUploads'


const Publish = () => {
    const [maskVal, setMaskValues] = useState({});
   
    const handleMaskPhone = (event) => {
        setMaskValues({
            ...maskVal,
            [event.target.name]: event.target.value,
        });
       
    };

    return (
        <TemplateDefault>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}

                onSubmit={(values) => {
                    console.log('ok foi', values)
                }}
            >
                {
                    ({
                        touched,
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                       
                    }) => {

                        // FileUploads

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

                                            <FormControl error={errors.title && touched.title} fullWidth >
                                                <InputLabel sx={{ fontWeight: 400, color: '#000' }}>Título do Anúncio</InputLabel>
                                                <OutlinedInput sx={{ bgcolor: '#e8e3e9' }}
                                                    placeholder="Ex..: Processador Duron 800 Mhz"
                                                    name='title'
                                                    value={values.title}
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.title && touched.title ? errors.title : null}
                                                </FormHelperText>
                                            </FormControl>

                                            <br /> <br />

                                            <FormControl error={errors.category && touched.category} fullWidth>
                                                <InputLabel sx={{ fontWeight: 400, color: '#000' }}>Categoria</InputLabel>
                                                <Select sx={{ bgcolor: '#e8e3e9' }}
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
                                                    {errors.category && touched.category ? errors.category : null}
                                                </FormHelperText>
                                            </FormControl>
                                        </Box>
                                    </Container>

                                    <Container maxWidth="md">
                                        <FileUploads
                                         files={values.files}
                                         errors={errors.files}
                                         touched={touched.files}
                                         setFieldValue={setFieldValue}
                                        />
                                    </Container>

                                    <Container maxWidth="md">
                                        <Box sx={{ padding: '4px' }}>
                                            <FormControl error={errors.descript && touched.descript} fullWidth variant='outlined'>
                                                <InputLabel sx={{ fontWeight: 400, color: '#000' }}>Descrição do Produto</InputLabel>
                                                <OutlinedInput sx={{ bgcolor: '#e8e3e9' }}
                                                    name='descript'
                                                    multiline
                                                    rows={6}
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.descript && touched.descript ? errors.descript : null}
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
                                            <FormControl sx={{ bgcolor: '#e8e3e9' }} error={errors.dollar && touched.dollar} fullWidth >
                                                <InputLabel>Valor</InputLabel>
                                                <NumericFormat customInput={OutlinedInput} thousandSeparator={true}
                                                    onChange={handleChange}
                                                    startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                                                    name='dollar'

                                                />
                                                <FormHelperText>
                                                    {errors.dollar && touched.dollar ? errors.dollar : null}
                                                </FormHelperText>
                                            </FormControl>
                                        </Box>
                                    </Container>

                                    <Container sx={{ marginTop: 10 }} maxWidth="md">
                                        <Box sx={{ padding: '4px' }}>
                                            <Typography component='h6' variant="h6" align='center' gutterBottom>
                                                Dados para o Contato
                                            </Typography>
                                            <FormControl error={errors.names && touched.names} fullWidth variant='outlined'>
                                                <InputLabel sx={{ fontWeight: 400, color: '#000' }}>Nome</InputLabel>
                                                <OutlinedInput sx={{ bgcolor: '#e8e3e9' }}
                                                    name='names'
                                                    onChange={handleChange}
                                                />
                                                <FormHelperText>
                                                    {errors.names && touched.names ? errors.names : null}
                                                </FormHelperText>
                                            </FormControl>
                                            <br /><br />

                                            <FormControl fullWidth variant="outlined">
                                                <InputLabel sx={{ fontWeight: 400, color: '#000' }}>Telefone</InputLabel>
                                                <OutlinedInput sx={{ bgcolor: '#e8e3e9' }}

                                                    name="textmask"
                                                    value={maskVal.textmask}

                                                    onChange={handleMaskPhone}
                                                    onBlur={handleChange}
                                                    id="formatted-text-mask-input"
                                                    inputComponent={TextMaskCustom}

                                                />

                                            </FormControl>

                                            <br /><br />

                                            <FormControl error={errors.email && touched.email} fullWidth variant="outlined">
                                                <InputLabel sx={{ fontWeight: 400, color: '#000' }}>E-mail</InputLabel>
                                                <OutlinedInput sx={{ bgcolor: '#e8e3e9' }}
                                                    onChange={handleChange}
                                                    name='email'

                                                />
                                                <FormHelperText>
                                                    {errors.email && touched.email ? errors.email : null}
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