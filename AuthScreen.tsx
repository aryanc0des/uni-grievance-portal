import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default function AuthScreen({handleChange, handleSubmit, errors, password, setPassword ,email, values, isValid, resetForm}) {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Text>Email ID:</Text>
        <TextInput
        style={{backgroundColor: 'white',height: 30,width: 100,borderRadius: 5,margin: 15}}
        value={values.emailInput}
        onChangeText={handleChange('emailInput')}
        placeholder="Enter your email"
        autoCapitalize="none"
        keyboardType="email-address"
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Text>Password:</Text>
        <TextInput
        style={{backgroundColor: 'white',height: 30,width: 100,borderRadius: 5,margin: 15}}
        value={values.passInput}
        onChangeText={handleChange('passInput')}
        secureTextEntry
        placeholder="Enter your password"
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 15, padding: 15}}>
        <TouchableOpacity
            disabled={!isValid}
            onPress={async ()=>{
                try{
                    const userCred = await createUserWithEmailAndPassword(
                    auth,
                    values.emailInput,
                    values.passInput
                    )
                    console.log("User created✅: ", userCred)
                    resetForm()
                }
                catch(error: any){
                    console.log("An error occured while creating the user: ", error)
                    resetForm()
                }
            }}
        >
            <Text>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
            disabled={!isValid}
            onPress={async ()=>{
                try{
                    const userCred = await signInWithEmailAndPassword(
                    auth,
                    values.emailInput,
                    values.passInput
                    )
                    console.log("User logged in✅: ", userCred)
                    resetForm()
                }
                catch(error: any){
                    console.log("An error occured while logging in: ", error)
                    resetForm()
                }
            }}
        >
            <Text style={{padding: 15}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})