import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export const SigninForm = () => {
   const navigation = useRouter();
   const [emailField, setEmailField] = useState("");
   const [passwordField, setPasswordField] = useState("");

   const handleEnterButton = () => {
      navigation.replace("/home");
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
