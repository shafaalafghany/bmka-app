import React from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 25,
        flexDirection: 'column',
    },
    progress:{
      marginBottom: 9,  
    }
})

export default function QuestList(){

    return (
        <View style={styles.container}>
            <View view={styles.progress}>
                {/* progress */}
            </View>
            <View>
                {/* current quests */}
            </View>
            <View>
                {/* available quests */}
            </View>
        </View>
    )
}