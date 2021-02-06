import React, {useEffect} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Pressable,
    ScrollView,
} from 'react-native'

import Progress from './progress'
import CurrentQuest from './currentQuests'

import {AnimatedCircularProgress} from 'react-native-circular-progress'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 12,
        marginTop: 20,
        backgroundColor: '#E5E5E5',
        flexDirection: 'column',
    },
    progress:{
      marginBottom: 9,  
      marginTop: 24,
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
    progressItem:{
        flexDirection: 'column',
        justifyContent: 'center',
    }, 
    progressTitle:{
        fontWeight: 'bold',
        textAlign: 'center',
    },  
    progressValue:{
        textAlign: 'center',
        marginTop: 6,
    },  
    availableQuests:{
        flexGrow: 1,
    },
    currentQuestsCard: {
        backgroundColor: '#FFF',
        borderRadius: 18,
        padding: 14,
        width: 138,
        height: 135,
        marginHorizontal: 4,
    },
    currentQuestsCardContainer:{
        marginTop: 9,
        flexDirection: 'row',
    },
    questTitle:{
        fontWeight: 'bold',
        fontSize: 15,
        height: 40,
        marginBottom: 7,
    },
    lvExpContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 7,
    },
    levelText:{
        fontSize: 12,
        color: '#808080',
        fontWeight: 'bold',
        marginEnd: 3,
    },
    levelValue:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    currentQuestButton:{
        backgroundColor: '#FFF',
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#C5C7C7',
        marginTop: 10,
        paddingVertical: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    currentQuestButtonText:{
        color: '#C5C7C7',
        fontSize: 12,
    },
    currentQuests:{
        marginTop: 18,
    }
})

export default function availableQuests(){

    return (
        <View style={styles.availableQuests}>
            {/* available quests */}
        </View>
    )
}