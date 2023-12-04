import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Linking,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';

const listmasjiddata = () => {
  const jsonUrl =
    'https://script.google.com/macros/s/AKfycbxdvfSlrzLn78_Gt8Byzh1ow8BZKexYn5BANS8vYTD0EA7lfoCQBftscKUcGgJomwKQ8A/exec';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function refreshPage() {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor="#665D5A" />
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View style={styleslist.vback}>
          <Text style={styleslist.title}>MASJID DI BALI</Text>
          <FlatList
            data={dataUser}
            onRefresh={() => {
              refreshPage();
            }}
            refreshing={refresh}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <View>
                <View style={styleslist.vcardC}>
                  <Image src={item.foto} style={styleslist.vcardImg} />
                  <View style={styleslist.vcard}>
                    <Text
                      style={{
                        color: '#DDD7D0',
                        fontSize: 16,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      {item.nama}{' '}
                    </Text>
                  </View>
                  <View style={styleslist.vcard}>
                    <Text style={{color: '#DDD7D0', fontSize: 14}}>
                      Rating: {item.rating}
                    </Text>
                  </View>
                  <View style={styleslist.vcard}>
                    <Text style={{color: '#DDD7D0', fontSize: 14}}>
                      Jam Operasional: {item.operasional}
                    </Text>
                  </View>
                  <View style={styleslist.vcard}>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(
                          'google.navigation:q=' +
                            item.latitude +
                            ',' +
                            item.longitude,
                        )
                      }>
                      <Text
                        style={{
                          color: '#DDD7D0',
                          fontSize: 14,
                          textAlign: 'center',
                        }}>
                        Alamat: {item.Full_Address}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styleslist = StyleSheet.create({
  vback: {
    backgroundColor: '#665C58',
  },
  vcard: {
    flexDirection: 'row',
    // backgroundColor: '#E0D8B0',
    justifyContent: 'center',
    marginVertical: 2,
    paddingTop: 5,
  },
  vcardC: {
    flexDirection: 'column',
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#998775',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7,
  },
  vcardImg: {
    flexDirection: 'row',
    padding: 20,
    height: 170,
    justifyContent: 'center',
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color: '#D3C6BF',
    fontFamily: 'Brush Script MT',
  },
  Image: {
    width: 100,
    height: 50,
    resizeMode: 'stretch',
  },
});

export default listmasjiddata;
