import { View, Text, Image } from 'react-native'
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';


const OfferCard = ({ 
  expiry_date, 
  thumbnail, 
  category, 
  title, 
  background, 
  description 
}) => {

  const date = expiry_date?.split("T")[0]

  return (
    <View 
      style={{ 
        justifyContent: "center", 
        flex: 1, 
        position: "relative" 
      }}
    >
      <View 
        style={{ 
          backgroundColor: "#fff", 
          borderRadius: 8, 
          padding: 10, 
          elevation: 8  
        }}
      >
        {/* Image */}
        <Image 
          source={{ uri: background }}
          resizeMode='contain'
          width={"100%"}
          height={200}
        />
        {/* Icon */}
        <View
          style={{
            width: 19,
            height: 19,
            position: "absolute",
            right: 10,
            top: "50%",
            backgroundColor: "#A8A8A8",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 19,
          }}
        >
          <MaterialIcons
            name="favorite-outline"
            size={12}
            color="white"
          />
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          transform: "translateY(-40px)",
          borderRadius: 16,
          elevation: 10,
          width: "100%",
          paddingVertical: 15
        }}
      >
        {/* Category */}
        <Text 
          style={{ 
            textAlign: "center",
            color: "#969DA7",
            fontSize: 12, 
          }}
          numberOfLines={1}
        >
          {category.label}
        </Text>

        {/* Title */}
        <Text 
          style={{ 
            textAlign: "center",
            fontSize: 16, 
            marginBottom: 10
          }}
          numberOfLines={2}
        >
          {title}
        </Text>

        {/* Description */}
        <Text
          style={{
            color: "#969DA7",
            fontSize: 12,
            paddingHorizontal: 15
          }}
        >
          {description}
        </Text>
        <Text 
          style={{ 
            color: "#072040", 
            paddingHorizontal: 15, 
            paddingVertical: 10, 
            fontSize: 10 
          }}
        >
          {date}
        </Text>
      </View>
    </View>
  )
}

export default OfferCard