/**
 * Created by xiaolongxia on 2017/1/12.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
} from 'react-native';

export default class homePage extends Component {
    render() {
        const {navigator} = this.props;
    return(
        <View style={styles.root}>

        </View>
    );
    }

}

const styles = StyleSheet.create({
   root:{
       flex:1,
       backgroundColor:'white',
   },
});