import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Logo } from "../../components/ui/Logo";
import { SigninForm } from "../../components/auth/SigninForm";
import { Link } from "expo-router";

export default function SigninScreen() {
   return (
      <View style={styles.container}>
         <Logo width={50} height={70} />
         <Text style={styles.title}>Entre na sua conta</Text>
         <View style={styles.formContainer}>
            <SigninForm />
         </View>
         <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Ainda não tem uma conta?</Text>
            <Link href={"/(auth)/signup"}>
               <Text style={styles.signupLink}>Cadastre-se</Text>
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
   signupLink: {
      color: "#1d4ed8",
      textDecorationLine: "underline",
   },
});
