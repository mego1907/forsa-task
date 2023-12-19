import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from "../components";
import SelectDropdown from 'react-native-select-dropdown'
import { FontAwesome } from '@expo/vector-icons';


const profileImg = require("../assets/images/profile-img.png")

const Profile = () => {
  const pickerRef = useRef();

  const [selectedLanguage, setSelectedLanguage] = useState("English");

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const languages = ["English", "Arabic"]


  return (
    <SafeAreaView>
      <View
        style={{
          width: 400,
          height: 400,
          backgroundColor: "#072040",
          borderRadius: 200,
          position: "absolute",
          left: -15,
          top: -260,
          transform: [{scaleX: 2}]
        }}
      />
      <Header 
        leftSec={
          <View 
            style={{ width: 24 }} 
          />
        } 
        centerSec={
          <Text 
            style={{ color: "#fff", fontSize: 24 }}
          >
            Profile
          </Text>
        }
      />

      <View
        style={{
          flexDirection: "row",
          gap: 30,
          paddingHorizontal: 18,
          marginTop: 100
        }}
      >
        
        <Image 
          source={profileImg}
          style={{
            borderRadius: 8
          }}
        />

        <Text
          style={{
            fontSize: 21
          }}
        >
          Mohammed Adel
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: 18
        }}
      > 
        <Text style={{ fontSize: 18, marginTop: 25 }}>Share the app</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <TouchableOpacity
            onPress={open}
          >
            <Text 
              style={{
                fontSize: 18
              }} 
            >Change Language</Text>
          </TouchableOpacity>
          <SelectDropdown
            data={languages}
            onSelect={(selectedItem, index) => {
              setSelectedLanguage(selectedItem)
            }}
            buttonStyle={{
              backgroundColor: "transparent",
              width: 120
            }}
            dropdownIconPosition='right'
            defaultButtonText={selectedLanguage}
            renderDropdownIcon={() => <FontAwesome name="angle-down" size={24} color="black" />}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile