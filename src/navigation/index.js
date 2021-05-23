import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import MainScreen from '../screens/MainScreen';
import TopSongs from '../screens/TopSongs';
import Search from '../screens/Search';
import SearchResults from '../screens/SearchResults'
import ViewLyrics from '../screens/ViewLyrics'
import AddedToFavourites from '../screens/AddedToFavourites';
import Copied from '../screens/Copied'
import Favourites from '../screens/Favourites'
import Deleted from '../screens/Deleted';
import ShareLyrics from '../screens/ShareLyrics'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='MainScreen'
                screenOptions={{
                    headerShown: false
                }}>

                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="TopSongs" component={TopSongs} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="SearchResults" component={SearchResults} />
                <Stack.Screen name="ViewLyrics" component={ViewLyrics} />
                <Stack.Screen name="AddedToFavourites" component={AddedToFavourites} />
                <Stack.Screen name="Copied" component={Copied} />
                <Stack.Screen name="Favourites" component={Favourites} />
                <Stack.Screen name="Deleted" component={Deleted} />
                <Stack.Screen name="ShareLyrics" component={ShareLyrics} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}