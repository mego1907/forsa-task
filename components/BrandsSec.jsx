import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle';
import useFetch from '../hooks/useFetch';


const BrandsSec = () => {
  const [brand, setBrand] = useState("1");

  const [brands, setBrands] = useState([])

  const { data, isLoading, error } = useFetch("stores/mysectors/");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://forsa-staging.bit68.com/api/v1/stores/mystores/?sector=${brand}`);
        const resData = await res.json();

        setBrands(resData?.results);

      } catch (error) {
        // setError(error);
        alert("There is an error")
      } finally {
        // setIsLoading(false);
      }
    }

    fetchData()
  }, [brand])


  const handlePress = (selectedBrand) => {
    setBrand(selectedBrand);
  }



  return (
    <View style={{ flex: 1 }}>
      <SectionTitle
        title="Top brands in retail"
        btn="View all"
      />

      <FlatList
        data={data.results}
        horizontal={true}
        keyExtractor={(item) => item.id}
        style={{
          marginHorizontal: 20,
          paddingVertical: 5,
          zIndex: 99
        }}
        contentContainerStyle={{
          gap: 20
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => handlePress(item.value)}
              style={{
                padding: 5,
                backgroundColor: brand === item.value ? "#3EBDAC" : "transparent",
                borderRadius: 5
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: brand === item.value ? "#FFFFFF" : "#000"
                }}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          )
        }}
      />

      <FlatList
        data={brands}
        horizontal={true}
        keyExtractor={(item) => item.id}
        style={{
          marginHorizontal: 20,
          paddingVertical: 5,
          zIndex: 99
        }}
        contentContainerStyle={{
          gap: 20
        }}
        renderItem={({ item }) => {
          if (item.thumbnail) {

            return (
              <View
                style={{
                  width: 74,
                  height: 58,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#D4D4D4",
                  overflow: "hidden"
                }}
              >
                <Image source={{ uri: item.thumbnail }} resizeMode='contain' width={72} height={"100%"} />
              </View>
            )
          }
        }}
      />


      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 20,
          paddingHorizontal: 20
        }}
      >
        <View
          style={{
            width: 74,
            height: 58,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#D4D4D4",
            overflow: "hidden"
          }}
        >
          <Image source={toshiba} resizeMode='contain' />
        </View>
        <View
          style={{
            width: 74,
            height: 58,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#D4D4D4",
            overflow: "hidden"
          }}
        >
          <Image source={toshiba} resizeMode='contain' />
        </View>
        <View
          style={{
            width: 74,
            height: 58,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#D4D4D4",
            overflow: "hidden"
          }}
        >
          <Image source={toshiba} resizeMode='contain' />
        </View>
        <View
          style={{
            width: 74,
            height: 58,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#D4D4D4",
            overflow: "hidden"
          }}
        >
          <Image 
            source={toshiba} 
            resizeMode='contain' 
          />
        </View>
      </View> */}
    </View>
  )
}

export default BrandsSec