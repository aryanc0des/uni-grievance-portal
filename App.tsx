import React, {useState} from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { auth } from "./firebaseConfig"; // just to check Firebase loads
import AuthScreen from "./AuthScreen";
import * as Yup from 'yup'
import { Formik } from 'formik';

const AuthSchema = Yup.object().shape({
  passInput: Yup.string()
  .required()
  .min(8, 'Must included a minimum of 8 characters')
  .max(22, 'Max length is 22 characters')
  .matches(/[A-Z]/, 'Must contain atleast one uppercase letter')
  .matches(/[a-z]/, 'Must contain atleast one lowercase letter')
  .matches(/[!@#$%^&*()-_+=<>?~]/, 'Must contain atleast one special character')
  .matches(/\d/, 'Password must contain at least one number'),

  emailInput: Yup.string().required().email('Enter a valid email ID')
})

export default function App() {
  console.log("Firebase Auth Object:", auth); // 👈 check console to verify

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView contentContainerStyle={styles.main2}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <Formik
            initialValues={{ passInput: '', emailInput: '' }}
            validationSchema={AuthSchema}
            onSubmit={values => {
              console.log(values) 
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              isValid,
              resetForm,
              /* and other goodies */
            }) => (
              <AuthScreen
                values = {values}
                handleChange = {handleChange}
                handleSubmit = {handleSubmit}
                errors = {errors}
                password = {password}
                setPassword = {setPassword}
                setEmail = {setEmail}
                email = {email}
                isValid={isValid}
                resetForm = {resetForm}
                touched = {touched}
                handleBlur = {handleBlur}
              />
            )}
     </Formik>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50, 
    backgroundColor: '#ffffff',
    flex: 1,
  },
  main2: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})