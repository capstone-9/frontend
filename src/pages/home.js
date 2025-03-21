import '../styles/home.css';
import diary from "../assets/diary.png"
import calendar from "../assets/calendar.png"

import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className='home'>
      <div className='home__top'>
        <div className='home__top__title'>하루를 정리해주는<br />나만의 AI 친구</div>
        <div className='home__top__subtitle'>당신의 하루를 기록하고, 감정을 분석하여 해석해주는 따뜻한 AI 기반 일기 웹앱</div>
        <div className='home__top__list'>
          <button className='home__top__btn'>일기 쓰기 시작하기</button>
        </div>

        <motion.div
        className="bubble pastel-pink bubble-1"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="bubble pastel-blue bubble-2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="bubble pastel-yellow bubble-3"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="bubble pastel-green bubble-4"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      <div className='home__middle'>
        <div className='home__middle__title'>주요 기능</div>
        <div className='home__middle__list'>
          <div className='home__middle__info'>
            <img className='home__middle__info__img' src={diary} alt='RIkas Dzihab - Flaticon'/>
            <div className='home__middle__info__title'>나의 하루 기록하기</div>
            <div className='home__middle__info__subtitle'>AI와 대화하듯 일기를 작성하고, 감정을 분석해 이미지와 노래로 표현합니다.</div>
          </div>
          <div className='home__middle__info'>
            <img className='home__middle__info__img' src={calendar} alt='smashingstocks - Flaticon'/>
            <div className='home__middle__info__title'>감정으로 보는 나의 하루</div>
            <div className='home__middle__info__subtitle'>달력에서 감정 색상으로 하루를 확인하고 매일의 일기를 확인할 수 있습니다.</div>
          </div>
        </div>
      </div>

      <div className='home__bottom'>
        <div className='home__bottom__title'>지금 바로 하루톡톡을 시작해보세요!</div>
        <div className='home__bottom__subtitle'>당신의 하루와 감정을 AI와 함께 기록하고 분석하며 더 나은 내일을 만들어보세요.</div>

        <motion.div
        className="bubble gray bubble-5"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="bubble gray bubble-6"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="bubble gray bubble-7"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="bubble gray bubble-8"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>
    </div>
  )
}

export default Home;