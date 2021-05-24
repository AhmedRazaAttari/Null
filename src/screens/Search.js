import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, FlatList, StyleSheet, ScrollView, Image } from 'react-native';
import Input from '../components/TextInput';
import ButtonLarge from '../components/ButtonLarge';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchBar } from 'react-native-elements';
// import Icon2 from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// const dataArray = [
//   {
//     id: '1',
//     title: 'Frozen D'
//   },
//   {
//     id: '2',
//     title: 'Xmen de'
//   },
//   {
//     id: '3',
//     title: 'Amazing Content'
//   },
//   {
//     id: '4',
//     title: 'Demo'
//   },
// ]

function Search({ navigation }) {
  const [search, setSearch] = useState("")
  const [searchArray, setSearchArray] = useState([])
  const [data, SetData] = useState([])

  const onChange = (search) => {
    setSearch(search)
    console.log(search)

    var items = [];
    fetch("https://api.musixmatch.com/ws/1.1/track.search?apikey=8d5a4eb3a17d84914caa6284935aec41&q_artist=" + search + "&q_track=" + search + "&f_has_lyrics=true")
      .then(res => res.json())
      .then((response) => {
        for (var i = 0; i < response.message.body.track_list.length; i++) {
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
    // let data = dataArray.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map(({ title }) => ({ title }));
    // setSearchArray(data)
    // console.log("DATA", searchArray)
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="keyboard-arrow-left" size={35} color="white" />
        </TouchableOpacity>
        <SearchBar
          containerStyle={{ width: '70%', backgroundColor: 'transparent' }}
          inputContainerStyle={{ height: 45, width: '100%', backgroundColor: '#ACA6AD' }}
          placeholderTextColor="white"
          inputStyle={{ color: 'white', paddingLeft: -15 }}
          leftIconContainerStyle={{ marginLeft: 3, marginRight: -10 }}
          rightIconContainerStyle={{ marginRight: 0 }}
          placeholder="Type Here..."
          onChangeText={(text) => onChange(text)}
          value={search}
          returnKeyType="search"
          autoFocus={true}
        />
        <TouchableOpacity>
          <Text style={{ fontSize: 16, color: 'white' }}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {data.map(element => (
          <View style={styles.listView}>
            <Image source={require("../assets/music.png")}
              style={styles.imageStyle} resizeMode="contain" />
            <View style={styles.textView}>
              <Icon name="music-note" color="#3CCB37" size={30} />
              <Text style={styles.textStyle}>Track - {element.TrackName}</Text>
            </View>
            <View style={styles.textView}>
              <Icon name="album" color="#3CCB37" size={30} />
              <Text style={styles.textStyle}>Artist Name - {element.ArtistName}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("ViewLyrics", { Comm_TrackID: element.Comm_TrackID, TrackID: element.TrackID, ArtistName: element.ArtistName, TrackName: element.TrackName, Genere: element.Genere })} style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>View Lyrics</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {/* {data != "" ?
        <FlatList
          data={data}
          renderItem={({ item, index }) =>

            <View style={styles.listView}>
              <TouchableOpacity onPress={() => navigation.navigate("SearchResults")} style={styles.itemStyle}>
                <Text style={styles.textStyle}>
                  {item.ArtistName}
                </Text>
                <Text style={styles.textStyle}>
                  {item.TrackName}
                </Text>
              </TouchableOpacity>

            </View>
          }

          keyExtractor={item => item.id}

        />
        : null
      } */}
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#3CCB37',
    flexDirection: 'row',
    paddingLeft: '3%',
    alignItems: 'center'
  },
  listView: {
    // maxHeight: 250,
    padding: 20,
    backgroundColor: 'white',
    alignItems: "center",
  },
  itemStyle: {
    height: 45,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  textStyle: {
    marginLeft: '5%'
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
  bottomButton: {
    // height: 70,
    padding : 10,
    // width: 100,
    // alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#E6F5F1',
    marginTop: 25
  },
  bottomButtonText: {
    fontSize: 20,
    color: '#3CCB37',
    fontWeight: 'bold'
  }
})