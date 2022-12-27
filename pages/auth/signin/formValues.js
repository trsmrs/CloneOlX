import * as yup from 'yup'

const initialValues = {
    
       
        email: '',
        passw: '',
       
    
}



const validationSchema = yup.object().shape({
  
   email: yup.string()
   .required('Campo obrigatório')
   .email('Digite um e-mail válido'),

   passw: yup.string()
   .required('Campo obrigatório')
   .min(8, 'Digite no mínimo 8 caracteres'),

})


export {
    initialValues,
    validationSchema,
}