import React, { useEffect, useState } from "react";
import {
   View,
   Text,
   Image,
   StyleSheet,
   TouchableOpacity,
   ScrollView,
   ImageBackground,
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
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

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
   const [imageUri, setImageUri] = useState<string | null>(null);
   const router = useRouter();

   const uploadImage = async (file: File, type: "avatar" | "cover") => {
      const formData = new FormData();
      formData.append("file", file);

      try {
         const response = await api.put(`/user/${type}`, formData, {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         });

         if (response.status === 200) {
            console.log(`${type} atualizado com sucesso!`);
         } else {
            console.log(`Erro ao atualizar ${type}`);
         }
      } catch (error) {
         console.error(`Failed to upload ${type}`, error);
      }
   };

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

   const [name, setNameField] = useState("");
   const [bio, setBio] = useState("");
   const [link, setLink] = useState("");

   const handleSave = async () => {
      try {
         const response = await api.put(`/user`, {
            name: name,
            bio: bio,
            link: link,
         });
         if (response.status === 200) {
            console.log("Cadastro atualizado com sucesso!");
            setLink("");
            setBio("");
            setNameField("");
            router.replace("/profile");
         } else {
            console.error("Erro ao atualizar conta:", response.data.error.name);
            const errors = response.data.error;
            let errorMessage = "Erro ao criar conta:";
            if (errors.name) errorMessage += `\nNome: ${errors.name}`;
            if (errors.bio) errorMessage += `\n ${errors.bio}`;
            if (errors.link) errorMessage += `\nLink ${errors.link}`;
            console.log(errorMessage);
         }
      } catch (error) {
         console.error("Failed to update profile", error);
         console.log("Failed to update profile");
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
         const file = {
            uri: result.assets[0].uri,
            name: "upload.jpg",
            type: "image/jpeg",
         };

         const fileObject = await fetch(result.assets[0].uri)
            .then((res) => res.blob())
            .then(
               (blob) => new File([blob], "upload.jpg", { type: "image/jpeg" })
            );

         await uploadImage(fileObject, "avatar");
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
         const file = {
            uri: result.assets[0].uri,
            name: "upload.jpg",
            type: "image/jpeg",
         };

         const fileObject = await fetch(result.assets[0].uri)
            .then((res) => res.blob())
            .then(
               (blob) => new File([blob], "upload.jpg", { type: "image/jpeg" })
            );

         await uploadImage(fileObject, "cover");
      }
   };

   return (
      <SafeAreaView style={styles.containerSafeArea}>
         <ScrollView style={styles.container}>
            <GeneralHeader>
               <Text style={styles.headerText}>Editar perfil</Text>
            </GeneralHeader>
            <View style={styles.coverSection}>
               <View>
                  <ImageBackground
                     source={{ uri: user.cover }}
                     style={styles.coverImage}
                     resizeMode="cover"
                  />
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
                  <Image source={{ uri: user.avatar }} style={styles.avatar} />
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
