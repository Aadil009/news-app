import React from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'

const Screen = ({children, isSearchFocused}) => {
    const keyboardShouldPersistTaps = isSearchFocused ? 'always' : 'never'
    return (
        <ScrollView keyboardShouldPersistTaps={keyboardShouldPersistTaps} scrollEnabled={!isSearchFocused} style = {styles.container}>
            {children}
        </ScrollView>
    )
}

export default Screen;

const styles = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: '#fd9644',
        flex: 1,
    }
})
