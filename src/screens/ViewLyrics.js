import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, Image, ScrollView, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

const windowHeight = Dimensions.get('window').height;

// const data = [
//     {
//         id: '1',
//         album: "Ooh, ooh"
//     },
//     {
//         id: '2',
//         album: "Across the ocean, across the sea"
//     },
//     {
//         id: '3',
//         album: "Startin' to forget the way you look at me now"
//     },
//     {
//         id: '4',
//         album: "Over the mountains, across the sky"
//     },
//     {
//         id: '5',
//         album: "Need to see your face"
//     },
//     {
//         id: '6',
//         album: "I need to look in your eyes"
//     },
//     {
//         id: '7',
//         album: "Through the storm and through the clouds"
//     },
//     {
//         id: '8',
//         album: "Bumps in the road and upside down now"
//     },
//     {
//         id: '9',
//         album: "I know it's hard babe, to sleep at night"
//     },
//     {
//         id: '10',
//         album: "Don't you worry"
//     },
//     {
//         id: '11',
//         album: "Cause everything's gonna be alright, ai-ai-ai-a'ight"
//     },
//     {
//         id: '12',
//         album: "Be alright, ai-ai-ai-a'ight"
//     },
//     {
//         id: '13',
//         album: "Through the sorrow"
//     },
//     {
//         id: '14',
//         album: "And the fights"
//     },
// ]

function ViewLyrics({ route, navigation }) {

    const { Comm_TrackID, TrackID, ArtistName, TrackName, Genere } = route.params;
    const [data, SetData] = useState("");
    // console.log("Comm_TrackID ==> ", Comm_TrackID)

    useEffect(() => {
        var items = [];
        fetch("https://api.musixmatch.com/ws/1.1/track.get?apikey=8d5a4eb3a17d84914caa6284935aec41&commontrack_id=" + Comm_TrackID)
            .then(res => res.json())
            .then((response) => {
                console.log(response.message.body)
                fetch("https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=8d5a4eb3a17d84914caa6284935aec41&track_id=" + response.message.body.track.track_id)
                    .then(res2 => res2.json())
                    .then((response2) => {
                        console.log(response2.message.body)
                        if (response2.message.body.lyrics) {
                            SetData(response2.message.body.lyrics.lyrics_body)
                        }
                    })

                // if (response.message.body.lyrics) {
                //     SetData(response.message.body.lyrics.lyrics_body)
                // }
            })
    })

    async function AddToFavourite() {
        // if (AsyncStorage.getItem('@MySuperStore:key')) {
        //     var MyFav = [];
        //     const myArray = await AsyncStorage.getItem('@MySuperStore:key');
        //     if (myArray !== null) {
        //         // We have data!!
        //         console.log(JSON.parse(myArray));
        //         MyFav.push(AsyncStorage.getItem('@MySuperStore:key'))
        //         await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(MyFav))
        //     }
        // }

        // else {
        // var arr = [];
        // arr.push({
        //     lyrics: data,
        //     TrackID: TrackID,
        //     ArtistName: ArtistName,
        //     TrackName: TrackName
        // })
        await AsyncStorage.setItem('@MySuperStore:key', TrackID);
        // }

        // try {
        //     await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(myArray));
        // } catch (error) {
        //     // Error saving data
        // }

        // try {
        //     const myArray = await AsyncStorage.getItem('@MySuperStore:key');
        //     if (myArray !== null) {
        //         // We have data!!
        //         console.log(JSON.parse(myArray));
        //     }
        // } catch (error) {
        //     // Error retrieving data
        // }
        // const myArray = await AsyncStorage.getItem('@MySuperStore:key');
        // if (myArray !== null) {
        //     // We have data!!
        //     console.log(JSON.parse(myArray));
        // }
        // await AsyncStorage.setItem(
        //     '@MySuperStore:key',
        //     'I like to save it.'
        // );
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
                <TouchableOpacity onPress={() => navigation.navigate("Copied")}>
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