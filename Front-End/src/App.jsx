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
import RepportPage from "./pages/RepportPage.jsx";
import Notification from "./pages/NotificationPage.jsx";
import NotificationDetail from "./pages/NotificationDetailPage.jsx";
import MonitoringPage from "./pages/MonitoringPage.jsx";
import CrudPage from "./pages/CrudPage.jsx";
import AdminProfilePage from "./pages/adminProfilePage.jsx";
import AdminRepportPage from "./pages/AdminRepportPage.jsx";
import InventoryManagerPage from "./pages/InventoryManagerPage.jsx";
import InventoryProfilePage from "./pages/inventoryProfilePage.jsx";

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
          <Route path="/SellerPortal" element={ <SellerPortal/> }/>
          <Route path="/ProfilePage" element={ <ProfilePage/> }/>
          <Route path="/CartPage" element={ <CartPage/> }/>
          <Route path="/CategoryPage" element={ <CategoryPage/> }/>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/paymentForm" element={<PaymentPage/>}/>
          <Route path="/repport" element={<RepportPage/>}/>
          <Route path="/notification" element={<Notification/>}/>
          <Route path="/notificationDetail" element={<NotificationDetail/>}/>
          <Route path="/adminProfilePage" element={<AdminProfilePage/>}/>
          <Route path="/adminMonitoring" element={<MonitoringPage/>}/>
          <Route path="/adminCrudPage" element={<CrudPage/>}/>
          <Route path="/adminRepport" element={<AdminRepportPage/>}/>
          <Route path="/inventoryManager" element={<InventoryManagerPage/>}/>
          <Route path="/inventoryProfile" element={<InventoryProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
