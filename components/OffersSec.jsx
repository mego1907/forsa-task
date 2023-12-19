import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import SectionTitle from './SectionTitle'
import OfferCard from './OfferCard'
import useFetch from '../hooks/useFetch'

const OffersSec = () => {
  const { data, isLoading, error } = useFetch("stores/myoffers/");

  return (
    <View style={{ flex: 1, marginHorizontal: 20 }}>
      <SectionTitle 
        title="Offers Select for You" 
        btn="See All" 
        btnStyle={{ fontSize: 18 }} 
      />


      {
        isLoading && (
          <ActivityIndicator />
        )
      }

      <FlatList 
        data={data.results}
        numColumns={2}
        columnWrapperStyle={{
          gap: 20
        }}
        renderItem={({ item }) => <OfferCard {...item} />}
      />

    </View>
  )
}

export default OffersSec