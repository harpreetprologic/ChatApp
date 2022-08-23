import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const NewTab = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    jaiHindrepeat();
  }, []);
  const jaiHindrepeat = () => {
    setInterval(() => {
      setTimeout(() => {
        setName('3');
      }, 1000);
      setTimeout(() => {
        setName('2');
      }, 2000);
      setTimeout(() => {
        setName('1');
      }, 3000);
      setTimeout(() => {
        setName('Jai');
      }, 4000);
      setTimeout(() => {
        setName('Jai Hind');
      }, 8000);
    }, 12000);
  };

  return (
    <LinearGradient
      colors={['orange', 'white', 'green']}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text fontSize="6xl">{name}</Text>
    </LinearGradient>
  );
};
export default NewTab;
const styles = StyleSheet.create({});
