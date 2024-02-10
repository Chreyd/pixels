import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Porfolio = () => {
  return (
    <View  style={styles.container}>
      <Text style={styles.text}>Photo</Text>
    </View>
  )
}

export default Porfolio

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.bleuClair,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        
    }
})