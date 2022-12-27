import * as yup from 'yup'

const initialValues = {
    
        name: '',
        email: '',
        passw: '',
        passwConf: '',
    
}



const validationSchema = yup.object().shape({
   name: yup.string()
   .required('Campo obrigatório'),

   email: yup.string()
   .required('Campo obrigatório')
   .email('Digite um e-mail válido'),

   passw: yup.string()
   .required('Campo obrigatório')
   .min(8, 'Digite no mínimo 8 caracteres'),

   passwConf: yup.string()
   .required('Campo obrigatório')
   .oneOf([yup.ref('passw'), null], 'as senhas nao coincidem'),
})


export {
    initialValues,
    validationSchema,
}