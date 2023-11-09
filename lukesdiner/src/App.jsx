import { Route, Routes } from 'react-router-dom'
import Home from './views/home/Home'
import About from './views/about/About'
import Menu from './views/menu/Menu'
import Sponsorship from './views/sponsorship/Sponsorship'
import Contact from './views/contact/Contact'
import Styleguide from './styleguide/Styleguide'


function App() {

  return (
    <>
      <header>

      </header>
      <main className={location.pathname === "/styleguide" ? "main__styleguide"
        : "main"
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
    </>
  )
}

export default App
