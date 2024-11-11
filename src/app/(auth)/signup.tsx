import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Logo } from "@/src/components/ui/Logo";
import { SignupForm } from "@/src/components/auth/SignupForm";

export default function SignupScreen() {
   return (
      <View style={styles.container}>
         <Logo width={50} height={70} />
         <Text style={styles.title}>Crie a sua conta</Text>
         <View style={styles.formContainer}>
            <SignupForm />
         </View>
         <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Já tem uma conta?</Text>
            <Link href={"/(auth)/signin"}>
               <Text style={styles.signinLink}>Entrar</Text>
            </Link>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      maxWidth: "90%",
      alignSelf: "center",
      marginTop: 40,
      paddingHorizontal: 16,
   },
   title: {
      marginTop: 40,
      fontSize: 24,
      fontWeight: "bold",
   },
   formContainer: {
      marginTop: 40,
      marginBottom: 56,
      gap: 10,
   },
   footerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 4,
   },
   footerText: {
      color: "#6b7280",
   },
   signinLink: {
      color: "#1d4ed8",
      textDecorationLine: "underline",
   },
});
