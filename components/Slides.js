import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class Slides extends Component {
  renderSlides() {
    return this.props.data.map((slide) => {
      return (
      <View key={slide.text} style={styles.slideViewStyle}>
        <Text style={styles.slideTextStyle}>{slide.text}</Text>
      </View>
    );
    });
  }
  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideTextStyle:{
    fontsize: 30
  },
  slideViewStyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Slides;
