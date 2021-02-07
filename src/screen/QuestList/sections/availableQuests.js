import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList, ToastAndroid } from 'react-native'
import {
    AvailableQuestCard,
    Moudal
} from '../../../component'

import axios from '../../../utils/axios'

export default function AvailableQuests(){

    const [modalShow, setModalShow] = useState(false)
    const [content, setContent] = useState([])
    const [selectedContent, setSelectedContent] = useState({})

    useEffect(() => {
        axios.get('mission/available')
        .then((res) => {
            let data = res.data
            setContent(data.data)
        })
        .catch((err) => {
            console.log(err.response)
            ToastAndroid.show('Ups error', ToastAndroid.SHORT)
        })
    }, [])

    const Card = ({ item }) => {
        
        let press = () => {
            setSelectedContent(item); setModalShow(true)
        }

        return (
            <TouchableOpacity style={styles.card} onPress={press}>
                    <View style={styles.row}>
                        <View style={styles.content}>
                            <View style={styles.titleAndData}>
                                <Text style={styles.title}>{item.name}</Text>
                                <View style={styles.levelAndXP}>
                                    <Text style={styles.lv}>LV</Text>
                                    <Text style={{fontWeight: 'bold', fontSize: 15}}>{item.level}</Text>
                                </View>
                                <View style={styles.levelAndXP}>
                                    <Text style={styles.xp}>EXP</Text>
                                    <Text style={{fontWeight: 'bold'}}>{item.poin}</Text>
                                </View>
                            </View>
                            <View style={styles.description}>
                                <Text style={styles.isiDescription}>{item.description.length > 55 ? `${item.description.substring(0,51)}...` : item.description}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <Text style={{marginBottom: 17}}>AVAILABLE QUESTS</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList 
                data={content}
                renderItem={Card}
                keyExtractor={item => item.id}
                />
            </ScrollView>
            <Moudal
            visible={modalShow}
            content={selectedContent}
            closeModal={() => {setModalShow(false)}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flex: 1,
        marginTop: 17,
    },
    card: {
        backgroundColor: '#fff',
        height: 135,
        borderRadius: 18,
        flexDirection: 'column',
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content: {
        flexDirection: 'column',
        marginHorizontal: 14,
        flex: 1,
    },
    titleAndData: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        alignSelf: 'stretch',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        flexGrow: 1,
        fontSize: 15
    },
    lv:{
        color: '#C5C7C7',
        fontSize: 10
    },
    xp: {
        color: '#C5C7C7',
        fontSize: 10
    },
    levelAndXP: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    description: {
        marginTop: 19,
        width: 250,
        height: 36,
        fontSize: 12
    }
})