import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import Color from '../Shared/Color';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
    return (
        <View>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={styles.appName}>Rio Rahat</Text>
                <Ionicons name="notifications-outline" size={25} color="black" />
            </View>
            <CategoryTextSlider />
        </View>
    );
}

const styles = StyleSheet.create({
    appName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Color.primary,
    }

})
