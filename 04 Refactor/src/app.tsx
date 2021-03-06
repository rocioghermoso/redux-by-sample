import * as React from 'react';
import {HelloWorldContainer} from './components/helloworld'
import {NameEditContainer} from './components/nameEdit';
import {ColorDisplayerContainer, ColorPickerContainer} from './components/color';

export const App = () => {
  return (
    <div>
      <HelloWorldContainer/>
      <br/>
      <NameEditContainer/>
      <br/>
      <ColorDisplayerContainer/>
      <br/>
      <ColorPickerContainer/>
    </div>
  );
}
