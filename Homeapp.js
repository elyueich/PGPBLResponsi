import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';

const Homeapp = () => {
  return (
    <ScrollView>
      <StatusBar barStyle={'light-content'} backgroundColor="#665D5A" />
      {/* BACKGROUND */}
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={{width: '100%', height: '144%', position: 'absolute'}}
      />

      <View style={stylesHome.overlay} />

      {/* Title */}
      <View style={stylesHome.vtitle}>
        <Image
          source={require('./data/ayumasjid.png')}
          style={stylesHome.TImg}
        />
        <Text style={stylesHome.Ttitle}>Masjid in Bali</Text>
      </View>

      {/* Fill */}

      {/* Description */}
      <Text style={stylesHome.TFilltitle}>D E S C R I P T I O N</Text>
      <View style={stylesHome.VFillHome}>
        <Text style={stylesHome.TFillHome}>
          {' '}
          Muslim in Bali adalah aplikasi yang menyediakan informasi yang
          diperlukan umat muslim yang berada atau sedang berkunjung ke Bali.
          Tujuannya untuk memudahkan umat muslim untuk beraktifitas tanpa
          melupakan kewajiban dan larangannya. Salah satu informasi yang saat
          ini disediakan adalah informasi terkait dengan persebaran Masjid. Akan
          disediakan titik lokasi masjid yang terdapat di Bali serta fitur
          routing ke lokasi masjid tersebut. Dengan demikian, pengguna dapat
          menemukan masjid terdekat dan menghindari dari melupakan kewajiban
          yang seharusnya ditunaikan.
        </Text>
      </View>

      {/* SERVICES */}
      <Text style={stylesHome.TFilltitle}>S E R V I C E S</Text>
      <View style={stylesHome.VFillServicesC}>
        <View style={stylesHome.VFillServicesR}>
          <Image
            source={require('./data/services-map.png')}
            style={stylesHome.FSImg}
          />
          <Text style={stylesHome.R}>Lokasi Titik Masjid</Text>
        </View>
        <View style={stylesHome.VFillServicesR}>
          <Text style={stylesHome.R}>Informasi Masjid</Text>
          <Image
            source={require('./data/services-popup.png')}
            style={stylesHome.FSImg}
          />
        </View>
        <View style={stylesHome.VFillServicesR}>
          <Image
            source={require('./data/services-list.jpg')}
            style={stylesHome.FSImg}
          />
          <Text style={stylesHome.R}>List Data Masjid</Text>
        </View>
        <View style={stylesHome.VFillServicesR}>
          <Text style={stylesHome.R}>Add Data Masjid</Text>
          <Image
            source={require('./data/services-add.jpg')}
            style={stylesHome.FSImg}
          />
        </View>
      </View>

      {/* GALERI */}
      <Text style={stylesHome.TFilltitle}>G A L E R I</Text>
      <View style={stylesHome.VGaleri}>
        <Image
          source={{
            uri: 'https://lh5.googleusercontent.com/p/AF1QipNdgSrtg-U9w8leF5LvosSuJA35YudsmRbeN5si=w122-h92-k-no',
          }}
          style={stylesHome.ImgGaleri}
        />
        <Image
          source={{
            uri: 'https://lh5.googleusercontent.com/p/AF1QipN8qKY7tGjGGL2vN3gkxLF04RF7ACh3XcT55Cjp=w163-h92-k-no',
          }}
          style={stylesHome.ImgGaleri}
        />
      </View>

      <View style={stylesHome.VGaleri}>
        <Image
          source={{
            uri: 'https://lh5.googleusercontent.com/p/AF1QipNLB4wDJK9D8jFQVTuw9sGjD7Onj9WbvMTzS0gf=w92-h92-k-no',
          }}
          style={stylesHome.ImgGaleri}
        />
        <Image
          source={{
            uri: 'https://lh5.googleusercontent.com/p/AF1QipNNOLIg89pVa8XKQ4xVSdzqaRYU63cb0PDnvXAM=w184-h92-k-no',
          }}
          style={stylesHome.ImgGaleri}
        />
      </View>
      <View style={stylesHome.VGaleri}>
        <Image
          source={{
            uri: 'https://lh5.googleusercontent.com/p/AF1QipOUmvAoLWxihVmUNQRarkEXebvUowlGswt4qlKH=w163-h92-k-no',
          }}
          style={stylesHome.ImgGaleri}
        />
        <Image
          source={{
            uri: 'https://lh5.googleusercontent.com/p/AF1QipNComrui1LscHFkoBUi1pXQj4L-vPk65ZKwPejq=w163-h92-k-no',
          }}
          style={stylesHome.ImgGaleri}
        />
      </View>
    </ScrollView>
  );
};

const stylesHome = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '144%',
  },
  vtitle: {
    // padding: 20,
    marginVertical: 20,
    marginLeft: 15,
    marginRight: 10,
    alignItems: 'center',
    resizeMode: 'stretch',
    flexDirection: 'row',
  },
  Ttitle: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#DEA057',
    fontFamily: 'Brush Script MT',
  },
  TImg: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
  },
  VFillHome: {
    // padding: 20,
    alignItems: 'center',
    resizeMode: 'stretch',
  },
  TFillHome: {
    textAlign: 'justify',
    // color: '#EBF3E8',
    color: '#FCFFE7',
    // marginTop: 20,
    marginHorizontal: 8,
    paddingLeft: 20,
    paddingRight: 20,
    marginVertical: 10,
    fontFamily: 'Brush Script MT',
  },
  VGaleri: {
    padding: 10,
    justifyContent: 'center',
    resizeMode: 'stretch',
    flexDirection: 'row',
  },
  ImgGaleri: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    marginHorizontal: 10,
  },
  TFilltitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: '#DEA057',
    fontFamily: 'Brush Script MT',
  },
  FSImg: {
    width: 150,
    height: 100,
    resizeMode: 'stretch',
    marginVertical: 10,
  },
  VFillServicesC: {
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  VFillServicesR: {
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  R: {
    fontSize: 15,
    padding: 20,
    textAlignVertical: 'center',
    color: '#FCFFE7',
  },
});

export default Homeapp;
