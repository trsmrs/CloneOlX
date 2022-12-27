import * as yup from 'yup'
import { IMaskInput } from 'react-imask';
import { forwardRef } from 'react'
import PropTypes from 'prop-types'


const initialValues = {
    title: '',
    category: '',
    dollar: '',
    names: '',
    textmask: {},
    email: '',
    descript: '',
    files: [],
}

const validationSchema = yup.object().shape({
    title: yup.string().required('Campo obrigatório')
        .min(6, 'Digite pelo menos seis caracteres')
        .max(100, 'Limite excedido'),

    category: yup.string().required('Campo obrigatório'),
    dollar: yup.string().required('Digite um valor'),
    names: yup.string().required('Digite seu nome'),
    // textmask: yup.string(),
    email: yup.string().required('Digite um email válido'),
    descript: yup.string()
        .min(50, 'Escreva no mínimo cinquenta caracteres')
        .required('Necessário deixar uma descrição do produto.'),
    files: yup.array().min(1, 'Selecione pelo menos uma imagem')
        .required('Cambo obrigatório')
})


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

 



export {
    initialValues,
    validationSchema,
    TextMaskCustom,
    
}