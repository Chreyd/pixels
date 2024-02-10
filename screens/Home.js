import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photo</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.bleuClair,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontFamily: 'inriaSans-BoldItalic',
        fontSize: 30,
    }
})