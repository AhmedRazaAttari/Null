import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, ScrollView, StyleSheet, } from 'react-native';
import Input from '../components/TextInput';
import ButtonLarge from '../components/ButtonLarge';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Loginaction } from '../Redux/Action/Action'
import { connect } from 'react-redux';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Login({ navigation, Loginaction }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const check = async () => {


        if (email == '') {
            alert('Enter Name')
        }
        else if (password == '') {
            alert('Enter password')
        }
        else {
            const formdata = new FormData();
            formdata.append('email', email);
            formdata.append('password', password);
            //   console.log(formdata)
            const res = await Loginaction(formdata);
            console.log('resssssssssssssssssssssssssssssssssssssssssssssss', res)
            if (res.data != 0) {
                navigation.navigate('MainScreen')
            }
            else {
                console.log('In correct')
            }
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#EEF1F8' }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-arrow-left" size={35} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: 'white', marginLeft: '25%' }}>New account</Text>
            </View>
            <View style={styles.buttonsView}>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")} activeOpacity={1} style={styles.buttonInnerView}>
                    <Text style={{ fontSize: 16, color: '#86A7D9', fontWeight: 'bold' }}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.buttonInnerView1}>
                    <Text style={{ fontSize: 16, color: '#00C738', fontWeight: 'bold' }}>Sign In</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{ height: 50 }} />
                <Input
                    placeholder="Email*"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />

                <Input
                    placeholder="Password*"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                <TouchableOpacity style={{ alignSelf: 'center' }}>

                    <Text style={{
                        fontSize: 16, color: '#BBC1CE',
                        marginTop: 10, fontWeight: 'bold'
                    }}>
                        Forgot your password?
                </Text>

                </TouchableOpacity>

                <View style={{ height: 100 }} />

                <ButtonLarge onPress={check} title="Sign in"


                />

            </ScrollView>
        </View>
    );
}

// export default Login;

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

const mapStatetoprops = (state) => {

    const { job } = state.app;

    return {
        job,
    }
}


export default connect(mapStatetoprops, { Loginaction })(Login)