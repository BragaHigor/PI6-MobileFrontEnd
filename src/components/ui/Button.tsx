import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type ButtonProps = {
   label: string;
   onPress?: () => void;
   size: 1 | 2 | 3;
   disabled?: boolean;
};

export const Button = ({ label, onPress, size, disabled }: ButtonProps) => {
   let buttonStyle = styles.buttonMedium;
   let textStyle = styles.textMedium;

   if (size === 1) {
      buttonStyle = styles.buttonLarge;
      textStyle = styles.textLarge;
   } else if (size === 3) {
      buttonStyle = styles.buttonSmall;
      textStyle = styles.textSmall;
   }

   return (
      <TouchableOpacity
         onPress={onPress}
         style={[
            styles.buttonBase,
            buttonStyle,
            disabled && styles.buttonDisabled,
         ]}
         disabled={disabled}
      >
         <Text style={[styles.textBase, textStyle]}>{label}</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   buttonBase: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#6b7280",
      borderRadius: 24,
   },
   buttonLarge: {
      height: 56,
   },
   buttonMedium: {
      height: 40,
   },
   buttonSmall: {
      height: 32,
   },
   textBase: {
      color: "#000000",
      fontWeight: "bold",
   },
   textLarge: {
      fontSize: 18,
   },
   textMedium: {
      fontSize: 16,
   },
   textSmall: {
      fontSize: 12,
   },
   buttonDisabled: {
      opacity: 0.5,
   },
});
