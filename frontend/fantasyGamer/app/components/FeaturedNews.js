import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BlockCard from './BlockCard'

import {useNavigation} from '@react-navigation/native'

const FeaturedNews = ({item}) => {
    const navigation = useNavigation();

    return <BlockCard onPress={()=>navigation.navigate('NewsDetail', {item})} item={item} style={{marginVertical: 15}} />
}

export default FeaturedNews

const styles = StyleSheet.create({})
