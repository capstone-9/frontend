import './styles/App.css';

import Header from './components/header'
import Home from './pages/home'
import Footer from './components/footer'

const App = () => {
  return (
    <div className="app__body">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App;