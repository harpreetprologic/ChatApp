import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

const Chat = props => {
  return (
    <View
      style={{
        justifyContent: 'center',
        borderWidth: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: '#075e55',
          borderWidth: 1,
          height: 54,
          alignItems: 'center',
        }}>
        <Text style={styles.button}>Chat</Text>
        <Text style={styles.button}>Status</Text>
        <Text style={styles.button}>Calls</Text>
      </View>

      <FlatList
        data={[{name: 'Raman'}, {name: 'Happy'}, {name: 'Harpreet'}]}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', width: '100%'}}>
            <Image
              source={require('../assets/profile1..jpeg')}
              style={styles.Image}
            />

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.Name}>{item.name}</Text>
                <Text style={styles.Viewmgs}>Hii</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginTop: 10,
                }}>
                Yesterday
              </Text>
            </View>
          </View>
        )}
      />

      {/* <ScrollView>
        <View style={{backgroundColor: 'white', padding: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/profile.jpeg')}
              style={styles.Image}
            />

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.Name}>Gurdeep kaur</Text>
                <Text style={styles.Viewmgs}>Hii</Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                marginTop: 10,
              }}>
              4:36 PM
            </Text>
          </View>



          <View style={{flexDirection: 'row', width: '100%'}}>
            <Image
              source={require('../assets/profile2..jpeg')}
              style={styles.Image}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.Name}>Harpreet</Text>
                <Text style={styles.Viewmgs}>Hii</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginTop: 10,
                }}>
                4:36 PM
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', width: '100%'}}>
            <Image
              source={require('../assets/profile3..jpeg')}
              style={styles.Image}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.Name}>Raman</Text>
                <Text style={styles.Viewmgs}>Hii</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginTop: 10,
                }}>
                4:36 PM
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <Image
              source={require('../assets/profile4..jpeg')}
              style={styles.Image}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.Name}>Riya</Text>
                <Text style={styles.Viewmgs}>Hii</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginTop: 10,
                }}>
                2:36 PM
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', width: '100%'}}>
            <Image
              source={require('../assets/profile6..jpeg')}
              style={styles.Image}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.Name}>Mane</Text>
                <Text style={styles.Viewmgs}>Hii</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginTop: 10,
                }}>
                2:36 PM
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <Image
              source={require('../assets/profile7..jpeg')}
              style={styles.Image}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.Name}>Diya</Text>
                <Text style={styles.Viewmgs}>Hii</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginTop: 10,
                }}>
                2:40 PM
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <Image
              source={require('../assets/profile3..jpeg')}
              style={styles.Image}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.Name}>Simran</Text>
                <Text style={styles.Viewmgs}>Hii</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginTop: 10,
                }}>
                2:40 PM
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            <Image
              source={require('../assets/profile5..jpeg')}
              style={styles.Image}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.Name}>Kiran</Text>
                <Text style={styles.Viewmgs}>Hii</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginTop: 10,
                }}>
                2:36 PM
              </Text>
            </View>
          </View>
        </View>
      </ScrollView> */}
    </View>
  );
};
export default Chat;
const styles = StyleSheet.create({
  Viewmgs: {
    fontSize: 15,
    marginLeft: 15,
    fontWeight: '600',
    justifyContent: 'center',
  },
  Name: {
    fontSize: 15,
    color: 'black',
    fontWeight: '800',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  Time: {
    fontSize: 10,
    fontWeight: '400',
    marginTop: 10,
  },
  Image: {
    width: 50,
    height: 50,
    marginTop: 10,
    borderRadius: 900,
    resizeMode: 'contain',
  },
  button: {
    fontSize: 22,
    color: 'black',
    fontWeight: '800',
  },
});
