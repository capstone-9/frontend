import './styles/App.css';

import { Link } from 'react-router-dom'
import Header from './components/header'

const App = () => {
  return (
    <>
    <Header />
    <div>하루톡톡 웹사이트</div>
    <Link to="/diary">일기쓰기</Link>
    </>
  )
}

export default App;