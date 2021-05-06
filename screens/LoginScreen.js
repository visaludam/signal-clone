import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView} from 'react-native'
import  {Image, Input, Button} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import {auth} from '../firebase';

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser)
            if(authUser){
                navigation.replace('Home')
            }
        });
        return unsubscribe
    }, [])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
        .catch(error => alert(error))
    }

    return (  
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <StatusBar style='light'/>
            <Image
                source={{
                    uri:
                        "https:blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
                }}
                style={{width:200, height: 200}}
            />
            <View style={styles.inputContainer}>
                <Input 
                    placeholder='Email'
                    autoFocus
                    type='Email'
                    onChangeText={text => setEmail(text)}
                />
                <Input
                    placeholder='Password' 
                    secureTextEntry type='Password'
                    onChangeText={text => setPassword(text)}
                    onSubmitEditing={signIn}
                />
                <Button 
                    title='Login'
                    containerStyle={styles.button}
                    onPress={signIn}
                />
                <Button
                    title='Register'
                    type='outline'
                    containerStyle={styles.button}
                    onPress={() => navigation.navigate('Register')}
                />
                <View style={{height: 100}}/>
            </View>
        </KeyboardAvoidingView>
    );
}
 
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white'

    },
    inputContainer:{
        width: 300,
    },
    button:{
        alignSelf: 'center',
        width: 200,
        marginTop: 10
    }
})