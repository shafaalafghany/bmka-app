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
    },
    availableQuests:{
        flexGrow: 1,
    },
    bottomNav:{

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
            <View style={styles.availableQuests}>
                {/* available quests */}
            </View>
        </View>
    )
}