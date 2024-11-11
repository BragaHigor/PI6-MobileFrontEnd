import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "expo-router";

export const NavLogout = () => {
   const navigation = useRouter();

   const handlePress = () => {
      navigation.replace("/(auth)/signin");
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
