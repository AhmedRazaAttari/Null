import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, Image, ScrollView, AsyncStorage, ToastAndroid, Share } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Clipboard from '@react-native-clipboard/clipboard';

const windowHeight = Dimensions.get('window').height;

function ViewLyrics({ route, navigation }) {

    const { Comm_TrackID, TrackID, ArtistName, TrackName, Genere } = route.params;
    const [data, SetData] = useState("");

    const [copiedText, setCopiedText] = useState('');

    const copyToClipboard = () => {
        Clipboard.setString(data);
        ToastAndroid.showWithGravity(
            "Your text is Copied",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    };


    useEffect(() => {
        var items = [];
        fetch("https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=8d5a4eb3a17d84914caa6284935aec41&track_id=" + TrackID)
            .then(res2 => res2.json())
            .then((response2) => {
                console.log(response2.message.body)
                if (response2.message.body.lyrics) {
                    SetData(response2.message.body.lyrics.lyrics_body)
                }
            })

    })

    async function AddToFavourite() {
        // if (AsyncStorage.setItem('name')) {
        //     AsyncStorage.getItem('name', (error, result) => {
        //         var fetchedArr = [JSON.parse(result)];
        //         fetchedArr.push({
        //             lyrics: data,
        //             TrackID: TrackID,
        //             ArtistName: ArtistName,
        //             TrackName: TrackName,
        //             Genere: Genere
        //         })
        //         console.log(fetchedArr.length)
        //     });
        // }
        // else {
        var arr = [];
        arr.push({
            lyrics: data,
            TrackID: TrackID,
            ArtistName: ArtistName,
            TrackName: TrackName,
            Genere: Genere
        })
        AsyncStorage.setItem('name', JSON.stringify(arr));
        // }

    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={{ color: 'white' }}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => AddToFavourite()} style={{ marginLeft: 'auto', marginRight: '10%' }}>
                    <Icon name="heart" size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => copyToClipboard()}>
                    <Icon1 name="content-copy" size={30} color="#3CCB37" />
                </TouchableOpacity>
            </View>
            <Text style={styles.lyricsTitle}>{TrackName}</Text>
            <ScrollView>
                <View style={{ height: 5 }} />

                {/* {data.map(element => ( */}
                <Text style={styles.lyricsDescription}>{data}</Text>
                {/* ))} */}
                <Text style={styles.bottomText}>
                    ARTIST- {ArtistName}
                </Text>
                {/* <Text style={styles.bottomText}>
                    RELEASED- 2010
                </Text> */}
                <Text style={styles.bottomText}>
                    GENERE- {Genere}
                </Text>
            </ScrollView>
        </View>
    );
}

export default ViewLyrics;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginHorizontal: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    backButton: {
        height: 35,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3CCB37',
        borderRadius: 5
    },
    lyricsTitle: {
        fontSize: 20,
        marginLeft: '2%',
        fontWeight: 'bold',
        marginTop: 5
    },
    lyricsDescription: {
        fontSize: 16,
        marginLeft: '2%'
    },
    bottomText: {
        color: '#3CCB37',
        textAlign: 'center',
        marginTop: 30,
        fontSize: 18
    }
})