import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Makaron from './pages/Makaron';
import Contact from './pages/Contact';
import Aksiya from './pages/Aksiya';
import Suv from './pages/Suv';
import Shorvalar from './pages/Shorvalar';
import Pasti from './pages/Pasti';
import Saladlar from './pages/Saladlar';
import Desert from './pages/Desert';
import Pitsalar from './pages/Pitsalar';
import PageNotFound from './pages/PageNotFound.jsx';
import { CartProvider } from './Components/CartContext.jsx';
import { useEffect} from 'react'
import { ModalProvider } from './Components/ModalProvider.jsx'; // <-- bu yerda import qil#
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import AksiyaItem from './Components/AksiyaItem.jsx';
import Turli from './pages/Turli.jsx';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/pitsalar' element={<Pitsalar />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/makaron' element={<Makaron />} />
        <Route path='/aksiya' element={<Aksiya />} />
        <Route path='/ichimliklar' element={<Suv />} />
        <Route path='/shorva' element={<Shorvalar />} />
        <Route path='/pasti' element={<Pasti />} />
        <Route path='/saladlar' element={<Saladlar />} />
        <Route path='/desertlar' element={<Desert />} />
        <Route path='/turli' element={<Turli/>}/>
        <Route path='/stock/:id' element={<AksiyaItem/>}/>
        {/* 404 sahifa uchun */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <CartProvider>
      <ModalProvider> {/* <- bu yerga o‘rab qo‘yamiz */}
        <RouterProvider router={routes} />
        <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={false} />
      </ModalProvider>
    </CartProvider>
  );
}

export default App;
