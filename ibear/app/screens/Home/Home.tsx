import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { AppBar } from '../../components'

interface homeProp {};

const Home = (): React.JSX.Element =>{
    return(
        <View>
            {/* app bar */}
            <AppBar title={"Ibear"}/>

            {/* home feeds */}
        </View>
    )
}

export default Home

const style = StyleSheet.create({})