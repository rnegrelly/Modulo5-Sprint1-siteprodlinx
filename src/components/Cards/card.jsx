import React from 'react';
import Button from '../button/button';

import './card.css'

const Card = (props) => {
  return ( 
    <div className='card'>
      <img className='imagem-prod' src={props.src} />
      <p className='nome-prod'>{props.nome}</p>
      <p className='descricao-prod'>{props.descricao}</p>
      <p className='preco-inicial'>{props.oldPrice}</p>
      <p className='preco-promo'>{props.promo}</p>
      <p className='parcelas-card'>{props.parcelas}</p>
      <Button btexto='Comprar' />
    </div>
   );
}
 
export default Card;