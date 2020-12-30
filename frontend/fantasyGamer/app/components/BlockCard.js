import React from 'react'
import { Image, StyleSheet, Text, View , TouchableWithoutFeedback} from 'react-native'
import Title from './Title';
import Subtitle from './Subtitle'
const BlockCard = ({style, imageStyle,item, onPress}) => {
    const {thumbnail, title, desc} = item;
    //console.log(thumbnail+'hey')
    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View style={[styles.container,style]}>
                <Image style={[styles.image, imageStyle]} 
                    source={{uri: thumbnail}} />
                <View style={styles.contentContainer}>
                    <Title>{title}</Title>
                    <Subtitle>{desc}</Subtitle>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default BlockCard

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:300,
        borderRadius: 20,
        overflow:'hidden',
        backgroundColor:'#d1d8e0',
        borderWidth:1,
        borderColor:'white'
        
    },
    image: {
        width: '100%',
        height: 200
    },
    contentContainer:{
        padding:5
    }
})
