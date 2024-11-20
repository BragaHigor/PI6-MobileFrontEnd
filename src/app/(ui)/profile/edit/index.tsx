import React, { useEffect, useState } from "react";
import {
   View,
   Text,
   Image,
   StyleSheet,
   TouchableOpacity,
   ScrollView,
   ImageBackground,
   Platform,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { GeneralHeader } from "@/src/components/ui/GeneralHeader";
import { Input } from "@/src/components/ui/Input";
import { Textarea } from "@/src/components/ui/Textarea";
import { Button } from "@/src/components/ui/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "@/src/data/axiosConfig";
import { User } from "@/src/types/user";
import { useRouter, useLocalSearchParams } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EditProfileScreen() {
   const userData: User = {
      slug: "",
      name: "",
      avatar: "",
      cover: "",
      bio: "",
      link: "",
   };

   const [user, setUserData] = useState(userData);
   const [avatarUri, setAvatarUri] = useState(null);
   const [coverUri, setCoverUri] = useState(null);
   const [name, setNameField] = useState("");
   const [bio, setBio] = useState("");
   const [link, setLink] = useState("");

   const router = useRouter();

   useEffect(() => {
      const getUserData = async () => {
         try {
            const userSlug = await AsyncStorage.getItem("userSlug");
            if (userSlug) {
               const response = await api.get(`/user/${userSlug}`);
               const data = response.data.user;
               if (data) {
                  setUserData(data);
                  setNameField(data.name);
                  setBio(data.bio || "");
                  setLink(data.link || "");
                  setAvatarUri(data.avatar);
                  setCoverUri(data.cover);
               }
            } else {
               console.error("No userSlug found in AsyncStorage");
            }
         } catch (error) {
            console.error("Failed to fetch user data", error);
         }
      };
      getUserData();
   }, []);

   const uploadImage = async (imageUri: any, type: any) => {
      let uri = imageUri;
      if (Platform.OS === "android") {
         // No Android, pode ser necessário adicionar 'file://' ao início do uri
         if (!uri.startsWith("file://")) {
            uri = "file://" + uri;
         }
      } else {
         // No iOS, pode ser necessário remover 'file://' do início do uri
         uri = uri.replace("file://", "");
      }

      const filename = uri.split("/").pop();
      const match = /\.(\w+)$/.exec(filename || "");
      const fileType = match ? `image/${match[1].toLowerCase()}` : `image`;

      const formData = new FormData();
      formData.append("file", {
         uri,
         name: filename,
         type: fileType,
      });

      try {
         const response = await api.put(`/user/${type}`, formData);
         console.log("IMG", response);
         if (response.status === 200) {
            console.log(`${type} atualizado com sucesso!`);
            if (type === "avatar") {
               setAvatarUri(response.data.avatar);
            } else {
               setCoverUri(response.data.cover);
            }
         } else {
            console.error(`Erro ao atualizar ${type}:`, response.data.error);
         }
      } catch (error) {
         console.error(`Falha ao fazer upload de ${type}`, error);
      }
   };
   const handlePress = async () => {
      const permissionResult =
         await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
         console.log("Permissão negada!");
         return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         allowsEditing: true,
         quality: 1,
      });

      if (!result.canceled) {
         const imageUri = result.assets[0].uri;
         await uploadImage(imageUri, "avatar");
      }
   };

   const handleCover = async () => {
      const permissionResult =
         await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
         console.log("Permissão negada!");
         return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         allowsEditing: true,
         quality: 1,
      });

      if (!result.canceled) {
         const imageUri = result.assets[0].uri;
         await uploadImage(imageUri, "cover");
      }
   };

   const handleSave = async () => {
      try {
         const response = await api.put(`/user`, {
            name: name,
            bio: bio,
            link: link,
         });
         console.log("RESPONSE", response.data);
         if (response.status === 200) {
            console.log("Cadastro atualizado com sucesso!");
            setNameField("");
            setBio("");
            setLink("");
            router.replace("/profile");
            console.log("RESPONSE", response);
         } else {
            console.error("Erro ao atualizar conta:", response.data.error);
            // Handle error messages appropriately
         }
      } catch (error) {
         console.error("Failed to update profile", error);
      }
   };

   const isFormValid =
      name.trim() !== "" || bio.trim() !== "" || link.trim() !== "";

   return (
      <SafeAreaView style={styles.containerSafeArea}>
         <ScrollView style={styles.container}>
            <GeneralHeader>
               <Text style={styles.headerText}>Editar perfil</Text>
            </GeneralHeader>
            <View style={styles.coverSection}>
               <View>
                  {coverUri ? (
                     <ImageBackground
                        source={{ uri: coverUri }}
                        style={styles.coverImage}
                        resizeMode="cover"
                     />
                  ) : (
                     <View
                        style={[styles.coverImage, { backgroundColor: "#ccc" }]}
                     />
                  )}
               </View>
               <View style={styles.iconSection}>
                  <TouchableOpacity
                     style={styles.iconButton}
                     onPress={handleCover}
                  >
                     <FontAwesomeIcon icon={faCamera} style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconButton}>
                     <FontAwesomeIcon icon={faXmark} style={styles.icon} />
                  </TouchableOpacity>
               </View>
               <View style={styles.avatarContainer}>
                  {avatarUri ? (
                     <Image source={{ uri: avatarUri }} style={styles.avatar} />
                  ) : (
                     <View
                        style={[styles.avatar, { backgroundColor: "#ccc" }]}
                     />
                  )}
                  <TouchableOpacity
                     style={styles.iconButtonOverlay}
                     onPress={handlePress}
                  >
                     <FontAwesomeIcon icon={faCamera} style={styles.icon} />
                  </TouchableOpacity>
               </View>
            </View>
            <View style={styles.formSection}>
               <View style={styles.inputGroup}>
                  <Text style={styles.label}>Nome</Text>
                  <Input
                     placeholder="Digite seu nome"
                     value={name}
                     onChangeText={setNameField}
                  />
               </View>
               <View style={styles.inputGroup}>
                  <Text style={styles.label}>Bio</Text>
                  <Textarea
                     placeholder="Descreva você"
                     value={bio}
                     rows={4}
                     onChangeText={setBio}
                  />
               </View>
               <View style={styles.inputGroup}>
                  <Text style={styles.label}>Link</Text>
                  <Input
                     placeholder="Adicione um link"
                     value={link}
                     onChangeText={setLink}
                  />
               </View>
               <View style={styles.button}>
                  <Button
                     label="Salvar alterações"
                     size={1}
                     onPress={handleSave}
                     disabled={!isFormValid}
                  />
               </View>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   containerSafeArea: {
      flex: 1,
   },
   headerText: {
      fontSize: 18,
      fontWeight: "500",
   },
   coverSection: {
      borderBottomWidth: 2,
      borderColor: "#1f2937",
      gap: 90,
   },
   coverImage: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#6b7280",
      height: 112,
   },
   iconSection: {
      flexDirection: "row",
      position: "absolute",
      top: 10,
      left: "50%",
      transform: [{ translateX: -50 }],
   },
   iconButton: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
      width: 48,
      height: 48,
      borderRadius: 24,
   },
   avatarContainer: {
      marginTop: -80,
      marginBottom: 15,
      alignItems: "center",
   },
   avatar: {
      width: 96,
      height: 96,
      borderRadius: 48,
   },
   iconButtonOverlay: {
      position: "absolute",
      bottom: -10,
      right: 120,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
      width: 48,
      height: 48,
      borderRadius: 24,
   },
   formSection: {
      paddingHorizontal: 24,
      paddingTop: 16,
   },
   inputGroup: {
      marginBottom: 16,
   },
   label: {
      fontSize: 16,
      color: "#6b7280",
      marginBottom: 8,
   },
   icon: {
      color: "#ffffff",
      fontSize: 24,
   },
   container: {},
   button: {
      paddingBottom: 16,
   },
});
