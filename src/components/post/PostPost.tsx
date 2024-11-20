import React, { useEffect, useState } from "react";
import {
   View,
   TextInput,
   Image,
   TouchableOpacity,
   StyleSheet,
   KeyboardAvoidingView,
   Platform,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/Button";
import * as ImagePicker from "expo-image-picker";
import { User } from "@/src/types/user";
import { useRouter } from "expo-router";
import api from "@/src/data/axiosConfig";

export const PostPost = () => {
   const userData: User = {
      slug: "",
      name: "",
      avatar: "",
      cover: "",
      bio: "",
      link: "",
   };
   const router = useRouter();
   const [user, setUserData] = useState(userData);

   useEffect(() => {
      const getUserData = async () => {
         try {
            const response = await api.get(
               `/user/${sessionStorage.getItem("userSlug")}`
            );
            const data = response.data.user;
            if (data) {
               setUserData(data);
            }
         } catch (error) {
            console.error("Failed to fetch user data", error);
         }
      };

      getUserData();
   }, []);
   const handleImageUpload = async () => {
      const { status } =
         await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
         alert("Desculpe, precisamos da permissão para acessar as imagens!");
         return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         allowsEditing: true,
      });

      if (!result.canceled) {
         setImageUri(result.assets[0].uri);
      }
   };

   const [postBody, setPostBody] = useState("");
   const handlePostClick = async () => {
      try {
         const response = await api.post(`/post`, {
            body: postBody,
         });
         if (response.status === 200) {
            console.log("Post Criado com sucesso");
            setPostBody("");
            router.replace("/home");
         } else {
            console.error("Erro ao criar post", response.data.error.name);
            let errorMessage = "Erro ao criar post";
            console.log(errorMessage);
         }
      } catch (error) {
         console.error("Erro ao criar post", error);
         console.log("Erro ao criar post");
      }
   };
   const [postText, setPostText] = useState("");
   const [imageUri, setImageUri] = useState<string | null>(null);

   const isFormValid = postBody.trim() !== "";

   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : undefined}
         style={styles.container}
      >
         <Image source={{ uri: user.avatar }} style={styles.avatar} />
         <View style={styles.content}>
            <TextInput
               style={styles.input}
               placeholder="O que você está pensando?"
               placeholderTextColor="#e1e1e1"
               multiline
               value={postBody}
               onChangeText={setPostBody}
            />
            {imageUri && (
               <Image source={{ uri: imageUri }} style={styles.uploadedImage} />
            )}
            <View style={styles.actions}>
               <TouchableOpacity onPress={handleImageUpload}>
                  <FontAwesomeIcon
                     icon={faImage}
                     size={24}
                     style={styles.icon}
                  />
               </TouchableOpacity>
               <View style={styles.buttonContainer}>
                  <Button
                     label="Postar"
                     size={2}
                     onPress={handlePostClick}
                     disabled={!isFormValid}
                  />
               </View>
            </View>
         </View>
      </KeyboardAvoidingView>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      paddingHorizontal: 32,
      paddingVertical: 24,
      borderBottomWidth: 2,
      borderColor: "#000000",
      backgroundColor: "#1f2937",
   },
   avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
   },
   content: {
      flex: 1,
      marginLeft: 24,
   },
   input: {
      minHeight: 56,
      fontSize: 18,
      color: "#ffffff",
      textAlignVertical: "top",
   },
   uploadedImage: {
      width: "100%",
      height: 200,
      borderRadius: 16,
      marginTop: 16,
   },
   actions: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 8,
   },
   icon: {
      color: "#ffffff",
   },
   buttonContainer: {
      width: 112,
   },
});
