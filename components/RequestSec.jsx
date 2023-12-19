import { View, Text, FlatList, ImageBackground, ActivityIndicator } from 'react-native'
import React from 'react'
import SectionTitle from './SectionTitle'
import useFetch from '../hooks/useFetch'

const additionalLoanImgs = [
  require("../assets/images/Vector1.png"),
  require("../assets/images/Vector2.png"),
  require("../assets/images/Vector3.png"),  
  require("../assets/images/Vector4.png"),
  require("../assets/images/Vector5.png"),
  require("../assets/images/Vector6.png"),
  require("../assets/images/Vector7.png"),
  require("../assets/images/Vector8.png")
]

const RequestSec = () => {

  const { data, isLoading, error } = useFetch("onetransaction/myservicetypes/");

  return (
    <View style={{ flex: 1 }}>
      <SectionTitle
        title="Request Additional Loan" 
        btn="See Less" 
        btnStyle={{
          fontSize: 18
        }}
      />

      {
        isLoading && (
          <ActivityIndicator />
        )
      }

      <FlatList
        data={data.results}
        numColumns={2}
        contentContainerStyle={{
          gap: 10
        }}
        columnWrapperStyle={{
          gap: 20
        }}
        style={{
          paddingHorizontal: 20
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ImageBackground
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: 56
              }}
              source={additionalLoanImgs[item.id]}
              resizeMode='cover'
            >
              <Text style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>{item.name}</Text>
            </ImageBackground>
          )
        }}
      />
    </View>
  )
}

export default RequestSec