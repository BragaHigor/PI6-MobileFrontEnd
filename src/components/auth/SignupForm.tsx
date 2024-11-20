import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import api from "@/src/data/axiosConfig";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SignupForm = () => {
   const router = useRouter();
   const [nameField, setNameField] = useState("");
   const [emailField, setEmailField] = useState("");
   const [passwordField, setPasswordField] = useState("");

   const handleEnterButton = async () => {
      console.log("1º CHEGUEI AQUI");
      try {
         const response = await api.post("/signup", {
            name: nameField,
            email: emailField,
            password: passwordField,
         });

         if (response.status === 201) {
            console.log("2º CHEGUEI AQUI");
            // Armazenar o token e o slug do usuário
            await sessionStorage.setItem("userSlug", response.data.user.slug);
            await sessionStorage.setItem("name", response.data.user.name);
            await sessionStorage.setItem("token", response.data.token);

            // Navegar para a página inicial
            console.log("3° CHEGUEI AQUI");
            router.replace("/home");
         } else {
            Alert.alert("Erro", "Não foi possível criar a conta.");
         }
      } catch (error: any) {
         console.error("Erro ao criar conta:", error);
         if (
            error.response &&
            error.response.data &&
            error.response.data.error
         ) {
            Alert.alert("Erro", error.response.data.error);
         } else {
            Alert.alert(
               "Erro",
               "Não foi possível criar a conta. Tente novamente."
            );
         }
      }
   };

   return (
      <>
         <Input
            placeholder="Digite seu nome"
            value={nameField}
            onChangeText={setNameField}
         />
         <Input
            placeholder="Digite seu email"
            value={emailField}
            onChangeText={setEmailField}
         />
         <Input
            placeholder="Digite sua senha"
            value={passwordField}
            onChangeText={setPasswordField}
            secureTextEntry
            password
         />
         <Button label="Criar conta" onPress={handleEnterButton} size={1} />
      </>
   );
};
