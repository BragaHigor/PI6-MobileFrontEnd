import React, { useState } from "react";
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   Dimensions,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../ui/Logo";
import { HomeMenu } from "./HomeMenu";

export const HomeHeader = () => {
   const [showMenu, setShowMenu] = useState(false);

   const screenWidth = Dimensions.get("window").width;
   const isLargeScreen = screenWidth >= 1024;

   return (
      <View style={styles.header}>
         {!isLargeScreen && (
            <View style={styles.logoContainer}>
               <Logo width={50} height={70} />
            </View>
         )}
         {isLargeScreen && <Text style={styles.title}>Página inicial</Text>}
         {!isLargeScreen && (
            <TouchableOpacity
               style={styles.menuIcon}
               onPress={() => setShowMenu(true)}
            >
               <FontAwesomeIcon icon={faBars} size={24} style={styles.icon} />
            </TouchableOpacity>
         )}
         {showMenu && <HomeMenu closeAction={() => setShowMenu(false)} />}
      </View>
   );
};

const styles = StyleSheet.create({
   header: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 24,
      borderBottomWidth: 2,
      borderColor: "#1f2937",
      alignItems: "center",
   },
   logoContainer: {},
   title: {
      fontSize: 24,
      fontWeight: "bold",
   },
   menuIcon: {},
   icon: {
      color: "#ffffff",
   },
});
