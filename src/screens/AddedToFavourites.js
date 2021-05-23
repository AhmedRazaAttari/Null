import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, } from 'react-native';

const windowHeight = Dimensions.get('window').height;

function AddedToFavourites({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={{ color: 'white' }}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>Added to Favourites</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Favourites")} style={{ marginTop: 50, }}>
                <Text style={styles.text2}>Go to Favourites</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AddedToFavourites;

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
    text2: {
        color: '#7AC640',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 20
    }
})