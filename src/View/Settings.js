import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
let time = 0;
const Settings = () => {
  const [empleesData, setEmpleesData] = useState();
  const [name, setName] = useState('');
  const [count, setCount] = useState('1');

  const onHappy = () => {};

  function getDatawithFetch() {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(data => {
        console.log('empleesData', data);
        setEmpleesData(data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  function getDatawithAxios() {
    axios
      .get('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => {
        // handle success
        console.log('empleesData', response.data);
        setEmpleesData(response.data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  function Plus(a, b) {
    console.log(a + b);
  }

  const Multiply = (a, b) => {
    console.log(a ** b);
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      {empleesData ? (
        <FlatList
          data={empleesData.data}
          renderItem={({item}) => (
            <Text style={styles.flatListText}>{item.employee_name}</Text>
          )}
        />
      ) : (
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            // getDatawithFetch();
            // getDatawithAxios(); // eh already function call kita hoea // isnu comment krke new line ch kro call
            // Multiply(2, 4);
            onHappy(); // ik war button click krke wait kro... tahi pta lgu kine second wad keda print hoea putt
            //hun code dekho putt te output v nal
          }}>
          <Text style={styles.buttonText}>Get Data</Text>
        </TouchableOpacity>
      )}
      <Text style={{fontSize: 30, fontWeight: 'bold', alignSelf: 'center'}}>
        {count}
      </Text>
    </View>
  );
};
export default Settings;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 40,
    width: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
  flatListText: {
    fontSize: 20,
    width: '100%',
    fontWeight: 'bold',
    color: 'black',
  },
});
