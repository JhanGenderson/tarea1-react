import React from 'react';
import Album from '../../components/album-dishes/album-dishes.component';
import MenuTitles from '../../components/menu-items/menu-item-titles.component';
import "./shop.styles.css"

const MenuPage = () => {
  return (
    <div className='our-menu'>
      <MenuTitles />
      <Album/>
      <button>Explore Menu</button>
    </div>
  )
}

export default MenuPage;