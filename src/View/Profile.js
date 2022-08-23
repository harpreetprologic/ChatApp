import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

const Profile = props => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [isSecureEntry1, setIsSecureEntry1] = useState(true);
  const [isSecureEntry2, setIsSecureEntry2] = useState(true);
  const [isSecureEntry3, setIsSecureEntry3] = useState(true);

  return (
    <View style={{justifyContent: 'center'}}>
      <ScrollView styles={{width: 40}}>
        <View style={{backgroundColor: 'white'}}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: '400',
              justifyContent: 'flex-end',
              alignSelf: 'flex-end',
              marginEnd: 10,
              marginTop: 20,
            }}>
            Save
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: '400',
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
              marginTop: 10,
              marginStart: 10,
              marginBottom: 10,
            }}>
            Edit Profile
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              height: 15,
              width: 15,
              alignSelf: 'flex-end',
              marginEnd: 10,
              marginTop: 15,
            }}
            onPress={() => setIsSecureEntry()}>
            <Image
              source={require('../assets/editv_ic.png')}
              style={{
                height: 15,
                width: 15,
              }}
            />
          </TouchableOpacity>

          <Image
            source={require('../assets/profile.jpeg')}
            style={{
              width: 150,
              height: 150,
              justifyContent: 'center',
              marginTop: 10,
              alignSelf: 'center',
              borderRadius: 900,
              resizeMode: 'contain',
            }}
          />

          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: '600',
              justifyContent: 'center',
              alignSelf: 'center',
              padding: 15,
            }}>
            PROFILE PHOTO
          </Text>
        </View>

        <View style={{justifyContent: 'center', backgroundColor: 'white'}}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: '400',
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
              marginTop: 10,
              marginLeft: 15,
            }}>
            NAME
          </Text>
          <View style={styles.EmailView}>
            <Text style={styles.Email}>Harpreet Kaur</Text>

            <TouchableOpacity
              style={{height: 25, width: 25}}
              onPress={() => setIsSecureEntry1()}>
              <Image
                source={require('../assets/next.png')}
                style={{
                  resizeMode: 'contain',
                  height: 25,
                  width: 25,
                  tintColor: 'black',
                }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: '400',
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
              marginTop: 10,
              marginStart: 15,
            }}>
            EMAIL
          </Text>

          <View style={styles.PasswordView}>
            <Text style={styles.Password}>harpreet12@gmail.com</Text>

            <TouchableOpacity
              style={{height: 25, width: 25}}
              onPress={() => setIsSecureEntry()}>
              <Image
                source={require('../assets/next.png')}
                style={{
                  resizeMode: 'contain',
                  height: 25,
                  width: 25,
                  tintColor: 'black',
                }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: '400',
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
              marginTop: 10,
              marginStart: 15,
            }}>
            TITLE
          </Text>
          <View style={styles.TitleView}>
            <Text style={styles.Title}>Developer</Text>

            <TouchableOpacity
              style={{height: 25, width: 25}}
              onPress={() => setIsSecureEntry2()}>
              <Image
                source={require('../assets/next.png')}
                style={{
                  resizeMode: 'contain',
                  height: 25,
                  width: 25,
                  tintColor: 'black',
                }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: '400',
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
              marginTop: 10,
              marginStart: 15,
            }}>
            Location
          </Text>
          <View style={styles.LocationView}>
            <Text style={styles.Location}>Karnana</Text>

            <TouchableOpacity
              style={{height: 25, width: 25}}
              onPress={() => setIsSecureEntry3()}>
              <Image
                source={require('../assets/next.png')}
                style={{
                  resizeMode: 'contain',
                  height: 25,
                  width: 25,
                  tintColor: 'black',
                }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.botton} onPress={() => {}}>
            <Text style={{color: 'white', fontWeight: '800'}}>Done</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {flex: 1, justifyContent: 'center'},
  Email: {
    width: '92%',
    height: 50,
  },
  Email1: {
    width: '92%',
    height: 50,
  },
  EmailView: {
    width: '95%',
    height: 50,
    borderColor: 'grey',

    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  PasswordView: {
    width: '95%',
    height: 50,
    borderColor: 'grey',

    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Password: {
    width: '92%',
    height: 50,
  },
  TitleView: {
    width: '95%',
    height: 50,
    borderColor: 'grey',

    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Title: {
    width: '92%',
    height: 50,
  },
  LocationView: {
    width: '95%',
    height: 50,
    borderColor: 'grey',

    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Location: {
    width: '92%',
    height: 50,
  },
  botton: {
    width: '95%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 15,
  },
});
