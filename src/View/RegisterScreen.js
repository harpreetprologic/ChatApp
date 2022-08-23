import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const RegisterScreen = props => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [gender, setgender] = useState('');
  const [date, setdate] = useState('');

  const userSave = async () => {
    let user = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      date: date,
    };

    let usersArray = await AsyncStorage.getItem('users');
    let newUsersArray = [];
    if (usersArray != null) {
      newUsersArray = JSON.parse(usersArray);
    }
    newUsersArray.push(user);

    AsyncStorage.setItem('users', JSON.stringify(newUsersArray));
    setfirstName('');
    setlastName('');
    setgender('');
    setdate('');
  };

  const register = () => {
    if (firstName == '') {
      alert('Please enter First Name');
    } else if (lastName == '') {
      alert('Please enter Last Name');
    } else if (gender == '') {
      alert('Please enter Gender');
    } else if (date == '') {
      alert('Please enter Date of Birth');
    } else {
      userSave();
    }
  };

  return (
    <View style={{flex: 1}}>
      <TextInput
        style={styles.field}
        placeholder="First Name"
        value={firstName}
        onChangeText={text => setfirstName(text)}
      />

      <TextInput
        style={styles.field}
        placeholder="Last Name"
        value={lastName}
        onChangeText={text => setlastName(text)}
      />
      <TextInput
        style={styles.field}
        placeholder="Gender"
        value={gender}
        onChangeText={text => setgender(text)}
      />

      <TextInput
        style={styles.field}
        placeholder="Birth date"
        value={date}
        onChangeText={text => setdate(text)}
      />
      <TouchableOpacity style={styles.botton} onPress={() => register()}>
        <Text style={{color: 'white', fontWeight: '800'}}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botton}
        onPress={() => props.navigation.navigate('HomeScreen')}>
        <Text style={{color: 'white', fontWeight: '800'}}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  field: {
    width: '90%',
    height: 40,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 10,
    borderRadius: 15,
  },
  botton: {
    width: '60%',
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 15,
  },
});
