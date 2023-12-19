import { View, Text, Image } from 'react-native'
import React from 'react'
import { CheckIcon } from '../icons';
import { Feather } from '@expo/vector-icons';


const note = require("../assets/images/note.png");
// const shape = require("../assets/images/shape.png");
const banner = require("../assets/images/banner.png");

const BannerSec = () => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        height: 138,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#3EBDAC",
        overflow: "hidden",
        zIndex: 99
      }}
    >
      <Image
        source={banner}
        style={{
          width: '100%',
          height: 134, 
          position: "absolute",
          left: 0,
          top: 0
        }}
      />

      <View
        style={{
          width: 73,
          height: 73,
          backgroundColor: "#000",
          borderRadius: 73,
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        <CheckIcon />
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 16 }}>Check out latest offers</Text>
        <Feather name="chevron-right" size={24} color="#fff" />
      </View>

    </View>
  )
}

export default BannerSec