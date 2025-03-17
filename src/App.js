import { Link } from 'react-router-dom'
import './styles/App.css';

const App = () => {
  return (
    <>
    <div>하루톡톡 웹사이트</div>
    <Link to="/diary">일기쓰기</Link>
    </>
  )
}

export default App;