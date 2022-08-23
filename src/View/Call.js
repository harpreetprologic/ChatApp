import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Call = () => {
  const data = () => {};
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 60,
          backgroundColor: 'red',
          alignSelf: 'center',
          borderWidth: 2,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}
        onPress={() => data()}>
        <Text style={{color: 'green', fontSize: 40}}>Data</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Call;
