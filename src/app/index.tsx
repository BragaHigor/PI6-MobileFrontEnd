import React from "react";
import { View, StyleSheet } from "react-native";
import { Logo } from "../components/ui/Logo";
import { Link } from "expo-router";

export default function RootScreen() {
   return (
      <View style={styles.container}>
         <Link href={"/(auth)/signin"}>
            <Logo width={300} height={300} />
         </Link>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   },
});
