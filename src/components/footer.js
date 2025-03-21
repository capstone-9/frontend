import { useState } from "react";
import '../styles/footer.css'

import example from "../assets/example.svg"

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  // 이메일 복사
  const copyEmailToClipboard = () => {
    const email = "yuyu7123@naver.com";
    navigator.clipboard.writeText(email).then(() => {
      alert(`이메일 복사: ${email}으로 문의사항을 보내주세요.`);
    }).catch(err => {
      console.error("이메일 복사 실패", err);
    });
  };

  return (
    <footer>
      <div className="footer">
        <div className="footer__top">
          <div className="footer__left">
            <img className="footer__logo" src="/logo.png" alt="Designed by Freepik" />
            <div className="footer__name">하루톡톡</div>
          </div>
          <div className="footer__right">
            <div className="footer__right__info" onClick={() => setModalContent("서비스 소개")}>서비스 소개</div>
            <div className="footer__right__info" onClick={copyEmailToClipboard}>문의하기</div>
          </div>
        </div>
        <div className="footer__bottom">
          © 2025 하루톡톡. All rights reserved.
        </div>
      </div>

      {/* 모달 */}
      {modalContent && (
        <div className="footer__modal">
          <div className="footer__modal__content">
            <div className="footer__modal__title">{modalContent}</div>
              {modalContent === "서비스 소개" && (
                <div className="footer__moal__list">
                  <div className="footer__modal__person">
                    <img className="modal__person__img" src={example} alt="각자 프로필" />
                    <div className="modal__person__info">
                      <div className="modal__person__name">권효정</div>
                      <div className="modal__person__role">AI 개발</div>
                    </div>
                  </div>
                  <div className="footer__modal__person">
                    <img className="modal__person__img" src={example} alt="각자 프로필" />
                    <div className="modal__person__info">
                      <div className="modal__person__name">이계무</div>
                      <div className="modal__person__role">BE 개발</div>
                    </div>
                  </div>
                  <div className="footer__modal__person">
                    <img className="modal__person__img" src={example} alt="각자 프로필" />
                    <div className="modal__person__info">
                      <div className="modal__person__name">이효준</div>
                      <div className="modal__person__role">AI 개발</div>
                    </div>
                  </div>
                  <div className="footer__modal__person">
                    <img className="modal__person__img" src={example} alt="각자 프로필" />
                    <div className="modal__person__info">
                      <div className="modal__person__name">정유정</div>
                      <div className="modal__person__role">FE 개발</div>
                    </div>
                  </div>
                </div>
              )}
              <button onClick={() => setModalContent(null)}>닫기</button>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer;