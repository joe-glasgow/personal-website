import React from 'react';
import LinkItem from './linkItem';
/*
static template:
<ul className="layout__item u-1/2 navigation--top__flush">
  <li className="navigation--vertical-item">Home</li>
  ... etc
</ul>
*/
const Navigation = ({ items }) => {
  return (
    <ul className="layout__item u-1/2 navigation--top navigation--top__flush">
      {items.map(function(item, index){
          let link = '#/' + item;
          // className, key, name, link, ...other
          return <LinkItem className='navigation--vertical-item' key={index} link={link} name={item} />
        })}
    </ul>
  )
}

export default Navigation;
