import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import LandingPage from './pages/landingPage/LandingPage'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <LandingPage />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
