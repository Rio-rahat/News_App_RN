import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Color from '../../Shared/Color'

export default function CategoryTextSlider() {
    const [active, setActive]=useState(1)
    const CategoryList = [
        {
            id: 1,
            name: 'Latest',
        },
        {
            id: 2,
            name: 'World',
        },
        {
            id: 3,
            name: 'Business',
        },
        {
            id: 4,
            name: 'Sport',
        },
        {
            id: 5,
            name: 'Life',
        },
        {
            id: 6,
            name: 'Movie',
        },
        
    ]

    const onCategoryClick = (id) => {
        setActive(id)
    }
  return (
    <View style={{marginTop:10}}>
          <FlatList
              data={CategoryList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                  return (
                      <TouchableOpacity onPress={()=>onCategoryClick(item.id)}>
                          <Text style={item.id == active? styles.selectText:styles.unSelectText}>{item.name}</Text>
                      </TouchableOpacity>
                  )
              }}
          />
    </View>
  )
}


const styles = StyleSheet.create({
    unSelectText: {
        marginRight: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.gray
    },
    selectText: {
        marginRight: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.primary,
    }
})