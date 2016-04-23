import React from 'react';
import ReactDOM from 'react-dom';
import Template from './components/template';
import Header from './components/header/header';
import StandardBlock from './components/content-blocks/standard-block';
import FullLength from './components/content-blocks/full-length';
// Logo data
let LogoContent = {
  title : 'J|M',
  tagline : 'FRONT END & JAVASCRIPT DEVELOPER'
};
// Top Block
let TopHeaderContent = {
  headers : [
    {
      className: 'h1 layout__item centred-content',
      content : 'Lover of JavaScript. Drinker of Tea.'
    }
  ],
  textBlocks: [
    {
      className: 'layout__item centred-content',
      content: 'JavaScript Flavours: ES5, ES6, Vanilla, Angular, React, Node and of course jQuery.'
    },
    {
      className: 'layout__item centred-content',
      content: 'I care about clean, performant code & slick interfaces!'
    }
  ]
}


ReactDOM.render(
  <Template>
    <StandardBlock className={'theme-block theme-block--one'}>
      <Header urls={['Contact']} content={LogoContent}/>
    </StandardBlock>
    <FullLength
      blockClass={'theme-block theme-block--one'}
      headers={TopHeaderContent.headers}
      textBlocks={TopHeaderContent.textBlocks}/>
  </Template>,
  document.getElementById('app')
)
