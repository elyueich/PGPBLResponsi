import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Profile = () => {
  return (
    // <ScrollView>
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor="#665D5A" />
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={{flex: 0.5}}
        resizeMode={'cover'}>
        <View style={{flex: 0.5}}></View>
      </ImageBackground>
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('./data/pict_profil.jpg')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              borderWidth: 3,
              borderColor: '#FFFFFF',
              position: 'absolute',
              zIndex: 2,
            }}
          />
        </View>
        <View style={{marginTop: 50}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>
            Luh Ayu Nurul Azhiima
          </Text>
          <Text style={{textAlign: 'center'}}>Visitors</Text>
          <View style={{marginLeft: 80}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  weight: 40,
                  height: 40,
                }}>
                <Icon
                  name="mobile-alt"
                  style={{
                    fontSize: 25,
                    color: '#900',
                  }}></Icon>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  marginLeft: 10,
                  flex: 1,
                }}>
                <Text style={{fontWeight: 'bold'}}>+62 825 8765 7789</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'google.navigation:q=-3.4041299821248447, 119.3147237490822',
                )
              }>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    weight: 40,
                    height: 40,
                  }}>
                  <Icon
                    name="map-marker-alt"
                    style={{
                      fontSize: 20,
                      color: '#900',
                    }}></Icon>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    marginLeft: 10,
                    flex: 1,
                  }}>
                  <Text style={{fontWeight: 'bold'}}>Polewali Mandar</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=luh.ayu.nurul.azhiima@mail.ugm.ac.id',
                )
              }>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    weight: 40,
                    height: 40,
                  }}>
                  <Icon
                    name="envelope"
                    style={{
                      fontSize: 25,
                      color: '#900',
                    }}></Icon>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    marginLeft: 10,
                    flex: 1,
                  }}>
                  <Text style={{fontWeight: 'bold'}}>
                    luhayunurula@gmail.com
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 40,
              marginHorizontal: 30,
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() =>
                Linking.openURL(
                  'https://youtube.com/@10_luhayunurulazhiima12?si=QFxOK783qELGZ4-l',
                )
              }>
              <Icon name="youtube" size={25} color="#bdbdbd"></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() =>
                Linking.openURL('https://github.com/elyueich/responsi.git')
              }>
              <Icon name="github" size={25} color="#bdbdbd"></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() =>
                Linking.openURL(
                  'https://x.com/Ldump29?t=QPYY14p6Mo3q11bAez5xLQ&s=09',
                )
              }>
              <Icon name="twitter" size={25} color="#bdbdbd"></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => Linking.openURL('https://instagram.com/luhazh')}>
              <Icon name="instagram" size={25} color="#bdbdbd"></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() =>
                Linking.openURL(
                  'https://www.linkedin.com/in/luh-ayu-nurul-azhiima-0349a9279/',
                )
              }>
              <Icon name="linkedin" size={25} color="#bdbdbd"></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
};

export default Profile;
