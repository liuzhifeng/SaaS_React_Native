/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
} from 'react-native';

export default class SaaS_React_Native extends Component {
    constructor(props) {
        super(props);
        this.state = { usernameText: '' };
        this.state = { passwordText: '' };
    }

    _setIPButton() {
        console.log("setIP");
    }
    _rememberButton() {
        console.log("remember");
    }
    _loginButton(){
        console.log("login");
    }
    _verifyButton(){
        console.log("verify");
    }


    render() {
        return (

            /*背景*/
            <View style = {styles.backContent}>
                {/*logo*/}
              <Image source = {require('./img/logo-登录页.png')} style={styles.img_icon}/>
              <View style = {styles.spaceView}>
              </View>
                {/*用户名*/}
              <View style = {styles.userTextView}>
                <Text style = {styles.userText}>
                  账号
                </Text>
                <TextInput style={styles.textEnter}
                           placeholder="请输入账号"
                           onChangeText={(usernameText) => this.setState({usernameText})}
                           value={this.state.usernameText}/>
              </View>
                {/*分割线*/}
              <View style = {styles.lineView}>
              </View>
                {/*密码*/}
              <View style = {styles.passwordTextView}>
                <Text style = {styles.passwordText}>
                  密码
                </Text>
                <TextInput style={styles.textEnter}
                           placeholder="请输入密码"
                           onChangeText={(passwordText) => this.setState({passwordText})}
                           value={this.state.passwordText}/>
              </View>
                {/*分割线*/}
              <View style = {styles.lineView}>
              </View>
                {/*配置*/}
              <View style = {styles.setView}>
                <TouchableHighlight onPress={this._setIPButton}>
                  <Text style={{color : 'rgba(11,72,122,1)'}}>配置服务器IP</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._rememberButton}>
                  <View style={styles.btnView}>
                    <Image source={require('./img/选中框d.png')} style={{width: 16, height: 16}}/>
                    <Text style={{color : 'rgba(11,72,122,1)'}}>记住密码</Text>
                  </View>
                </TouchableHighlight>
                  {/*登录*/}
              </View>
              <View style={{paddingTop:40}}>
              </View>
              <TouchableHighlight onPress={this._loginButton}>
                <Text style={styles.loginText}>
                  登录
                </Text>
              </TouchableHighlight>

              <View style={{paddingTop:20}}>
              </View>
              <TouchableHighlight onPress={this._verifyButton()}>
                <Text style={styles.verifyText}>
                  验证码登录
                </Text>
              </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  /*背景*/
    backContent :{
        flex: 1,
        paddingTop:35,
        paddingLeft:15,
        paddingRight:15,
        backgroundColor: 'rgba(248,250,252,1)'
    },
  /*LOGO*/
    img_icon :{
        alignSelf:'center',
        width:120,
        height:62,
    },
  /*空白*/
    spaceView :{
        height: 150,
    },
  /*用户名view*/
    userTextView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
  /*用户名*/
    userText :{
        flex: 1,
        color: 'black',
        fontSize: 16,
    },
  /*用户名输入*/
    textEnter :{
        flex: 7,
        height: 30,
        width: 300,
        paddingLeft: 10,
        borderColor: 'gray',
        fontSize: 16,
    },
  /*分割线*/
    lineView: {
        backgroundColor: 'rgba(239,243,246,1)',
        height: 1,
    },
  /*密码view*/
    passwordTextView :{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
    },
  /*密码*/
    passwordText :{
        flex: 1,
        color: 'black',
        fontSize: 16,
    },
  /*配置view*/
    setView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingLeft: 20,
    },
  /*选中按钮*/
    btnView:{
        flexDirection: 'row',
    },
  /*login*/
    loginText:{
        paddingTop: 11.5,
        height: 40,
        fontSize: 17,
        textAlign: 'center',
        color:'white',
        backgroundColor:'rgba(4,128,241,1)',

    },
  /*验证码*/
    verifyText:{
        paddingTop: 11.5,
        height: 40,
        fontSize: 17,
        textAlign: 'center',
        color:'rgba(4,128,241,1)',
        backgroundColor:'white',
    }
})

AppRegistry.registerComponent('SaaS_React_Native', () => SaaS_React_Native);
