import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [loadingsc, setLoadingsc] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingsc(false);
    }, 2000);
  }, []);

  if (loadingsc) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#ffddcc'}}>
      <TextInput
        style={styles.Email}
        placeholder={'Email'}
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        style={styles.Password}
        secureTextEntry
        placeholder={'Password'}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity
        style={styles.botton}
        onPress={() => props.navigation.navigate('BottomTabs')}>
        <Text style={{color: 'white', fontWeight: '800'}}>Login</Text>
        {loading && (
          <ActivityIndicator color={'white'} style={{marginLeft: 10}} />
        )}
      </TouchableOpacity>

      <Text style={styles.forgotStyle} onPress={() => {}}>
        Forget Password?
      </Text>

      <Text style={styles.notStyle}>
        Not Register?
        <Text
          onPress={() => {
            props.navigation.navigate('RegisterScreen');
          }}
          style={{
            color: 'green',
          }}>
          Create Account
        </Text>
      </Text>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  Button: {
    flex: 1,
    width: 20,
    height: 20,
  },
  Email: {
    width: '95%',
    height: 60,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 15,
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  Password: {
    width: '95%',
    height: 60,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  botton: {
    width: '95%',
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 15,
    flexDirection: 'row',
  },
  forgotStyle: {
    fontSize: 20,
    color: 'green',
    fontWeight: '800',
    marginTop: 20,
    alignSelf: 'flex-start',
    marginLeft: '5%',
  },
  notStyle: {
    color: 'black',
    bottom: 30,
    alignSelf: 'center',
    position: 'absolute',
    fontWeight: 'bold',
  },
});
