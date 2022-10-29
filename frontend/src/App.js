import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import LandingPage from './pages/landingPage/LandingPage'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MyNotes from './pages/myNotes/MyNotes'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main>
        <Route exact path='/' component={LandingPage} />
        <Route path='/mynotes' component={() => <MyNotes />} />
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App
