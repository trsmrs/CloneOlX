import { Container } from '@mui/system'
import { Formik } from 'formik'
import  {useHistory}  from 'react-router-dom'
import { useRouter } from 'next/router'
import axios from 'axios'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
  CircularProgress,
} from '@mui/material'


import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from '../formValues'
import useToasty from '../../../src/contexts/Toasty'

const Signup = () => {
  const { setToasty } = useToasty()
  const router = useRouter() 
 
  
  const handleFormSubmit = async values => {
    const response = await axios.post('/api/users', values)
    
    if (response.data.success) {
      setToasty({
        open: true,
        severity: 'success',
        text: 'Cadastro realizado com Sucesso!'
      })
     
      router.push('/auth/signin')
      
    }
  }


  return (
    <TemplateDefault>

      <Container sx={{ marginTop: 10, padding: '8, 10, 6' }} component='main' maxWidth='sm'>
        <Typography component='h1' variant='h3' align='center' color='#000' marginBottom={4}>
          Crie sua Conta
        </Typography>
        <Typography component='h5' variant='h5' align='center' color='#000' marginBottom={4}>
          Anuncie para todo o Brasil
        </Typography>
      </Container>

      <Container sx={{ bgcolor: '#fff', height: '400px', borderRadius: '5px' }} maxWidth='md'>
        <Box>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {
              ({
                touched,
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <FormControl sx={{ marginTop: '20px' }} error={errors.name && touched.name} fullWidth >
                      <InputLabel sx={{ fontWeight: 400, color: '#000' }}>Nome</InputLabel>
                      <OutlinedInput sx={{ bgcolor: '#e8e3e9' }}

                        name='name'
                        value={values.name}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.name && touched.name ? errors.name : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl sx={{ marginTop: '20px' }} error={errors.email && touched.email} fullWidth >
                      <InputLabel sx={{ fontWeight: 400, color: '#000' }}>E-mail</InputLabel>
                      <OutlinedInput sx={{ bgcolor: '#e8e3e9' }}

                        name='email'
                        type='email'
                        value={values.email}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.email && touched.email ? errors.email : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl sx={{ marginTop: '20px' }} error={errors.passw && touched.passw} fullWidth >
                      <InputLabel sx={{ fontWeight: 400, color: '#000' }}>Senha</InputLabel>
                      <OutlinedInput sx={{ bgcolor: '#e8e3e9' }}

                        name='passw'
                        type='password'
                        value={values.passw}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.passw && touched.passw ? errors.passw : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl sx={{ marginTop: '20px' }} error={errors.passwConf && touched.passwConf} fullWidth >
                      <InputLabel sx={{ fontWeight: 400, color: '#000' }}>Confirmação de Senha</InputLabel>
                      <OutlinedInput sx={{ bgcolor: '#e8e3e9' }}

                        name='passwConf'
                        type='password'
                        value={values.passwConf}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.passwConf && touched.passwConf ? errors.passwConf : null}
                      </FormHelperText>
                    </FormControl>

                    {
                      isSubmitting
                        ? (
                          <CircularProgress sx={{ display: 'block', margin: '10px auto', color: '#9c27b0' }} />
                        ) : (
                          <Button sx={{ marginTop: '20px' }}
                            fullWidth type="submit"
                            variant='contained'
                            color='secondary'
                          >Criar Cadastro</Button>
                        )
                    }

                  </form>
                )  //#9c27b0
              }
            }
          </Formik>
        </Box>
      </Container>

    </TemplateDefault>
  )
}


export default Signup