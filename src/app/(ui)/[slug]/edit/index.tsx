import React from "react";
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
import { user } from "@/src/data/user";
import { Input } from "@/src/components/ui/Input";
import { Textarea } from "@/src/components/ui/Textarea";
import { Button } from "@/src/components/ui/Button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfileScreen() {
   const isMe = true;

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
                  <TouchableOpacity style={styles.iconButton}>
                     <FontAwesomeIcon icon={faCamera} style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconButton}>
                     <FontAwesomeIcon icon={faXmark} style={styles.icon} />
                  </TouchableOpacity>
               </View>
               <View style={styles.avatarContainer}>
                  <Image source={{ uri: user.avatar }} style={styles.avatar} />
                  <TouchableOpacity style={styles.iconButtonOverlay}>
                     <FontAwesomeIcon icon={faCamera} style={styles.icon} />
                  </TouchableOpacity>
               </View>
            </View>
            <View style={styles.formSection}>
               <View style={styles.inputGroup}>
                  <Text style={styles.label}>Nome</Text>
                  <Input placeholder="Digite seu nome" value={user.name} />
               </View>
               <View style={styles.inputGroup}>
                  <Text style={styles.label}>Bio</Text>
                  <Textarea
                     placeholder="Descreva você"
                     value={user.bio}
                     rows={4}
                  />
               </View>
               <View style={styles.inputGroup}>
                  <Text style={styles.label}>Link</Text>
                  <Input placeholder="Adicione um link" value={user.link} />
               </View>
               <View style={styles.button}>
                  <Button label="Salvar alterações" size={1} />
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
