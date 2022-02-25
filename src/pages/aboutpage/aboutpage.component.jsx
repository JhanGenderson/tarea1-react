import React from 'react';
import AboutFotos from '../../components/about/about-seccion-fotos.component';
import AboutInfo from '../../components/about/about-seccion-info.component';
import "./aboutpage.styles.css"


const AboutPage = () => {
  return (
    <div className='about'>
        <AboutFotos/>
        <AboutInfo/>
    </div>
  )
}

export default AboutPage