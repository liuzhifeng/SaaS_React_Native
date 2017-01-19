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
    Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import homePage from './homePage';
import waitPage from './waitPage';
import timeOutPage from './timeOutPage';
import statisticalPage from './statisticalPage';
import morePage from './morePage';

const TabNavigatorItem =TabNavigator.Item;

const TAB_NORMAL_HOME=require('./myImage/ic_首页.png');
const TAB_NORMAL_WAIT=require('./myImage/ic_待办.png');
const TAB_NORMAL_TIME=require('./myImage/ic_超时.png');
const TAB_NORMAL_STATISTICAL=require('./myImage/ic_统计.png');
const TAB_NORMAL_MORE=require('./myImage/ic_更多.png');

const TAB_PRESS_HOME=require('./myImage/ic_首页_pre.png');
const TAB_PRESS_WAIT=require('./myImage/ic_待办_pre.png');
const TAB_PRESS_TIME=require('./myImage/ic_超时_pre.png');
const TAB_PRESS_STATISTICAL=require('./myImage/ic_统计_pre.png');
const TAB_PRESS_MORE=require('./myImage/ic_更多_pre.png');

export default class tabPage extends Component {
/*默认*/
    constructor(){
        super()
        this.state = {
            selectedTab: 'homePage',
        }
    }
/*tab点击*/
    onPress(tabName){
        if(tabName){
            this.setState(
                {
                    selectedTab:tabName,
                }
            );
        }
    }

    /*渲染每项*/
    renderTabView(title,tabName,tabContent){
        var tabNomal;
        var tabPress;
        switch (tabName) {
            case 'homePage':
                tabNomal=TAB_NORMAL_HOME;
                tabPress=TAB_PRESS_HOME;
                break;
            case 'waitPage':
                tabNomal=TAB_NORMAL_WAIT;
                tabPress=TAB_PRESS_WAIT;
                break;
            case 'timeOutPage':
                tabNomal=TAB_NORMAL_TIME;
                tabPress=TAB_PRESS_TIME;
                break;
            case 'statisticalPage':
                tabNomal=TAB_NORMAL_STATISTICAL;
                tabPress=TAB_PRESS_STATISTICAL;
                break;
            case 'morePage':
                tabNomal=TAB_NORMAL_MORE;
                tabPress=TAB_PRESS_MORE;
            default:

        }
        return(
            <TabNavigatorItem
                title={title}
                renderIcon={()=><Image style={styles.icon} source={tabNomal}/>}
                renderSelectedIcon={()=><Image style={styles.icon} source={tabPress}/>}
                selected={this.state.selectedTab===tabName}
                selectedTitleStyle={styles.selectedTabText}
                onPress={()=>this.onPress(tabName)}
            >
                {
                    tabName=='Home'?<Home/>:
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{tabContent}</Text></View>
                }
            </TabNavigatorItem>
        );
    }

/*自定义tabbar*/
    tabBarView(){
        return (
            <View style={{flex:1}}>
                <TabNavigator
                    tabBarStyle={styles.tab}
                >
                    {this.renderTabView('首页','homePage','首页')}
                    {this.renderTabView('待办','waitPage','待办')}
                    {this.renderTabView('超时','timeOutPage','超时')}
                    {this.renderTabView('统计','statisticalPage','统计')}
                    {this.renderTabView('更多','morePage','更多')}
                </TabNavigator>
            </View>
        );
    }

    render() {
        var tabBarView=this.tabBarView();
    return(
        <View style={styles.root}>
            {tabBarView}
        </View>
    );
    }

}


const styles = StyleSheet.create({
   root:{
       flex:1,
       backgroundColor:'white',
   },
    tabText: {
        color: 'rgba(142,148,152,1)',
        fontSize: 13,
    },
    selectedTabText: {
        color: 'rgba(37,137,237,1)',
        fontSize: 13
    },
    icon: {
        width: 22,
        height: 22
    }
});
