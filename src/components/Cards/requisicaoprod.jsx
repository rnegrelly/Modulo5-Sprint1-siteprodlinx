import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from '../button/button';
import Card from './card'

import './requisicaoprod.css'

const Produtos = () => {

  const [req, setReq] = useState([])
  const [page, setPage] = useState([])

     
  useEffect(()=>{
    const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`

    axios
    .get(url)
    .then((response) => {
      setPage(response.data.nextPage)
      setReq(response.data.products)
    })
    .catch((error)=>(error.message))
  }, [])

  
  function adicionaProdutos(api) {
    axios.get(`http://${api}`)
    .then((response) => {
      setPage(response.data.nextPage)
      setReq(
        [...req, ...response.data.products]
        )
    })
    .catch((error)=>(error.message))
  } 


  return ( 
    <div className='Produtos'>
      <div className='grid-cards'>
        { req.map((produto)=>{
          return <Card src={produto.image} id={produto.id} nome={produto.name} descricao={produto.description} oldPrice={`De R$ ${produto.oldPrice}`} promo={`Por: R$ ${produto.price}`} parcelas={`ou ${produto.installments.count}x de ${produto.installments.value}`} />
        })}
      </div>
      <div className='div-botao'>
      <Button onClick={()=> {adicionaProdutos(page)}} texto='Ainda mais produtos aqui!'/>
      </div>
    </div>
   );
}
 
export default Produtos;