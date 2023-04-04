import React from 'react'
import './Experience.css'

 function Experience() {
  return (
    <div className='experience'>
        <div className='achievement'>
            <div className='circle'>1+</div>
            <span style={{fontSize:' 1.2rem'}}>years</span>
            <span>Experience</span>
        </div>
        <div className='achievement'>
            <div className='circle'>10+</div>
            <span style={{fontSize:' 1.2rem'}}>completed</span>
            <span>Projects</span>
        </div>
        <div className='achievement'>
            <div className='circle'>1+</div>
            <span style={{fontSize:' 1.2rem'}}>companies</span>
            <span>work</span>
            
        </div>
    </div>
  )
}

export default Experience