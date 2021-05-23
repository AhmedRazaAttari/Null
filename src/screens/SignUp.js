import React, { useState, useEffect } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, Image, Keyboard } from 'react-native';
import Input from '../components/TextInput';
import ButtonLarge from '../components/ButtonLarge';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import { Signupaction } from '../Redux/Action/Action'

import { connect } from 'react-redux';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const options = {}

function SignUp({ navigation, Signupaction }) {
    const [fullName, setFullName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [image, setImage] = useState(null)
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const check = async () => {


        if (email == '') {
            alert('Enter Email')
        }
        else if (password == '') {
            alert('Enter password')
        }
        else if (userName == '') {
            alert('Enter Username')
        }
        else if (fullName == '') {
            alert('Enter FullName')
        }
        // else if(image=='')
        // {
        //     alert('Enter Image')
        // }

        else {
            const formdata = new FormData();
            formdata.append('fullName', fullName);
            formdata.append('password', password);
            formdata.append('email', email);
            formdata.append('userName', userName);
            formdata.append('file', { uri: image, name: 'IMG_' + new Date().getTime(), type: 'image/jpeg' });
            console.log(formdata)
            const res = await Signupaction(formdata);
            console.log('halooooooooooooooooooooooooooooooooooooooooooooooooooo', res)

            navigation.navigate('Login')
        }
        //     if(res.data!=0)
        //     {
        //         navigation.navigate('Login')
        //     }
        //     else{
        // console.log('not Correct')
        //     }

        //     }

    }

    const selectImage = () => {
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = response.uri

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                setImage(source)
            }
        })
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#EEF1F8' }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={30} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: 'white', marginLeft: '5%', fontWeight: 'bold' }}>Sign Up</Text>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={selectImage}>
                    {image == null ?
                        <Image source={require("../assets/profileImage.png")}
                            style={{ height: 100, width: 100, borderRadius: 100 / 2, alignSelf: 'center', marginVertical: 25 }} resizeMode="stretch" />
                        :
                        <Image source={{ uri: image }}
                            style={{ height: 100, width: 100, borderRadius: 100 / 2, alignSelf: 'center', marginVertical: 25 }} />
                    }
                </TouchableOpacity>

                <Input
                    placeholder="Fullname"
                    onChangeText={text => setFullName(text)}
                    value={fullName}
                />

                <Input
                    placeholder="Username"
                    onChangeText={text => setUserName(text)}
                    value={userName}
                />

                <Input
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />

                <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                <Input
                    placeholder="Confirm Password"
                    onChangeText={text => setConfirmPassword(text)}
                    value={confirmPassword}
                />

                <ButtonLarge onPress={check} title="Sign Up" />

            </ScrollView>
            {!isKeyboardVisible ?
                <View style={{ bottom: 0, alignSelf: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 20 }}>

                    <Text style={{
                        fontSize: 14, color: '#424242', fontFamily: 'OpenSans-Regular',
                        marginTop: 10,
                    }}>
                        Already have an account? </Text>

                    <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ alignSelf: 'flex-end', marginRight: '5%' }}>

                        <Text style={{
                            fontSize: 14, color: '#424242', fontWeight: 'bold',
                            marginTop: 10,
                        }}>
                            Sign In
                        </Text>

                    </TouchableOpacity>

                </View>
                : null
            }
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        height: 55,
        backgroundColor: '#00C738',
        flexDirection: 'row',
        paddingLeft: '3%',
        alignItems: 'center'
    },
    buttonsView: {
        flexDirection: 'row'
    },
    buttonInnerView: {
        backgroundColor: 'white',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%'
    },
    buttonInnerView1: {
        backgroundColor: 'white',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        borderBottomWidth: 2,
        borderBottomColor: '#8F97AC'
    }
})
const mapStatgetoprops = (state) => {

    const { jobs } = state.app;

    return {
        jobs,
    }
}


export default connect(mapStatgetoprops, { Signupaction })(SignUp)
