import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default function AuthScreen({handleChange, handleSubmit, errors, password, setPassword ,email, values, isValid, resetForm, touched, handleBlur}) {
  return (
    <View>
        <View style={{alignItems: 'center'}}>
            {/* <Image source={require('./logo.png')} style={styles.img}/> */}
        </View>
        <View style={styles.headCnt}>
            <Image source={require('./logo.png')} style={styles.img}/>
            <Text style={styles.loginHeading}>UniGrievance</Text>
        </View>
      <View style={styles.inputCnt}>
        <Text style={styles.inputTitle}>Email ID</Text>
        <TextInput
        style={styles.txtInput}
        value={values.emailInput}
        onChangeText={handleChange('emailInput')}
        onBlur={handleBlur('emailInput')}
        placeholder="   Enter your email"
        autoCapitalize="none"
        keyboardType="email-address"
        />
        {touched.emailInput && errors.emailInput && (
        <Text style={{color: 'red', fontSize: 10}}>{errors.emailInput}</Text>
        )}
      </View>
      <View style={styles.inputCnt}>
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
        style={styles.txtInput}
        value={values.passInput}
        onChangeText={handleChange('passInput')}
        onBlur={handleBlur('passInput')}
        secureTextEntry
        placeholder="   Enter your password"
        />
        {touched.passInput && errors.passInput && (
        <Text style={{color: 'red', fontSize: 10}}>{errors.passInput}</Text>
        )}
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 15, padding: 15}}>
        <View style={styles.authBtn}>
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
            <Text style={styles.btnTxt}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.authBtn}>
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
            <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    txtInput: {
        backgroundColor: '#D3D3D3',
        height: 40,
        width: 300,
        borderRadius: 8,
        marginTop: 15,
        marginBottom: 20
    },
    inputCnt: {
        flexDirection: 'column', 
        //alignItems: 'center', 
        justifyContent: 'center',
    },
    inputTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    btnTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 15,
        color: 'white'
    },
    loginHeading: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    headCnt: {
        margin: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 100,
        width: 100,
    },
    authBtn: {
        backgroundColor: '#4b0082',
        margin: 10,
        height: 50,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
})