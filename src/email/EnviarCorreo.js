import { send } from 'emailjs-com'

const EnviarCorreo = (props) => {
    send('service_c2qrk7q', 'template_goxz0ml', props, 'user_gjB2OcgTfvhXOG5nEPbcj')
    .then((result) => {
        console.log('Result', result.text);
    }, (error) => {
        console.log('Error', error.text);
    });
}

export default EnviarCorreo;