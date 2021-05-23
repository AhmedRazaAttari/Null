import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, ImageBackground } from 'react-native';

const windowHeight = Dimensions.get('window').height;

function MainScreen({ navigation }) {
    return (
        <ImageBackground source={require("../assets/music.png")} resizeMode='center' style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableOpacity onPress={() => navigation.navigate("Search")} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Search for lyrics</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("TopSongs")} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Top 10 Song Lyrics</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Favourites")} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>My Favourites</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

export default MainScreen;

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: 'center',
        marginTop: (windowHeight / 100) * 18
    },
    buttonText: {
        color: '#0052C8',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontStyle: 'italic'
    }
})