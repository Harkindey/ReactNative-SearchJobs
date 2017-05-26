import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1 ){
      return(
        <Button
          title="Onwards!"
          raised
        />
      )
    }
  }
  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
      <View
        key={slide.text}
        style={[styles.slideViewStyle, {backgroundColor: slide.color}]}
      >
        <Text style={styles.slideTextStyle}>{slide.text}</Text>
        {this.renderLastSlide(index)}
      </View>
    );
    });
  }
  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideTextStyle:{
    fontSize: 30,
    color: 'white'
  },
  slideViewStyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  }
}

export default Slides;
