import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { TabIcon, Header } from './components/common';
import Styles from './constant/Styles';
import { connect } from 'react-redux';
import ListChat from './components/ListChat';
import Setting from './components/Setting';
import Icon from 'react-native-vector-icons/Ionicons';

const RouterWidthRedux = connect()(Router);
class RouterComponent extends Component {
    render() {
        const { sceneStyle, navigationBarStyle } = styles;
        return (
            <RouterWidthRedux>
                <Scene
                   key="root"
                   tabs
                   tabBarStyle={Styles.tabbarContainer}
                >

                  <Scene
                      key="Setting"
                      component={Setting}
                      renderTitle={Header}
                      textCenter='Settings' 
                      icon={TabIcon}
                      title='Settings'
                      iconDefault="ios-settings-outline"
                      iconSelected="ios-settings"
                      navigationBarStyle={navigationBarStyle}
                      sceneStyle={sceneStyle}
                  /> 

                  <Scene
                      key="Chats"
                      component={ListChat}
                      renderTitle={Header}
                      textCenter='Favorites' 
                      textLeft='Edit'
                      iconHeader={<Icon name="ios-add-outline" size={40} color="#0173fa" />}
                      icon={TabIcon}
                      title='Favorites'
                      iconDefault="ios-star-outline"
                      iconSelected="ios-star"
                      navigationBarStyle={navigationBarStyle}
                      sceneStyle={sceneStyle}
                  />
                  
                </Scene>
            </RouterWidthRedux>
        );
    }
};

const styles = {
    sceneStyle: {
        paddingTop: 50,
    },
    navigationBarStyle: {
        backgroundColor: 'yellow',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        height: 50
    },
};

export default RouterComponent;
