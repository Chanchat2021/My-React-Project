import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import {Image1} from '../Assets/index';

function RegForm({navigation}:any) {
  const login = ():void => {
    navigation.navigate('Login');
  };

  const signup = ():void => {
    navigation.navigate('Login');
  };

  return (
    <>
      <View style={styles.regform}>
        <ImageBackground
          style={{
            opacity: 0.5,
            height: 600,
            width: 420,
            flex: 1,
            marginTop: 150,
          }}
          source={Image1}></ImageBackground>
        <View style={{marginBottom: 90}}>
          <Text style={styles.header}>Welcome!</Text>
          <Text style={styles.headertwo}>Signup to get started</Text>

          <TextInput style={styles.textinput} placeholder="Name" />

          <TextInput style={styles.textinput} placeholder="Email Address" />

          <TextInput
            style={styles.textinput}
            placeholder="Password"
            secureTextEntry={true}
          />

          <TextInput
            style={styles.textinput}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button} onPress={signup}>
            <Text style={styles.btnstyle}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.text} onPress={login}>
              Already a member? Log In
            </Text>
            <Text style={styles.testing} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
export default RegForm;

const styles = StyleSheet.create({
  regform: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    fontSize: 30,
    color: 'black',
    paddingBottom: 5,
  },

  headertwo: {
    fontSize: 30,
    color: 'black',
    paddingBottom: 30,
  },
  textinput: {
    color: 'black',
    backgroundColor: '#9CD29D',
    height: 40,
    width: 300,
    marginBottom: 20,
    borderBottomColor: '#AFAFAF',
    borderBottomWidth: 2,
    padding: 8,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
    marginTop: 20,
    width: 125,
    height: 40,
    marginLeft: 85,
  },

  btnstyle: {
    color: '#fff',
    fontSize: 18,

    width: 70,
    height: 30,
    marginLeft: 12,
  },
  text: {
    fontSize: 10,
    marginTop: 10,
   marginLeft: 90,
    color: 'black',
  },
  testing: {
    width: 120,
    height: 0.1,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 90,
  },
});
