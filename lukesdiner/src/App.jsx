import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './views/home/Home'
import About from './views/about/About'
import Menu from './views/menu/Menu'
import Sponsorship from './views/sponsorship/Sponsorship'
import Contact from './views/contact/Contact'
import Styleguide from './styleguide/Styleguide'
import Topbar from './components/topbar/Topbar'
import BurgerMenu from './components/burgerMenu/BurgerMenu'
import { useState } from 'react'
import Footer from './components/footer/Footer'

function App() {

  const location = useLocation();
  const [ showBurgerMenu, setShowBurgerMenu ] = useState('display--none');

  const handleShowBurgerMenu = () => {
    setShowBurgerMenu('');
  }
  const handleHideBurgerMenu = () => {
    setShowBurgerMenu('display--none');
  }

  return (
    <>
      <header>
        <Topbar 
          logoClass={location.pathname === '/sponsorship' ? 'logoSymbol__topbar--sponsorship'
          : 'logoSymbol'}
          handleBtnBurgerMenu={handleShowBurgerMenu}
        />
        <BurgerMenu
          burgerMenuClass={showBurgerMenu}
          btnCloseBM={handleHideBurgerMenu}
        />
      </header>
      <main className={location.pathname === '/styleguide' ? 'main__styleguide'
        : location.pathname === '/' ? 'main__home'
        :location.pathname === '/aboutus' ? 'main__about'
        :'main'
      }>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/styleguide" element={<Styleguide />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
