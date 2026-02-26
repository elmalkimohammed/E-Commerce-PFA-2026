import { BrowserRouter , Routes , Route } from 'react-router-dom'

import SellerPortal from './pages/SellerPortal'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SellerPortal" element={ <SellerPortal/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
