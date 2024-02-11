import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const TouchableImage = ({imgUrl}) => {
  return (
    <View style={styles.photoContainer}>
      <ImageBackground source={{uri: imgUrl}} style={styles.bgPhoto} >
        <View>

        </View>
      </ImageBackground>
    </View>
  )
}

export default TouchableImage

const styles = StyleSheet.create({
    photoContainer:{
        width: "100%",
        height: 350,
        marginVertical: 19/2,
    },
    bgPhoto:{
        width: "100%",
        height: "100%",
    },
})