import React from 'react';
import ServicesTitles from '../../components/services-component/services-titles.component';
import AlbumServices from '../../components/album-services/album-services.component';

import "./services-page.styles.css";

const ServicesPage = () => {
  return (
    <div className='services'>
        <ServicesTitles/>
        <AlbumServices/>
    </div>
  )
}

export default ServicesPage;