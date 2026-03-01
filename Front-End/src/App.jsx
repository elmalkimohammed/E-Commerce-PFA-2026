import { BrowserRouter, Routes, Route } from "react-router-dom";

import Acceuil from "./pages/Acceuil";
import AuthPage from './pages/AuthPage.jsx'
import SellerPortal from './pages/SellerPortal'
import ProfilePage from './pages/ProfilePage';

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Page non trouvée</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/acceuil" element={<Acceuil />} />
        <Route path="/" element={<Acceuil />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Authentication" element={<AuthPage/>} />
        <Route path="/SellerPortal" element={ <SellerPortal/> }/>
        <Route path="/ProfilePage" element={ <ProfilePage/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
