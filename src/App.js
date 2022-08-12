import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import CardShopping from './components/view/CardShopping/CardShopping';
import Configurator from './components/view/Configurator/Configurator';
import Contact from './components/view/Contact/Contact';
import Home from './components/view/Home/Home';
import NotFound from './components/view/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/configurator' element={<Configurator />} />
          <Route path='/shoppingcard' element={<CardShopping />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App;
