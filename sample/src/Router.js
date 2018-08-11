import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Tabs } from 'react-native-router-flux';
// import Article from './screens/Article';
// import News from './screens/News';
// import Profile from './screens/Profile';
import Line from './page/Line';
import Home from './page/Home';

const styles = {
  tabIconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIconStyle: {
    width: 24,
    height: 24,
    fontSize: 24,
  },
}

const TabBarIcon = props => (
  <View style={styles.tabIconContainerStyle}>
    <Icon
      name={props.iconName}
      color={props.focused ? 'blue' : 'grey'}
      style={styles.tabIconStyle}
    />
  </View>
);

const RouterComponent = () => {
  return (
    <Router>
      <Tabs
        key='root'
        swipeEnabled={ true }
        animationEnabled={ true }
      >
        <Scene
          key='home'
          component={Home}
          title='ホーム'
          iconName='collections'
          iconColor='red'
          // icon=
        />
        <Scene
          key='line'
          component={Line}
          title='LINE'
          iconName='collections'
          iconColor='red'
          // icon=
        />
      </Tabs>
    </Router>
  )
}

export default RouterComponent;
