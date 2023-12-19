import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SectionTitle = ({ title, btn, btnStyle }) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        zIndex: 99
      }}
    >
      <Text
        style={{
          color: "#072040",
          fontSize: 18,
          fontWeight: 700
        }}
      >
        {title}
      </Text>

      <TouchableOpacity>
        <Text
          style={{
            fontSize: 12,
            ...btnStyle 
          }}
        >{btn}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SectionTitle