import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import '../styles/header.css'

const Header = () => {
  return (
    <header>
      <div class="header__left">
        <img class="header__left__logo" src="/logo.png" />
        <div class="header__left__name">하루톡톡</div>
      </div>
      <div class="header__right">
        <FontAwesomeIcon icon={faMoon} />
        <FontAwesomeIcon icon={faSun} />
        <button class="header__right__signin">로그인</button>
        <button class="header__right__signup">회원가입</button>
      </div>
    </header>
  )
}

export default Header;