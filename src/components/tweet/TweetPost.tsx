import React, { useState } from "react";
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
import { user } from "@/src/data/user";

export const TweetPost = () => {
   const [tweetText, setTweetText] = useState("");
   const [imageUri, setImageUri] = useState<string | null>(null);

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

   const handlePostClick = () => {
      console.log("Tweet posted:", tweetText);
      setTweetText("");
      setImageUri(null);
   };

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
               value={tweetText}
               onChangeText={setTweetText}
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
                  <Button label="Postar" size={2} onPress={handlePostClick} />
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
