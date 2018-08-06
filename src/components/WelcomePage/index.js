import React, { Component } from 'react';

import {
  WelcomePageContainer,
  LinkText,
  Text
} from 'components/WelcomePage/styles';

import 'components/WelcomePage/animations.css';

class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textHover: false
    }
  }

  toggleTextHover = (e) => {
    this.setState({textHover: !this.state.textHover});
  }
  render() {
    var textColor;
    if(this.state.textHover) {
      textColor = "#83d0f2";
    } else {
      textColor = "white";
    }
    return(
      <WelcomePageContainer>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="256" height="256">
          {/* <defs> */}
            <path fill="#d5e281" d="M291.05 110.11L368.87 213.39L291.05 156.71L213.67 213.39L291.05 110.11Z" id="aeWqyPcQy"></path>
            <path fill="#d5e281" d="M291.05 377.74L368.87 274.46L291.05 331.14L213.67 274.46L291.05 377.74Z" id="anTI1PbAN"></path>
            <path fill="#d5e281" className="right-arrow" d="M477.53 242.18L374.25 320L430.93 242.18L374.25 164.8L477.53 242.18Z" id="bZGklqJBd"></path>
            <path fill="#d5e281" className="left-arrow" d="M106.41 242.18L209.69 320L153.01 242.18L209.69 164.8L106.41 242.18Z" id="cmgpDW5me"></path>
            <LinkText href="/home">
              <text id="hGgFQL2Vd" x="273.67" y="232.4" fontSize="59" fontFamily="Luckiest Guy" fontWeight="normal" fontStyle="normal" letterSpacing="0" alignmentBaseline="before-edge" transform="matrix(1 0 0 1 -3.0465802951734986 -18.56875657205694)" dominantBaseline="text-before-edge">
                <tspan  x="243.67" dy="0em" alignmentBaseline="before-edge" dominantBaseline="text-before-edge" textAnchor="start">GTI</tspan>
              </text>
            </LinkText>
        </svg>
      </WelcomePageContainer>
    )
  }
}

export default WelcomePage
