import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Image} from 'react-native';

const New = props => {
  const [search, setSearch] = useState('');
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={styles.Search}>
        <Image
          source={require('../assets/find.png')}
          style={{
            resizeMode: 'contain',
            height: 25,
            width: 25,
            marginTop: 12,
          }}
        />
        <TextInput
          style={styles.button}
          placeholder={'Search'}
          value={search}
          onChangeText={text => setSearch(text)}
        />
      </View>
      <Text>bnbsdchjdb</Text>
    </View>
  );
};
export default New;
const styles = StyleSheet.create({
  button: {width: '100%', height: 50, paddingStart: 10},
  Search: {
    width: '95%',
    height: 55,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 15,
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginTop: 15,
    flexDirection: 'row',
  },
});
