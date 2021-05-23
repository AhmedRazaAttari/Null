import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const windowHeight = Dimensions.get('window').height;

// const data = [
//     {
//         id: '1',
//         image: require("../assets/movie.jpg"),
//         track: 'Anyone',
//         album: "Single"
//     },
//     {
//         id: '2',
//         image: require("../assets/movie.jpg"),
//         track: 'Anyone',
//         album: "Single"
//     },
//     {
//         id: '3',
//         image: require("../assets/movie.jpg"),
//         track: 'Anyone',
//         album: "Single"
//     },
//     {
//         id: '4',
//         image: require("../assets/movie.jpg"),
//         track: 'Anyone',
//         album: "Single"
//     },
//     {
//         id: '5',
//         image: require("../assets/movie.jpg"),
//         track: 'Anyone',
//         album: "Single"
//     },
//     {
//         id: '6',
//         image: require("../assets/movie.jpg"),
//         track: 'Anyone',
//         album: "Single"
//     },
//     {
//         id: '7',
//         image: require("../assets/movie.jpg"),
//         track: 'Anyone',
//         album: "Single"
//     },
// ]

function TopSongs({ navigation }) {

    const [data, SetData] = useState([]);
    // const [album, SetAlbum] = useState([]);

    useEffect(() => {
        var items = [];
        fetch("https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=8d5a4eb3a17d84914caa6284935aec41&page=1&page_size=10&chart_name=top")
            .then(res => res.json())
            .then((response) => {
                for (var i = 0; i < response.message.body.track_list.length; i++) {
                    // console.log(response.message.body.track_list[i].track.primary_genres.music_genre_list[0].music_genre.music_genre_name)
                    items.push({
                        AlbumName: response.message.body.track_list[i].track.album_name,
                        AlbumID: response.message.body.track_list[i].track.album_id,
                        ArtistID: response.message.body.track_list[i].track.artist_id,
                        ArtistName: response.message.body.track_list[i].track.artist_name,
                        TrackName: response.message.body.track_list[i].track.track_name,
                        TrackID: response.message.body.track_list[i].track.track_id,
                        Comm_TrackID: response.message.body.track_list[i].track.commontrack_id,
                        Genere: response.message.body.track_list[i].track.primary_genres.music_genre_list[0] ? response.message.body.track_list[i].track.primary_genres.music_genre_list[0].music_genre.music_genre_name : "null",
                    })
                }
            }).then(() => {
                SetData(items)
            })
    })

    return (
        <View style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={() => navigation.navigate("Search")} activeOpacity={1} style={styles.searchButton}>
                    <Icon name="search1" color="#E8E8E8" size={16} style={{ alignSelf: 'center' }} />
                    <Text style={styles.buttonText}>Search by track, artist, album</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.iconButton}>
                    <Icon1 name="person" color="#3CCB37" size={24} />
                </TouchableOpacity>
            </View>
            <Text style={styles.headingText}>
                Top 10 Songs
                </Text>
            <ScrollView>
                {data.map(element => (
                    <View style={styles.listView}>
                        <Image source={require("../assets/music.png")}
                            style={styles.imageStyle} resizeMode="contain" />
                        <View style={styles.textView}>
                            <Icon2 name="music-note" color="#3CCB37" size={30} />
                            <Text style={styles.textStyle}>Track - {element.TrackName}</Text>
                        </View>
                        <View style={styles.textView}>
                            <Icon2 name="album" color="#3CCB37" size={30} />
                            <Text style={styles.textStyle}>Album - {element.AlbumName}</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("ViewLyrics", { Comm_TrackID: element.Comm_TrackID, TrackID: element.TrackID, ArtistName: element.ArtistName, TrackName: element.TrackName, Genere : element.Genere })} style={styles.bottomButton}>
                            <Text style={styles.bottomButtonText}>View Lyrics</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

export default TopSongs;

const styles = StyleSheet.create({
    topView: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        marginHorizontal: '3%'
    },
    searchButton: {
        flexDirection: 'row',
        paddingLeft: '2%',
        width: '80%',
        borderColor: '#E8E8E8',
        borderWidth: 2,
        borderRadius: 5,
        height: 45,
    },
    buttonText: {
        color: '#3CCB37',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: '3%'
    },
    iconButton: {
        height: 40,
        width: '12%',
        borderColor: '#3CCB37',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2
    },
    headingText: {
        fontSize: 22,
        color: '#3CCB37',
        textAlign: 'center',
        marginTop: 20,
    },
    listView: {
        backgroundColor: 'white',
        marginTop: 10,
        alignItems: 'center'
    },
    imageStyle: {
        height: 90,
        width: 90,
        margin: 10
    },
    textView: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 18,
        color: '#A9A9A9',
        marginLeft: '2%'
    },
    bottomButton: {
        height: 40,
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E6F5F1',
        marginTop: 25
    },
    bottomButtonText: {
        fontSize: 20,
        color: '#3CCB37',
        fontWeight: 'bold'
    },
})