/**
 * Created by xiaolongxia on 2017/1/12.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Dimensions,
    Text,
    PixelRatio,
} from 'react-native';

export default class homePage extends Component {
    render() {
        const {navigator} = this.props;
        var Dimensions = require('Dimensions');
    return(
        <View style={styles.root}>
            <Text style={styles.welcome}>
                window.width={Dimensions.get('window').width + '\n'}
                window.height={Dimensions.get('window').height + '\n'}
                pxielRatio={PixelRatio.get()}
            </Text>
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