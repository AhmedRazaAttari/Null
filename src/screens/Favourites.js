import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, Image, AsyncStorage, Share } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/FontAwesome'

const windowHeight = Dimensions.get('window').height;

// const data = [
//     {
//         id: '1',
//         image: require("../assets/movie.jpg"),
//         track: 'Baby',
//         album: "MyWorld"
//     },
//     {
//         id: '2',
//         image: require("../assets/movie.jpg"),
//         track: 'GoodDays',
//         album: "Good Days"
//     },
// ]

function Favourites({ navigation }) {
    const [data, SetData] = useState([]);

    React.useEffect(() => {
        AsyncStorage.getItem('name', (error, result) => {
            if (result) {
                var fetchedArr = JSON.parse(result);
                // console.log(fetchedArr.length)
                SetData(fetchedArr)
            }
        }).then(() => {
            // console.log(data)
        })
    })


    const onShare = async () => {
        console.log(data[0].TrackName)
        try {
            const result = await Share.share({
                message:
                    'Here is my Favourite Song..\n Track Name =' + data[0].TrackName + '\n Artist Name =' + data[0].ArtistName,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={{ color: 'white' }}>Back</Text>
                </TouchableOpacity>
                <Icon name="music-box-multiple" color="#3CCB37" size={30} style={{ marginLeft: '3%' }} />
                <Text style={styles.heading}>My Favourites</Text>
            </View>
            <ScrollView>
                {data.map(element => (
                    <View>
                        <View style={{ height: 1, backgroundColor: '#D4D4D4', marginVertical: 20 }} />
                        <View style={styles.listView}>
                            <View style={{ width: '40%' }}>
                                <Image source={require("../assets/music.png")}
                                    style={styles.imageStyle}
                                    resizeMode="stretch"
                                />
                            </View>
                            <View style={{ width: '60%' }}>
                                <Text style={{ textAlign: 'center', color: '#D4D4D4', fontSize: 15, marginTop: 20 }}>Track- {element.TrackName}</Text>
                                <Text style={{ textAlign: 'center', color: '#D4D4D4', fontSize: 15 }}>Artist- {element.ArtistName}</Text>
                                <View style={{ flexDirection: 'row', marginHorizontal: '20%', justifyContent: 'space-between', marginVertical: 20 }}>
                                    <TouchableOpacity onPress={() => AsyncStorage.clear()}>
                                        <Icon name="delete" color="#3CCB37" size={30} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => onShare()}>
                                        <Icon1 name="share-square-o" color="#3CCB37" size={30} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

export default Favourites;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '2%',
        marginTop: 20
    },
    backButton: {
        height: 25,
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3CCB37',
        borderRadius: 5,
    },
    heading: {
        fontSize: 18,
        color: '#3CCB37',
        fontWeight: 'bold',
        marginLeft: '3%',
        marginTop: -7
    },
    listView: {
        flexDirection: 'row',
        paddingHorizontal: '2%'
    },
    imageStyle: {
        height: 100,
        width: 100
    }
})