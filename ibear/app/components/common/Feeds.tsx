import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';


interface FeedComp {};

const FeedComp = ({content, image, command, like , share , dislike}) => {
    return (
        // CONTAINER
        <View>
            {/* content */}
            <View>
                <Text>{content}</Text>
            </View>
            {/* image */}
            <View>
                <Image  src={image} />
            </View>
            
            {/* like and share */}
            <View>

            {command && (
                <TouchableOpacity>
                    <Text>icon</Text>
                </TouchableOpacity>
            )}

            {/* like icon */}
            {like && (
                <TouchableOpacity>
                    <Text>gsjhdg</Text>
                </TouchableOpacity>
            )}

            {/* share  */}
            {share && (
                <TouchableOpacity>
                    <Text>jsgdfhg</Text>
                </TouchableOpacity>
            )}
            {/* dislike */}
            {dislike && (
                <TouchableOpacity>
                    <Text>sjhgdfh</Text>
                </TouchableOpacity>
            )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})