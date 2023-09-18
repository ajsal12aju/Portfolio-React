import React, { useRef, useEffect } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import Sidebar from '../../img/admin.png';
import Ecommerce from '../../img/banner.png';
import HOC from '../../img/homw.png';
import SHop from '../../img/shopping cart.png';
import Admin from '../../img/admin.png';
import Banner from '../../img/banner.png';
import Home from '../../img/homw.png';
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper && swiper.wrapperEl) {
     
      swiper.wrapperEl.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (swiper && swiper.wrapperEl) {

        swiper.wrapperEl.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  const handleScroll = (event) => {
    
    const isScrollingUp = event.deltaY < 0;
    const isScrollingDown = event.deltaY > 0;

  
    if (swiperRef.current) {
      if (isScrollingUp) {
        swiperRef.current.slidePrev();
      } else if (isScrollingDown) {
        swiperRef.current.slideNext();
      }
    }
  };

  return (
    <div className='portfolio'>
      <span style={{ color: darkMode ? 'white' : '' }}>React Project</span>
      <span>Portfolio</span>

      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        touchEventsTarget="container"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <SwiperSlide>
       <a href="https://admin-usefull-dashboard.netlify.app/" target="_blank"> <img src={Admin} alt="" /></a>   
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://dreamprojects.netlify.app/" target="_blank">  <img src={Home} alt="" /></a>
        </SwiperSlide>    
        <SwiperSlide> 
         <a href="https://online-shoppiee.netlify.app/" target="_blank"> <img src={SHop} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
