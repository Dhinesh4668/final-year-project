import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface AppBar {};

const AppBar = ({title, leftIcon, Righticon})=> {
    return (
        <View style={styles.container}>
            <View>
                <Text>{title}</Text>
                {/* left icon  */}
                {leftIcon && (
                    <TouchableOpacity>
                        <Text>icon</Text>
                    </TouchableOpacity>
                )}
                {/* right icon */}
                {Righticon && (
                    <TouchableOpacity>
                        <Text>Right</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    title: {},
    font: {},
})