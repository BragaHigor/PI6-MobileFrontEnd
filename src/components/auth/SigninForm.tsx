import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import axios from "axios";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "@/src/data/axiosConfig";

export const SigninForm = () => {
   const router = useRouter();
   const [emailField, setEmailField] = useState("");
   const [passwordField, setPasswordField] = useState("");

   const handleEnterButton = async () => {
      try {
         const response = await api.post("/signin", {
            email: emailField,
            password: passwordField,
         });

         if (response.status === 200) {
            await sessionStorage.setItem("userSlug", response.data.user.slug);
            await sessionStorage.setItem("name", response.data.user.name);
            await sessionStorage.setItem("token", response.data.token);
            router.replace("/home");
         } else {
            Alert.alert("Erro", "Email ou senha incorretos.");
         }
      } catch (error) {
         console.error("Erro ao fazer login:", error);
         Alert.alert("Erro", "Não foi possível fazer login. Tente novamente.");
      }
   };

   return (
      <>
         <Input
            placeholder="Digite seu email"
            value={emailField}
            onChangeText={setEmailField}
         />
         <Input
            placeholder="Digite sua senha"
            value={passwordField}
            onChangeText={setPasswordField}
            password
         />
         <Button label="Entrar" onPress={handleEnterButton} size={1} />
      </>
   );
};
