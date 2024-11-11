import React from "react";
import { View, StyleSheet } from "react-native";
import { Logo } from "../ui/Logo";
import { SearchInput } from "../nav/SearchInput";

type HomeMenuProps = {
   closeAction: () => void;
};

export const HomeMenu = ({ closeAction }: HomeMenuProps) => {
   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Logo width={50} height={70} />
         </View>
         <View style={styles.searchContainer}>
            <SearchInput />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding: 24,
      backgroundColor: "#000",
   },
   header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
   },
   closeButton: {
      justifyContent: "center",
      alignItems: "center",
      width: 48,
      height: 48,
      borderRadius: 24,
      borderWidth: 2,
      borderColor: "#1f2937",
   },
   icon: {
      color: "#ffffff",
   },
   searchContainer: {
      marginVertical: 24,
   },
   navContainer: {},
});
