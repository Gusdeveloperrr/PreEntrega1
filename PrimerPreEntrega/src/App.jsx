import React from 'react'
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
const App = () => {
  return (
    <div>
     <NavBar/>
     <ItemListContainer greeting={"Hellow"}/> 
    </div>
  )
}

export default App
