import React from 'react'

import Header from './components/header/header'
import Presentation from './components/presentation-texts/presentation-texts'
import FormsCad from './components/input-form/formsCad'
import Produtos from './components/Cards/requisicaoprod'
import Share from './components/share-friends/share-friends'
import Footer from './components/footer/footer'



import './App.css'




function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <FormsCad />
      <Produtos />
      <Share />
      <Footer />
    </div>
  )
}

export default App;
