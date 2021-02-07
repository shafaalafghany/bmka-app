import React from 'react'
import { View, Text, Modal, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import axios from '../../utils/axios'

export default function Moudal({ visible, closeModal, content, showButton, buttonTitle, refreshData }) {
    const questDone = () => {
        axios.post('mission/completed', {mission_id:content.id})
        .then(() => {
            closeModal()
            refreshData()
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    // console.log(content)
    return (
        <Modal
        animationType="fade"
        visible={visible}
        transparent={true}
        >
            <TouchableOpacity style={styles.container} onPress={closeModal}>
                <Pressable style={styles.modalPaper}>
                    <View style={styles.content}>
                        <View style={styles.titleAndData}>
                            <Text style={styles.title}>{content?.name}</Text>
                            <View style={styles.levelAndXP}>
                                <Text style={styles.lv}>LV</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 15, paddingHorizontal: 4}}>{content?.level}</Text>
                            </View>
                            <View style={styles.levelAndXP}>
                                <Text style={styles.xp}>EXP</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 15, paddingHorizontal: 4}}>{content?.poin}</Text>
                            </View>
                        </View>
                        <View style={styles.desc}>
                            <Text>{content?.description}</Text>
                        </View>
                        {showButton && <TouchableOpacity style={styles.button} onPress={questDone}>
                            <Text style={styles.buttonText}>{buttonTitle}</Text>
                        </TouchableOpacity>}
                    </View>
                </Pressable>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center'
    },
    modalPaper: {
        backgroundColor: '#fff',
        width: 312,
        minHeight: 237,
        borderRadius: 24,
        opacity: 1,
        padding: 24
    },
    content: {
        flexDirection: 'column',
    },
    titleAndData: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#2B4141',
        flexGrow: 1,
        maxWidth: 210,
        flexWrap: 'wrap',
    },
    levelAndXP: {
        flexDirection: 'column',
    },
    lv: {
        color: '#C5C7C7',
        fontSize: 10,
    },
    xp: {
        color: '#C5C7C7',
        fontSize: 10
    },
    desc: {
        marginTop: 17,
        minHeight: 57,
    },
    button: {
        height: 40,
        backgroundColor: '#1F99CC',
        borderRadius: 99,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
    },
    buttonText: {
        color: '#fff',
        fontSize: 15
    }
}) 