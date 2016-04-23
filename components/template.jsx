import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Contact from './form/contact';

class Template extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      {this.props.children}

    <div className="container theme-block theme-block--two u-1/1" role="main">
      <div className="layout">
        <h1 className="h1 centred-content">Projects. Getting dirty with code.</h1>
        <div className="u-1/3 layout__item standard-content">
          <p><strong>Scottish Television (STV)</strong></p>
          <p>For the past two and a half years I have worked for Scottish Televison Group plc, churning out websites that have hits in the millions. The most well known of these will be the STV Player. Developing for this product across platforms has exposed me to many different JavaScript application tools. These include EmberJS, AngularJS, ReactJS alongside plain old JavaScript and ES6!</p></div>
          <div className="u-2/3 layout__item centred-content">
            <img src="dist/img/emberjs.png" alt="emberjs"/>
            <img src="dist/img/angular.png" alt="emberjs"/>
            <img src="dist/img/reactjs.png" alt="emberjs"/>
          </div>
        </div>
      </div>

      <div className="container theme-block theme-block--one u-1/1">
        <div className="layout">
        <div className="u-2/3 layout__item centred-content">
          <img src="dist/img/nodejs.png" alt="emberjs"/>
        </div>
        <div className="u-1/3 layout__item standard-content">
          <p><strong>Personal Projects</strong></p>
          <p>Believe it or not in my spare time I also like to dabble in the JavaScript world! Its always changing! To this end I have a number of side and personal projects that ignite my interest in JavaScript Engineering. I love to use NodeJS and I learn something new almost everytime i'm digging around in it's rusty innards!</p>
          </div>
        </div>
    </div>
    <Contact/>
    <footer>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contacts</li>
      </ul>
    </footer>
  </div>
  }
}

export default Template;
