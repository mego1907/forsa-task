import React, { useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { 
  BannerSec, 
  BrandsSec, 
  Header, 
  OffersSec, 
  RequestSec 
} from '../components'
import { NoteIcon } from '../icons';
import useFetch from '../hooks/useFetch';

const topBrandsBg = require("../assets/images/topBrandsBg.png")


const Home = () => {

  const { data, isLoading, error } = useFetch("stores/myoffers/");


  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            width: "168%",
            height: 420,
            backgroundColor: "#072040",
            borderRadius: 500,
            position: "absolute",
            left: -130,
            top: -200
          }}
        />
        <Header />
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#FFC709",
            padding: 5,
            margin: 20,
            borderRadius: 8,
            gap: 8,
            paddingHorizontal: 12
          }}
        >
          <NoteIcon />

          <View>
            <Text
              style={{
                color: "#FFC709",
                fontSize: 16
              }}
            >
              Get your limit
            </Text>
            <Text
              style={{
                color: "#FFC709",
                fontSize: 12,
                fontWeight: 300
              }}
            >
              Complete your infoand get up to EGP 100,000
            </Text>
          </View>
        </View>

        {/* =>> Banner and Brands Section <<= */}
        <View style={{ flex: 1 }}>
          <BannerSec />
          <BrandsSec />

          <Image
            source={topBrandsBg}
            resizeMode='cover'
            style={{
              position: "absolute",
              zIndex: 1,
              top: 60,
              left: 50
            }}
          />
        </View>

        {/* =>> Requests Section <<= */}
        <RequestSec />

        {/* =>> Offers Section <<= */}
        <OffersSec data={data} />

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home