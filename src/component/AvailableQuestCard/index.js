import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native'
import Moudal from '../Modal'

export default function AvailableQuestCard({item, setModalShow}){

    return(
        <TouchableOpacity style={styles.card} onPress={() => setModalShow(true)}>
            <View style={styles.row}>
                <View style={styles.content}>
                    <View style={styles.titleAndData}>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.levelAndXP}>
                            <Text style={styles.lv}>LV</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 15}}>{item.level}</Text>
                        </View>
                        <View style={styles.levelAndXP}>
                            <Text style={styles.xp}>EXP</Text>
                            <Text style={{fontWeight: 'bold'}}>{item.exp}</Text>
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.isiDescription}>{item.desc}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
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