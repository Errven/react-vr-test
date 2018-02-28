import React, { Component } from 'react';
import { View, VrButton, Animated } from "react-vr";
import { Star } from "./star";
import { range, map } from 'ramda';

class TestComponent extends Component {
  constructor() {
    super();

    this.state = {
      textPosZ: new Animated.Value(-20),
      textPosY: new Animated.Value(0),
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.textPosZ,
      { toValue: -3, duration: 10000 }
    ).start();
  }

  generateStars = count => map(this.renderStar, range(1, count));

  renderStar = i => <Star key={i}/>;

  render() {
    return (
      <View>
        <VrButton
          onClick={() => {
            console.log('click')
          }}>
          <Animated.Text
            style={{
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              color: 'yellow',
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translateZ: this.state.textPosZ }],
            }}
          >
            Stars
          </Animated.Text>
        </VrButton>

        <View
          style={{
            transform: [
              { translate: [50, 50, 50] }
            ],
          }}
        >
          {
            this.generateStars(200)
          }
        </View>
      </View>
    )
  }
}

export { TestComponent }