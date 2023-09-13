import { View, Text, FlatList, TouchableOpacity, Image, Dimensions} from 'react-native'
import React from 'react'

import Color from '../../Shared/Color'
import { useNavigation } from '@react-navigation/native'



export default function TopHeadlineSlider({newsList}) {
  const navigation = useNavigation();
  return (
    <View style={{marginTop:15}}>
          <FlatList
              data={newsList}
              horizontal
              showsHorizontalScrollIndicator={false}
              
              renderItem={({item}) => {
                  return (
                        
                        <TouchableOpacity onPress={() => navigation.navigate('read_news', {news:item})} style={{width:Dimensions.get('screen').width*0.80, marginLeft:15}}>
                          <Image source={{ uri: item.urlToImage }} style={{marginBottom:10, height: Dimensions.get('screen').width * 0.77, borderRadius: 10 }} />
                          <Text numberOfLines={2} style={{ fontWeight: 'bold',}}>{item.title}</Text>
                          <Text style={{color:Color.primary}}>{item?.source?.name}</Text>
                        </TouchableOpacity>
                    )
              }}
          />
    </View>
  )
}