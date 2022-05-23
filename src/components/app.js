import React, { Component } from 'react';

import Align from "./aqlign-me";
import Hidden from "./bhide-me";
import Counter from "./cup-down";
import Colorful from "./jcolor-me";
import Bottom from "./zbottom";
import HideTime from "./khide-time";
import Increment from './increase';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="title">
          <h1>I CAN Learn New Tricks</h1>
        </div>
        <div>
          <Align />
        </div>

        <div>
          <Hidden />
        </div>

        <div>
          <Counter />
        </div>

        <div>
          <Increment />
        </div>

        <div>
          <Colorful />
        </div>

        <div>
          <HideTime />
        </div>

        <div>
          <Bottom />
        </div>
      </div>
    );
  }
}
