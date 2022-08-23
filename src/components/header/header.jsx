import React from 'react';
import Button from '../button/button';

import './header.css'

const Header = () => {
  return ( 
    <div className='header-container'>
      <p classe="textoUm">uma seleção de produtos</p>
      <p classe="textoDois">especiais para você</p>
      <p classe="textoTres">todos os produtos dessa lista foram selecionados a partir da sua navegação. Aproveite!</p>

      <div className='header-botoes'>
        <Button texto='Conheça a Linx'></Button>
        <Button texto='Ajude o aldoritmo'></Button>
        <Button texto='Seus produtos'></Button>
        <Button texto='Compartilhe'>Compartilhe</Button>
      </div>

    </div>
   );
}
 
export default Header;