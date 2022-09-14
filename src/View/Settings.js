import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {useQuery} from 'react-query';

let time = 0;
const Settings = () => {
  const getDatawithFetch = () =>
    fetch('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        throw error;
      });

  const {isLoading, isError, data, error} = useQuery('todos', getDatawithFetch);

  console.log('isError', isError, 'error', error);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      {data && (
        <FlatList
          data={data.data}
          renderItem={({item}) => (
            <Text style={styles.flatListText}>{item.employee_name}</Text>
          )}
        />
      )}
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

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';
// import axios from 'axios';
// import {useQuery} from 'react-query';

// let time = 0;
// const Settings = () => {
//   const [empleesData, setEmpleesData] = useState();
//   const [name, setName] = useState('');
//   const [count, setCount] = useState('1');

//   const onHappy = () => {};

//   const getDatawithFetch = () =>
//     fetch('https://dummy.restapiexample.com/api/v1/employees')
//       .then(response => response.json())
//       .then(data => data)
//       .catch(error => error);

//   const {isLoading, isError, data, error} = useQuery('todos', getDatawithFetch);

//   const getDatawithAxios = () =>
//     axios
//       .get('https://dummy.restapiexample.com/api/v1/employees')
//       .then(response => response.data)
//       .catch(error => error);

//   function Plus(a, b) {
//     console.log(a + b);
//   }

//   const Multiply = (a, b) => {
//     console.log(a ** b);
//   };

//   console.log('isLoading', isLoading);
//   console.log('data', data, 'error', error);

//   if (isLoading) {
//     return (
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <ActivityIndicator />
//       </View>
//     );
//   }

//   return (
//     <View
//       style={{
//         flex: 1,
//       }}>
//       {data && (
//         <FlatList
//           data={data.data}
//           renderItem={({item}) => (
//             <Text style={styles.flatListText}>{item.employee_name}</Text>
//           )}
//         />
//       )}
//       {/* <Text style={{fontSize: 30, fontWeight: 'bold', alignSelf: 'center'}}>
//         {count}
//       </Text> */}
//     </View>
//   );
// };
// export default Settings;

// const styles = StyleSheet.create({
//   buttonStyle: {
//     height: 40,
//     width: 100,
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: 'white',
//   },
//   flatListText: {
//     fontSize: 20,
//     width: '100%',
//     fontWeight: 'bold',
//     color: 'black',
//   },
// });
