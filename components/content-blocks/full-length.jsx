import React from 'react';
import StandardBlock from './standard-block';

class FullLength extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <StandardBlock className={this.props.blockClass}>
        {this.props.headers.map(heading => {
          return <h1 className={heading.className}>{heading.content}</h1>
        })}
        {this.props.textBlocks.map(textBlock => {
          return <p className={textBlock.className}>{textBlock.content}</p>
        })}
      </StandardBlock>
    )
  }
}

export default FullLength
