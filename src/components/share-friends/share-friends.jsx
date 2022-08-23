import React from 'react';
import Button from '../button/button';


import './share-friends.css'

const Share = () => {
  return ( 
    <div className='share-with-friends'>
      <p className='text-share-friends'>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
      <div className='input-share-friends'>
        
        <label>Nome do seu amigo<input type='text'></input></label>
        <label>Email<input type='text'></input></label>
        
      </div>
      <div className='btn-share-friends'>
        <Button texto ='Enviar agora'></Button>
      </div>
    </div>
   );
}
 
export default Share;