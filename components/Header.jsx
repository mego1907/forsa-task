import { View, Text, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Logo, NotificationIcon } from "./../icons";


const Header = ({leftSec, centerSec, rightSec}) => {
  return (
    <View 
      style={{ 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        paddingHorizontal: 20, 
        paddingTop: 10 
      }}
    > 
      {
        leftSec ? leftSec : (
          <AntDesign
            name="search1"
            size={24}
            color="#fff"
          />
        )
      }
      
      {centerSec ? centerSec : <Logo />}
      
      <View style={{ flexDirection: "row", gap: 9 }}>
        <MaterialIcons name="favorite-border" size={28} color="#fff" />
        <NotificationIcon />
      </View>
    </View>
  )
}

export default Header