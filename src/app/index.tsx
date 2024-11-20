import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Logo } from "../components/ui/Logo";
import { Link, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootScreen() {
   const [loading, setLoading] = useState(true);
   const router = useRouter();

   useEffect(() => {
      const checkAuth = async () => {
         try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
               // Navegar para a tela inicial
               router.replace("/home");
            } else {
               // Usuário não autenticado, parar o carregamento
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
      // Enquanto está carregando, mostrar o indicador de atividade
      return (
         <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
         </View>
      );
   }

   // Se não estiver carregando e o usuário não estiver autenticado, renderizar o logo com o link para o login
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
