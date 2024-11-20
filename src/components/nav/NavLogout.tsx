import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "expo-router";

export const NavLogout = () => {
   const navigation = useRouter();

   const handlePress = async () => {
      try {
         await sessionStorage.removeItem("token");
         await sessionStorage.removeItem("userSlug");
         await sessionStorage.removeItem("name");

         navigation.replace("/(auth)/signin");
      } catch (error) {
         console.error("Erro ao fazer logout:", error);
         Alert.alert("Erro", "Não foi possível fazer logout.");
      }
   };

   return (
      <TouchableOpacity
         style={styles.container}
         onPress={handlePress}
         activeOpacity={0.7}
      >
         <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            size={24}
            style={styles.icon}
         />
         <Text style={styles.label}>Sair</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 24,
      paddingVertical: 12,
      opacity: 0.5,
   },
   icon: {
      color: "#000000",
      marginRight: 24,
   },
   label: {
      fontSize: 18,
      color: "#000000",
      marginLeft: -23,
   },
});
