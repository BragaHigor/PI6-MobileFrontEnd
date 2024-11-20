import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Logo } from "../components/ui/Logo";
import { Link, useRouter } from "expo-router";

export default function RootScreen() {
   const [loading, setLoading] = useState(true);
   const router = useRouter();

   useEffect(() => {
      const checkAuth = async () => {
         try {
            const token = await sessionStorage.getItem("token");
            if (token) {
               router.replace("/home");
            } else {
               setLoading(false);
            }
         } catch (error) {
            console.error("Erro ao verificar a autenticação:", error);
            setLoading(false);
         }
      };

      checkAuth();
   }, []);

   if (loading) {
      return (
         <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
         </View>
      );
   }

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
