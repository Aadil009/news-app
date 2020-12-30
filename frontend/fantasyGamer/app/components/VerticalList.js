import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Title from './Title'
import VerticalCard from './VerticalCard';
import {useNavigation} from '@react-navigation/native'

const VerticalList = ({title,data}) => {
    const navigation = useNavigation()
    return (
        <View>
            {title && <Title>{title}</Title>}
                <View style={styles.container} >
                    {data.map(item=> <VerticalCard item={item} key={item.id} onPress={()=> navigation.navigate('NewsDetail', {item})} /> )}
                </View>
        </View>
    )
}

export default VerticalList

const styles = StyleSheet.create({
    container:{
        marginVertical: 15,
    }
})
