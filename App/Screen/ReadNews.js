import { View, Text, Image, TouchableOpacity, Share, Button, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Color from '../Shared/Color';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

export default function ReadNews() {
  const news = useRoute().params.news;
  const navigation = useNavigation();

  const shareNews = () => {
    Share.share({
      message: news.title + "\nRead More" + news.description
    })
  }
  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1, }}>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> shareNews()}>
          <MaterialCommunityIcons name="share-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <Image style={{height:300, marginBottom:10, borderRadius:10}} source={{ uri: news.urlToImage }} />
      <Text style={{fontWeight:"bold", marginBottom:10}}>{news.title}</Text>
      <Text style={{ marginBottom: 10, color: Color.primary }}>{news.source.name}</Text>
      <Text style={{ marginBottom: 10, lineHeight:20}}>{news.description}</Text>
       <Button title="Read More" onPress={()=> WebBrowser.openBrowserAsync(news.url)} />
    </ScrollView>
  )
}