import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {QueryClient, QueryClientProvider} from 'react-query';

import Home from './src/View/Home';
import Chat from './src/View/Chat';
import Login from './src/View/Login';
import Settings from './src/View/Settings';
import Profile from './src/View/Profile';
import Map from './src/View/Map';
import RegisterScreen from './src/View/RegisterScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

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
        name="Map"
        component={Map}
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
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <View
        style={{
          flex: 1,
        }}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                name="login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen
                name="BottomTabs"
                component={BottomTabs}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </View>
    </QueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  tabIcon: {
    width: 25,
    height: 25,
  },
});
