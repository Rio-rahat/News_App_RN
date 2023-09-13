import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import Color from '../Shared/Color';
import { Ionicons } from '@expo/vector-icons';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';

export default function Home() {
    const [newsList, setNewsList]=useState([])
    useEffect(() => {
        getTopHeadlines()
    }, [])

    useEffect(() => {
        getNewsByCategory("latest")
    }, [])
    const getNewsByCategory=async(category)=>{
        const result = (await GlobalApi.getByCategory(category)).data;
        
    }
    const getTopHeadlines=async()=>{
        const result = (await GlobalApi.getTopHeadlines).data;
        setNewsList(result.articles)
    }
    return (
        <ScrollView style={{backgroundColor:"#fff"}}>
            <View>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={styles.appName}>Rio Rahat</Text>
                    <Ionicons name="notifications-outline" size={25} color="black" />
                </View>
                <CategoryTextSlider />
                <TopHeadlineSlider newsList={newsList} />
                <HeadlineList newsList={newsList} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    appName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Color.primary,
    }

})
