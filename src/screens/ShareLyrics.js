import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, } from 'react-native';
import Input from '../components/TextInput';
import ButtonLarge from '../components/ButtonLarge';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ShareLyrics({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#EEF1F8' }}>
            <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={{ color: 'white' }}>Back</Text>
            </TouchableOpacity>
                <Text style={{ fontSize: 16, color: 'white', marginLeft: '20%' }}>Share</Text>
            </View>
            <ScrollView>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Login with Facebook</Text>
                    <Icon1 name="facebook-square" size={40} color="white" style={{ marginLeft: '5%' }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, width: '80%', textAlign: 'center', alignSelf: 'center', marginTop: 30 }}>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print
            </Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 40 }}>
                    <View style={{ height: 1, backgroundColor: 'gray', width: '40%', marginTop: 11 }} />
                    <Text style={{ fontSize: 16, color: 'black' }}>  Or  </Text>
                    <View style={{ height: 1, backgroundColor: 'gray', width: '40%', marginTop: 11 }} />
                </View>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Login with Twitter</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default ShareLyrics;

const styles = StyleSheet.create({
    header: {
        height: 55,
        backgroundColor: '#8EE25A',
        flexDirection: 'row',
        paddingLeft: '3%',
        alignItems: 'center'
    },
    backButton: {
        height: 25,
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3CCB37',
        borderRadius: 5,
        marginLeft: '2%',
    },
    socialButton: {
        flexDirection: 'row',
        backgroundColor: '#83D136',
        height: 80,
        width: '85%',
        alignSelf: 'center',
        marginTop: 80,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
})