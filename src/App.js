import React, { useRef, useState } from 'react';  // React ve useRef aynı satırda import edilir
import './App.css';
import logom from './image/logom.png';
import resim1 from './image/resim1.jpg';
import profilePic from './image/resmim.png';
import eğitimPic from './image/eğitim2.jpg';

import SkillBar from './SkillBar';
import { Link, Element, scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

function App() {
  
  const form = useRef();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        }
      );
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToElement = (elementName) => {
    scroller.scrollTo(elementName, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className='body'>
      <div className='header'>
        <img src={logom} className="logo" alt="logo" />
        <button className='menu-toggle' onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <nav>
          <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`} id='mobile-menu'>
            <li>
              <Link to="anasayfa" smooth={true} duration={500}>
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link to="egitim" smooth={true} duration={500}>
                Eğitim
              </Link>
            </li>
            <li>
              <Link to="yetkinliklerim" smooth={true} duration={500}>
                Yetkinliklerim
              </Link>
            </li>
            <li>
              <Link to="benkimim" smooth={true} duration={500}>
                Ben Kimim
              </Link>
            </li>
            <li>
              <Link to="iletisim" smooth={true} duration={500}>
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Element name="anasayfa" className='intro-content'>
        <div className='resim-gif-container'>
          <img src={resim1} className='resim1' alt="resim" />
          <div className='intro-text'>
            <h1>Merhaba, Ben Berna Kaya</h1> 
            <h2>Web Geliştiricisi</h2>
          </div>
        </div>
        <button className='scroll-down-button' onClick={() => scrollToElement('benkimim')}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </Element>

      <Element name="benkimim" className='shadow-box'>
        <img src={profilePic} alt="Profil Resmi" className='profile-pic' />
        <div className='text-content'>
          <h2>BEN KİMİM</h2>
          <p>Merhaba 🙂</p>
          <p>2001 yılında Ankara'da doğdum. İlk, orta ve lise öğrenimimi doğup büyüdüğüm yer olan Ankara'da tamamladım. Üniversite eğitimimi ise Afyon Kocatepe Üniversitesi'nde aldım ve burada Bilgisayar Programcılığı bölümünden mezun oldum.</p>
          <p>Temel programlama dillerinde yeteneklerimi geliştirme aşamasındayım. Teknoloji dünyasındaki hızla değişen trendlere ayak uydurmak ve yeni beceriler kazanmak istiyorum. Bilgisayar programcılığı alanında daha fazla bilgi ve beceri edinerek geleceğe hazır olmayı hedefliyorum. Somut başarılar ve iş deneyimleriyle öne çıkmak için çabalıyor ve kariyer hedeflerimi gerçekleştirmek için çalışmaktan büyük bir tutku duyuyorum.</p>
        </div>
      </Element>

      <Element name="egitim" className='shadow-box'>
        <img src={eğitimPic} alt="Eğitim Resmi" className='education-pic' />
        <div className='text-content'>
          <h3>AFYON KOCATEPE ÜNİVERSİTESİ</h3>
          <p>Afyon Meslek Yüksekokulu</p>
          <p>Eylül 2022 - Haziran 2024</p>
        </div>
      </Element>

      <Element name="yetkinliklerim" className='skills-container'>
        <h1>YETKİNLİKLER</h1>
      
        <SkillBar title="PHP" percentage={40} color="red" />
        <SkillBar title="MySQL" percentage={
          20} color="purple" />
        <SkillBar title="HTML5" percentage={80} color="blue" />
        <SkillBar title="Bootstrap5" percentage={80} color="purple" />
        <SkillBar title="React" percentage={25} color="orange" />
        <SkillBar title="React Native" percentage={10} color="gray" />
      </Element>

      <Element name="iletisim" className='contact-form-container'>
        <h1>İletişim</h1>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <label>
            Ad Soyad *
            <input type="text" name="name" required />
          </label>
          <label>
            E-mail *
            <input type="email" name="email" required />
          </label>
          <label>
            İletişim Numarası *
            <input type="tel" name="phone" required />
          </label>
          <label>
            Mesaj *
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Gönder</button>
        </form>
      </Element>

      <footer>
        <h2>SOCIAL MEDIA</h2>
        <hr />
        <div className='social-icons'>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://wa.me/05333972341" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
