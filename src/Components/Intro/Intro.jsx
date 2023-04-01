import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

 function Intro() {
  return (
    <div className='intro'>
       <div className="i-left">
          <div className="i-name">
            <span>Hy! I Am</span>
            <span>Mohammed Ajsal vp</span>
            <span>Fullstack Developer with high level of knowledge in web designing and development, producting the Quality work</span>
          </div>
          <button className="button i-button">

            Hire me
          </button>
          <div className="i-icons">
            <a href=""><img src={Github} alt="" /></a>
           <a href=""> <img src={LinkedIn} alt="" /></a>
           <a href=""> <img src={Instagram} alt="" /></a>
          </div>
       </div>
       <div className="i-right">
          welcome right
       </div>
    </div>
  )
}
export default Intro