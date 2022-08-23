import React from 'react';
import Button from '../button/button';
import './formsCad.css'


const FormsCad = () => {
  return ( 
    <form className='formulario-cadastro'>
      <label>Seu nome<input type='text'></input></label>
      <label>E-mail<input type='text'></input></label>
      <label>CPF<input type='text'></input></label>

      <div className='radio-button'>

      <label>Masculino<input type='radio' name='genero'></input></label>
      <label>Feminino<input type='radio' name='genero'></input></label>  
      
      </div>

      <Button className='botaoForulario' texto="Enviar" />

    </form>
   );
}
 
export default FormsCad;