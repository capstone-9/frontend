import './styles/App.css';

import { Link } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'

const App = () => {
  return (
    <div className="app__body">
      <Header />
      <div>하루톡톡 웹사이트</div>
      <Link to="/diary">일기쓰기</Link>
      <Footer />
    </div>
  )
}

export default App;