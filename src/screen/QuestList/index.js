import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Pressable,
    FlatList,
} from 'react-native'

import ProgressCircle from 'react-native-progress-circle'

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
    },
    currentQuestsContainer:{
        marginTop: 9,
        flexDirection: 'column',
    },
    questTitle:{
        fontWeight: 'bold',
        fontSize: 15,
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
    }
})

export default function QuestList(){

    let currentQuests = [
        {
            id: 1,
            title: 'Ini Title',
            level: 99,
            exp: 28734
        },
        {
            id: 2,
            title: 'Ini Title',
            level: 99,
            exp: 9387
        },
        {
            id: 2,
            title: 'Ini Title',
            level: 99,
            exp: 74323
        },
    ]

    const CurrentQuestCard =  (
        <View style={styles.currentQuestsCard}>
            <Text style={styles.questTitle}>{/*title*/}</Text>
            <View style={styles.lvExpContainer}>
                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                    <Text style={styles.levelText}>LV</Text>
                    <Text style={styles.levelValue}>{/*level*/}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                    <Text style={styles.levelText}>EXP</Text>
                    <Text style={styles.levelValue}>{/*exp*/}</Text>
                </View>
            </View>
            <Pressable style={styles.currentQuestButton}>
                <Text style={styles.currentQuestButtonText}>Not Finished</Text>
            </Pressable>
        </View>
    )

    return (
        <View style={styles.container}>
            <View style={styles.progress}>
                <ProgressCircle
                    percent={30}
                    radius={50}
                    borderWidth={8}
                    color="#3399FF"
                    shadowColor="#999"
                    bgColor="#E5E5E5"
                >
                    <Text style={{fontSize: 18}}>30%</Text>
                </ProgressCircle>
                <View style={styles.progressItem}>
                    <Text style={styles.progressTitle}>EXP</Text>
                    <Text style={styles.progressValue}>20/50</Text>
                </View>
                <View style={styles.progressItem}>
                    <Text style={styles.progressTitle}>FINISHED</Text>
                    <Text style={styles.progressValue}>5</Text>
                </View>
                <View style={styles.progressItem}>
                    <Text style={styles.progressTitle}>ONGOING</Text>
                    <Text style={styles.progressValue}>5</Text>
                </View>
            </View>
            <View>
                <Text>CURRENT QUESTS</Text>
                <View style={styles.currentQuestsContainer}>
                   {/* TODO: buat flatlist */}
                </View>
            </View>
            <View style={styles.availableQuests}>
                {/* available quests */}
            </View>
        </View>
    )
}