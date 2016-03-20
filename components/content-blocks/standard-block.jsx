import React from 'react';
// Has children thus React Component
class StandardBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // standard class for the block
    let standardClass = 'container u-1/1 ';
    // add this to classnames given
    standardClass += this.props.className
    return (
      <div className={standardClass}>
        {this.props.children}
      </div>
    )
  }

}

export default StandardBlock;
