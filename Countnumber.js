import React, {useState} from 'react'
import { View, Text, StyleSheet, Button} from 'react-native';

const Countnumber = () => {
  const [number, setNumber] = useState(0)
    return (
        <View>
            <Text style={styles.text}>{number}</Text>
            <Button title="Tambah" onPress={()=> setNumber(number+5)}/>
            <Button title="Reset" onPress={()=> setNumber(0)} color="red"/>
        </View>
  )
}

export default Countnumber

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        fontWeight: 'bold',
    }
})