import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Home = props => {
  console.log('width', width);
  console.log('height', height);

  const names = [
    {
      icon: require('../assets/home.png'),
      text: 'Home',
      color: '#a9a039',
    },
    {
      icon: require('../assets/email1.png'),
      text: 'Email',
      color: '#b6b7b7',
    },
    {
      icon: require('../assets/alarm.png'),
      text: 'Alarm',
      color: '#c79381',
    },
    {
      icon: require('../assets/wallet.png'),
      text: 'Wallet',
      color: '#c5204e',
    },
    {
      icon: require('../assets/backup.png'),
      text: 'Backup',
      color: '#b1ad9e',
    },
    {
      icon: require('../assets/book.png'),
      text: 'Book',
      color: '#72af93',
    },
    {
      icon: require('../assets/camera.png'),
      text: 'Camera',
      color: '#b94fe3',
    },
    {
      icon: require('../assets/user.png'),
      text: 'User',
      color: '#b77962',
    },
    {
      icon: require('../assets/print.png'),
      text: 'Print',
      color: '#89e6a9',
    },
    {
      icon: require('../assets/phone.png'),
      text: 'Phone',
      color: '#ce7c9e',
    },
    {
      icon: require('../assets/notes.png'),
      text: 'Notes',
      color: '#9a8695',
    },
    {
      icon: require('../assets/music1.png'),
      text: 'Music',
      color: '#b6b7b5',
    },
  ];

  return (
    <FlatList
      data={names}
      horizontal={false}
      numColumns={3}
      renderItem={({item}) => (
        <View
          style={{
            width: '31%',
            height: 120,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: 4,
            backgroundColor: item.color,
          }}>
          <Image source={item.icon} style={{height: 30, width: 30}} />
          <Text style={styles.textView}>{item.text}</Text>
        </View>
      )}
    />
  );
};
export default Home;

const styles = StyleSheet.create({
  textStyle: {
    height: 50,
    color: 'red',
    width: '45%',

    borderWidth: 1,
    margin: '2.5%',
  },
  textView: {
    color: 'black',
    fontWeight: '400',
    fontSize: 20,
  },
});
