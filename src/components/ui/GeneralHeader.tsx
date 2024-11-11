import React from "react";
import { View, StyleSheet } from "react-native";
import { Logo } from "./Logo";

type GeneralHeaderProps = {
   children: React.ReactNode;
};

export const GeneralHeader = ({ children }: GeneralHeaderProps) => {
   return (
      <View style={styles.header}>
         <Logo width={30} height={50} />
         <View style={styles.content}>{children}</View>
      </View>
   );
};

const styles = StyleSheet.create({
   header: {
      flexDirection: "row",
      alignItems: "center",
      padding: 24,
   },
   backButton: {
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderColor: "#6b7280",
      width: 48,
      height: 48,
      borderRadius: 24,
   },
   icon: {
      color: "#6b7280",
   },
   content: {
      flex: 1,
      marginLeft: 16,
   },
});
