import React from 'react';
import Navigation from '../menus/navigation';

const Header = ({urls, content}) => {
  return (
    <header className="layout u-1/1">
      <div className="layout__item  logo u-1/2">
        <span className="letters">{content.title}</span><br/>
        <span className="details">{content.tagline}</span>
      </div>
      <Navigation items={urls}/>
    </header>
  )
}

export default Header
