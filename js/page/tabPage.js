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
import HomePage from './homePage';
import WaitPage from './waitPage';
import TimeOutPage from './timeOutPage';
import StatisticalPage from './statisticalPage';
import MorePage from './morePage';

import NavigationBar from 'react-native-navbar';

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
            selectedTab: 'HomePage',
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
        var tabPage;
        switch (tabName) {
            case 'HomePage':
                tabNomal=TAB_NORMAL_HOME;
                tabPress=TAB_PRESS_HOME;
                tabPage=<HomePage/>;
                break;
            case 'WaitPage':
                tabNomal=TAB_NORMAL_WAIT;
                tabPress=TAB_PRESS_WAIT;
                tabPage=<WaitPage/>;
                break;
            case 'TimeOutPage':
                tabNomal=TAB_NORMAL_TIME;
                tabPress=TAB_PRESS_TIME;
                tabPage=<TimeOutPage/>;
                break;
            case 'StatisticalPage':
                tabNomal=TAB_NORMAL_STATISTICAL;
                tabPress=TAB_PRESS_STATISTICAL;
                tabPage=<StatisticalPage/>;
                break;
            case 'MorePage':
                tabNomal=TAB_NORMAL_MORE;
                tabPress=TAB_PRESS_MORE;
                tabPage=<MorePage/>;
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
                {tabPage}

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
                    {this.renderTabView('首页','HomePage','首页')}
                    {this.renderTabView('待办','WaitPage','待办')}
                    {this.renderTabView('超时','TimeOutPage','超时')}
                    {this.renderTabView('统计','StatisticalPage','统计')}
                    {this.renderTabView('更多','MorePage','更多')}
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
