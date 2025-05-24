import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Checkout, HomePage, ProductPage, SearchResults } from './components'
import Header from './components/Header/Header'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/search' element={<SearchResults />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
