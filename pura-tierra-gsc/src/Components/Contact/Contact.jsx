import React from 'react'
import './Contact.css'
import mail from '../../assets/mail.png'
import phone from '../../assets/telephone.png'
import location from '../../assets/location.png'
import clock from '../../assets/clock.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando...");
    const formData = new FormData(event.target);

    formData.append("access_key", "6aed28cf-87e8-447c-904b-9406ba7b430d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Formulario enviado con éxito!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Ponete en contacto</h3>
            <p>¿Tenés alguna pregunta o necesitás más información? ¡Estamos para ayudarte! No dudes en ponerte en contacto con nosotros. Podes llamarnos, enviarnos un correo electrónico, o llenar el formulario de contacto a continuación.</p>
            <ul>
                <li><img src={mail} alt="" />contacto@puratierra.com.ar</li>
                <li><img src={phone} alt="" />+54 9 11 2066-1958</li>
                <li><img src={location} alt="" />Tte. Manuel Origone 151, Villa Tesei, Provincia de Buenos Aires</li>
                <li><img src={clock} alt="" />Lun a Vier - 8 a 18</li>
              </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Tu nombre</label>
                <input type="text" name='name' placeholder='Ingresá tu nombre' required />
                <label>Teléfono</label>
                <input type="tel" name="phone" placeholder='Ingresá tu teléfono' required />
                <label>Escribinos tu mensaje acá :)</label>
                <textarea name="message" id="" rows='6' placeholder='Ingresá tu mensaje' required></textarea>
                <button type='submit' className='btn dark-btn'>Enviar</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact