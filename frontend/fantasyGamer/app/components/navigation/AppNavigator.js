import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Home';
import NewsDetail from '../NewsDetail';
import NewsList from '../NewsList';



const Stack= createStackNavigator()
const AppNavigator = () => {
    return (
        
            <Stack.Navigator screenOptions={{
                headerTransparent: true,
                headerTitle: '',
                headerTintColor: 'white',
                headerLeftContainerStyle: {
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: 'rgba(92,90,91,0.7)',
                    alignItems: 'center',
                    marginLeft: 10
                }
            }} >
                <Stack.Screen options={{headerShown: false}} name= 'Home' component={Home}  />
                <Stack.Screen name = 'NewsDetail' component={NewsDetail} />
                <Stack.Screen name = 'NewsList' component={NewsList} />
            </Stack.Navigator>
        
    )
}

export default AppNavigator

const styles = StyleSheet.create({})
