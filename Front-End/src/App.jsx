import React from 'react';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/ProfilePage" element={ <ProfilePage/> }/> 
    </Routes>
  </BrowserRouter>
  )
}

export default App;
