import React from 'react'
import { View, Text, Modal, StyleSheet, TouchableOpacity, Pressable } from 'react-native'

export default function Moudal({ visible, closeModal }) {
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
                            <Text style={styles.title}>Melengkapi Data Profil</Text>
                            <View style={styles.levelAndXP}>
                                <Text style={styles.lv}>LV</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 15}}>99</Text>
                            </View>
                            <View style={styles.levelAndXP}>
                                <Text style={styles.xp}>EXP</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 15}}>200</Text>
                            </View>
                        </View>
                        <View style={styles.desc}>
                            <Text>Sebuah teks asal tapi bukan lorem ipsum
karena saya sudah bosan, sekian dan terima
kasih.</Text>
                        </View>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.button} onPress={closeModal}>
                                <Text style={styles.buttonText}>Quest Done</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={closeModal} onPress={closeModal}>
                                <Text style={styles.buttonText}>Take Quest</Text>
                            </TouchableOpacity>
                        </View>
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
        height: 237,
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
        color: '#2B4141'
    },
    levelAndXP: {
        flexDirection: 'column'
    },
    lv: {
        color: '#C5C7C7',
        fontSize: 10
    },
    xp: {
        color: '#C5C7C7',
        fontSize: 10
    },
    desc: {
        marginTop: 17,
        height: 57,
    },
    buttons: {
        flexDirection: 'row',
        margin: 4
    },
    button: {
        width: 125,
        height: 40,
        backgroundColor: '#1F99CC',
        borderRadius: 99,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginEnd: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 15
    }
}) 