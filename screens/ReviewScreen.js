import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
  static navigationOptions = ({navigation}) => ({
      title: 'Review Jobs',
      headerRight:  (<Button
        title="Settings"
        onPress={() => navigation.navigate('settings') }
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0,122,255,1)" />),
      headerTitleStyle: {
        marginTop: (Platform.OS === 'andriod' ? 24 : 0 )
      }
  });

  render() {

    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);
