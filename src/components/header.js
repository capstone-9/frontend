import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"
import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.body.classList.add('dark__mode')
      document.body.classList.remove('light__mode')
    } else {
      document.body.classList.add('light__mode')
      document.body.classList.remove('dark__mode')
    }
  }

  return (
    <header>
      <div className="header__left">
        <Link to="/">
          <img className="header__left__logo" src="/logo.png" alt="Designed by Freepik" />
        </Link>
        <div className="header__left__name">하루톡톡</div>
      </div>
      <div className="header__right">
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          className={`header__right__mode ${isDarkMode ? "visible" : ""}`}
          onClick={toggleDarkMode}
        />
        <button className="header__right__signin">로그인</button>
        <button className="header__right__signup">회원가입</button>
      </div>
    </header>
  )
}

export default Header;