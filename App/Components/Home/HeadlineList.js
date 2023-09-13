import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Color from '../../Shared/Color'
import { useNavigation } from '@react-navigation/native';

export default function HeadlineList({ newsList }) {
    const navigation = useNavigation();

  return (
    <View style={{marginTop:15}}>
          <FlatList
              data={newsList}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                  return (
                      <View>
                            <View style={{ height: 1, backgroundColor: Color.gray, marginBottom: 10, }}></View>
                          
                            <TouchableOpacity onPress={() => navigation.navigate('read_news', {news:item})} style={{ marginBottom:10, display:'flex', flexDirection:'row'}}>
                                <Image source={{ uri: item.urlToImage }} style={{ height: 150, width: 150, borderRadius: 10 }} />
                                <View style={{ marginLeft:10, marginRight:130}}>
                                    <Text numberOfLines={3} style={{fontWeight:'bold'}}>{item.title}</Text>
                                    <Text style={{color:Color.primary, marginTop:10}}>{item?.source?.name}</Text>
                                </View>

                                
                          </TouchableOpacity>
                          
                      </View>
                  )
              }}
          />
    </View>
  )
}