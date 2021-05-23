import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, Image, AsyncStorage } from 'react-native';
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
        const myArray = AsyncStorage.getItem('@MySuperStore:key');
            console.log(myArray);
        // if (myArray !== null) {
        //     // We have data!!
        //     SetData(myArray)
        // }
    })

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
                                <Image source={require("../assets/movie.jpg")}
                                    style={styles.imageStyle}
                                    resizeMode="stretch"
                                />
                            </View>
                            <View style={{ width: '60%' }}>
                                <Text style={{ textAlign: 'center', color: '#D4D4D4', fontSize: 15, marginTop: 20 }}>Track- {element.track}</Text>
                                <Text style={{ textAlign: 'center', color: '#D4D4D4', fontSize: 15 }}>Album- {element.album}</Text>
                                <View style={{ flexDirection: 'row', marginHorizontal: '20%', justifyContent: 'space-between', marginVertical: 20 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate("Deleted")}>
                                        <Icon name="delete" color="#3CCB37" size={30} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate("ShareLyrics")}>
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
        height: 120,
        width: 120
    }
})