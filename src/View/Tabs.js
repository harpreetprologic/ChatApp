import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text} from 'react-native';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <View>
      <Text>Main</Text>
    </View>
  );
};
export default Tabs;
