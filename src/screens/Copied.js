import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, } from 'react-native';

const windowHeight = Dimensions.get('window').height;

function Copied({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={{ color: 'white' }}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>Copied</Text>
        </View>
    );
}

export default Copied;

const styles = StyleSheet.create({
    backButton: {
        height: 25,
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3CCB37',
        borderRadius: 5,
        marginLeft: '2%',
        marginTop: 20
    },
    text1: {
        fontSize: 20,
        color: '#11CD53',
        textAlign: 'center',
        marginTop: (windowHeight / 100) * 20,
        fontWeight: 'bold'
    },
})