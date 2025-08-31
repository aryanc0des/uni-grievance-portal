import React from "react";
import { View, Text } from "react-native";
import { auth } from "./firebaseConfig"; // just to check Firebase loads

export default function App() {
  console.log("Firebase Auth Object:", auth); // 👈 check console to verify

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>App is running ✅</Text>
      <Text>{JSON.stringify(auth, null, 2)}</Text>
    </View>
  );
}