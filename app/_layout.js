import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from "expo-router/tabs";
import { DisCountIcon, RetailIcon, ProfileIcon, HomeIcon } from '../icons';


const tabData = [
  {
    name: "index",
    label: "home",
    Icon: (color, size) => <HomeIcon color={color} size={size} />
  },
  {
    name: "Retail",
    label: "retail",
    Icon: (color, size) => <RetailIcon color={color} size={size} />
  },
  {
    name: "Offers",
    label: "Offers",
    Icon: (color, size) => <DisCountIcon color={color} size={size} />
  },
  {
    name: "Profile",
    label: "Profile",
    Icon: (color, size) => <ProfileIcon color={color} size={size} />
  },
]

const _layout = () => {
  return (
    <Tabs 
      initialRouteName='index' 
      screenOptions={{ 
        headerShown: false, 
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
        } 
      }}
    >
      {
        tabData.map(({ name, Icon, label }) => (
          <Tabs.Screen
            key={label}
            name={name}
            options={{
              tabBarIcon: ({ color, size, focused }) => {
                const newColor = focused ? "#072040" : "#C9C9C9"
                return Icon(newColor, size)
              },
              tabBarLabel: ({ color, size, focused }) => {
                return(
                  <Text
                    style={{ 
                      color: focused ? "#072040": "#C9C9C9",
                      fontSize: 16 
                    }}
                  >
                    {label}
                  </Text>
                )
              }
            }}
          />
        ))
      }
    </Tabs>
  )
}

export default _layout