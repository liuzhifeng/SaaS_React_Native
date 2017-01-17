/**
 * Created by xiaolongxia on 2017/1/17.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    StyleSheet,
    View,
} from 'react-native';
import login from './loginPage';

const  INITIAL_ROUTE = {
    component: login,
}
export default class main extends Component {

    renderScene = (route, navigator) => {
        const Comp = route.component;
        return(<Comp navigator = {navigator} route = {route} />);
    };

    render() {
        return(
            <View style={styles.root}>
            <Navigator
            initialRoute={INITIAL_ROUTE}
            renderScene={this.renderScene}/>

            </View>
    )
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1,
    },
});