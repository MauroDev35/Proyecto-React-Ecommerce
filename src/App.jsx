import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer saludo="Bienvenido al E-Commerce de React 🔥" />
    </>
  )
}

export default App
