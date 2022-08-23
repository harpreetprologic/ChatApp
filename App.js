import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';

import Home from './src/View/Home';
import Find from './src/View/Find';
import Chat from './src/View/Chat';
import Tabs from './src/View/Tabs';
import Login from './src/View/Login';
import Settings from './src/View/Settings';
import Profile from './src/View/Profile';
import New from './src/View/New';
import Call from './src/View/Call';
import NewTab from './src/View/NewTab';
//import Tabss from './src/View/Tabss';

import RegisterScreen from './src/View/RegisterScreen';
import HomeScreen from './src/View/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/assets/home.png')}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/assets/chat.png')}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},

          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/assets/user.png')}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},

          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/assets/settings.png')}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NewTab"
        component={NewTab}
        options={{
          tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},

          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./src/assets/settings.png')}
              style={styles.tabIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="RegisterScreen">
            <Stack.Screen
              name="BottomTabs"
              component={BottomTabs}
              options={{headerShown: false}}
            />
            {/* <Stack.Screen
            name="Chat"
            component={Chat}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="New"
            component={New}
            options={{headerShown: false}}
          />{' '} */}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  tabIcon: {
    width: 25,
    height: 25,
  },
});
