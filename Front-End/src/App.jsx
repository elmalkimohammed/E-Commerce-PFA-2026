import { BrowserRouter, Routes, Route } from "react-router-dom";
/* Necessary For Utilizing And Managing Our States That Are Handeled By Differents Components */
import { Provider } from "react-redux"
import store from "./store/store.js";

import Acceuil from "./pages/Acceuil";
import AuthPage from './pages/AuthPage.jsx'
import SellerPortal from './pages/SellerPortal'
import ProfilePage from './pages/ProfilePage';
import CartPage from "./pages/CartPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import ProductDetail from './pages/ProductDetail';
import PaymentPage from "./pages/PaymentPage.jsx";
import SubscriptionPage from "./pages/SubscriptionPage";
import SubscriptionStatus from "./pages/SubscriptionStatus";
import ProtectedSellerRoute from "./Components/ProtectedSellerRoute";

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
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/acceuil" element={<Acceuil />} />        
          <Route path="/CategoryPage" element={ <CategoryPage/> }/>
          <Route path="/" element={<Acceuil />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Authentication" element={<AuthPage/>} />
          <Route 
            path="/SellerPortal" 
            element={
              <ProtectedSellerRoute>
                <SellerPortal />
              </ProtectedSellerRoute>
            } 
          />
          <Route path="/ProfilePage" element={ <ProfilePage/> }/>
          <Route path="/CartPage" element={ <CartPage/> }/>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/paymentForm" element={<PaymentPage/>}/>
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/subscription/status" element={<SubscriptionStatus />} />
        </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
