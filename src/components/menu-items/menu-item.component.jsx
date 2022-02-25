import React from 'react';
import "./menu-item.styles.css"

const MenuItems = ({title, imageSrc, description}) => (
    
        <div className='menu-content'>
            <figure className='foto-plato'>
                <img src={imageSrc} alt="" />
            </figure>
            <hgroup className='menu-name'>
                <h1>{title}</h1>
                <p>$99</p>
            </hgroup>
            <p className='menu-description'>
                {description}
            </p>
            <p className='menu-btn'> Order Now</p>
        </div>
    
  )


export default MenuItems;