import React from 'react';
import { AppRegistry } from 'react-vr';
import { TestComponent } from "./components/test-component";

export default class TestApplication extends React.Component {
  render() {
    return (
      <TestComponent/>
    );
  }
};

AppRegistry.registerComponent('TestApplication', () => TestApplication);
