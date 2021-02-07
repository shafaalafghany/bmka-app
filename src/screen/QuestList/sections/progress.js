import React, {useEffect, useState} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Pressable,
    ScrollView,
} from 'react-native'

import {AnimatedCircularProgress} from 'react-native-circular-progress'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import AnimateNumber from 'react-native-animate-number'

import axios from '../../../utils/axios'

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
    },
    progressLevelContainer:{
        flexDirection:'column',
        alignItems: 'center',
    },
    progressLevel:{
        fontSize: 48,
        color: '#337eff',
        fontWeight: 'normal',
    },
    progressLevelCaption:{
        marginTop: -8,
        color: '#337eff',
    }
})

export default function Progress(){

    const [stats, setStats] = useState({
        level: 0,
        exp: 0,
        maxExp: 0,
        progress: 0,
        loading: false,
    })

    useEffect(() => {
        axios.get('user/level')
        .then((response) => {
            let data = response.data
            let level = data.level
            setStats( prev => {
                return{
                    ...prev,
                    level: level,
                }
            })
        })
        .catch((error) => {
            console.log(error)
        })
    },[])
    
    return (
        <View style={styles.progress}>
            <AnimatedCircularProgress
                size={120}
                width={8}
                rotation={0}
                fill={stats.progress}
                duration={1000}
                // easing={Easing.bounce}
                tintColor="#39f"
                // onAnimationComplete={}
                backgroundColor="#3d5875">
                    {
                        () => (
                            <View style={styles.progressLevelContainer}>
                                {
                                   stats.loading? <Text style={styles.progressLevel}>-</Text>
                                        : <AnimateNumber style={styles.progressLevel} value={stats.level} formatter={
                                            val => Math.round(val)
                                        } />
                                }
                                <Text style={styles.progressLevelCaption}>LEVEL</Text>
                            </View>
                        )
                    }
            </AnimatedCircularProgress>
            <View style={styles.progressItem}>
                <Text style={styles.progressTitle}>EXP</Text>
                {
                    stats.loading? <SkeletonPlaceholder backgroundColor="#BDBDBD" highlightColor="#D8D8D8">
                        <SkeletonPlaceholder.Item height={18} width={40} marginTop={6} borderRadius={50}  />
                    </SkeletonPlaceholder>
                    : <AnimateNumber style={styles.progressValue} value={stats.exp} formatter={val => `${Math.round(val)}/${stats.maxExp}`} />
                }
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
    )
}