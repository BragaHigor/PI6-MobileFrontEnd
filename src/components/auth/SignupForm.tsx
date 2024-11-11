import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export const SignupForm = () => {
   const navigation = useRouter();
   const [nameField, setNameField] = useState("");
   const [emailField, setEmailField] = useState("");
   const [passwordField, setPasswordField] = useState("");

   const handleEnterButton = () => {
      navigation.replace("/home");
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
