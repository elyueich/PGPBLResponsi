import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import WebView from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import ListData from '../listmasjiddata';
import ProfileLuh from '../Profile';
import Homepage from '../Homeapp';

const Tab = createBottomTabNavigator();

// const webMap = require('../peta/map.html');

const forminput = 'https://elyueich.github.io/pgpbl12/';

const webMap = 'https://elyueich.github.io/pgpbl12/map.html';

// function HomeScreen() {
//   return (
// <ScrollView>
//   <View style={styles.listitems}>
//     <Text style={styles.title}> MY MAPS</Text>
//     <Image
//       source={require('../peta/Peta01_PTS.png')}
//       style={styles.Image}
//     />
//     <Text style={styles.caption}>
//       {' '}
//       Peta Hujan Wilayah Metode Polygon Thiessen
//     </Text>
//   </View>
//   <View style={styles.listitems}>
//     <Image
//       source={require('../peta/Peta03_IDW.png')}
//       style={styles.Image}
//     />
//     <Text style={styles.caption}>
//       {' '}
//       Peta Hujan Wilayah Metode Isohyet (IDW)
//     </Text>
//   </View>
//   <View style={styles.listitems}>
//     <Image
//       source={require('../peta/Peta03_Kriging.png')}
//       style={styles.Image}
//     />
//     <Text style={styles.caption}>
//       {' '}
//       Peta Hujan Wilayah Isohyet (Kriging)
//     </Text>
//   </View>
//   <View style={styles.listitems}>
//     <Image
//       source={require('../peta/Peta05_ccs.png')}
//       style={styles.Image}
//     />
//     <Text style={styles.caption}>
//       {' '}
//       Peta Hujan Wilayah Metode Isohyet Model CCS
//     </Text>
//   </View>
//   <View style={styles.listitems}>
//     <Image
//       source={require('../peta/Peta05_cdr.png')}
//       style={styles.Image}
//     />
//     <Text style={styles.caption}>
//       {' '}
//       Peta Hujan Wilayah Metode Isohyet Model CDR{' '}
//     </Text>
//   </View>
// </ScrollView>
//   );
// }

function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>APLIKASI PETA LOKASI OBJECT</Text>
      <Text>Stack: </Text>
      <Text style={styles.listitems}>1. React Native</Text>
      <Text style={styles.listitems}>2. HTML</Text>
      <Text style={styles.listitems}>3. LeafletJS</Text>
      <Text style={styles.listitems}>4. Google Sheet</Text>
      <Text style={styles.listitems}>5. Apps Script</Text>
      <Text style={styles.listitems}>6. FontAwesome 5</Text>
      <Text style={styles.listitems}>7. Github</Text> */}
      {/* <Text style={styles.title}>Masjid di Bali</Text> */}
      <Homepage />
    </View>
  );
}

function MapsScreen() {
  return <WebView source={{uri: webMap}} />;
}

function AddDataScript() {
  return <WebView source={{uri: forminput}} />;
}

function ListDataScreen() {
  return (
    <View>
      {/* <Text style={styles.title}>Masjid di Bali</Text> */}
      <ListData />
    </View>
  );
}

function ProfileScreen() {
  return <ProfileLuh />;
}

// function DeleteScreen() {
//   return (
//     <View>
//       <Getdata />
//     </View>
//   );
// }

function mahasiswaScreen() {
  return (
    <View>
      <Getjsonfile />
    </View>
  );
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false, backgroundColor: 'red'}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            tabBarLabel: 'Maps',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Add Data"
          component={AddDataScript}
          options={{
            tabBarLabel: 'Add Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="plus-square" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="List Data"
          component={ListDataScreen}
          options={{
            tabBarLabel: 'List Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="list" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user" color={color} size={size} />
            ),
          }}
        />

        {/* <Tab.Screen
          name="Delete"
          component={DeleteScreen}
          options={{
            tabBarLabel: 'Delete',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="delete" color={color} size={size} />
            ),
          }}
        /> */}

        {/* <Tab.Screen
          name="Mahasiswa"
          component={mahasiswaScreen}
          options={{
            tabBarLabel: 'Mahasiswa',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="users" color={color} size={size} />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  listitems: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 20,
  },
  Image: {
    width: 300,
    height: 200,
    resizeMode: 'stretch',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    // marginHorizontal: 20,
    // marginVertical: 20,
    backgroundColor: '#fff',
  },
});
