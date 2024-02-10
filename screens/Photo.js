import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Photo = ({navigation}) => {
  return (
    <View  style={styles.container}>
      <Text style={styles.text}>Photo</Text>
      <Button
        title="Aller à Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Aller à Photo"
        onPress={() => navigation.push("Photo")}
      />
      <Button
        title="Aller à Porfolio"
        onPress={() => navigation.navigate("Porfolio")}
      />
    </View>
  )
}

export default Photo

const styles = StyleSheet.create({
  container:{
    backgroundColor: "orange",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
text:{
    
}
})