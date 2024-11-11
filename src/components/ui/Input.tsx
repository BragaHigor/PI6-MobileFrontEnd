import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {
   faEye,
   faEyeSlash,
   IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

type InputProps = {
   placeholder: string;
   value?: string;
   password?: boolean;
   filled?: boolean;
   icon?: IconDefinition;
   onChangeText?: (newValue: string) => void;
   onSubmitEditing?: () => void;
   secureTextEntry?: boolean;
};

export const Input = ({
   placeholder,
   value,
   onChangeText,
   password,
   filled,
   icon,
   onSubmitEditing,
   secureTextEntry,
}: InputProps) => {
   const [showPassword, setShowPassword] = useState(false);

   return (
      <View style={[styles.container, filled && styles.filled]}>
         {icon && <FontAwesomeIcon icon={icon} size={16} style={styles.icon} />}
         <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#374151"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={password && !showPassword}
            onSubmitEditing={onSubmitEditing}
         />
         {password && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
               <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  size={24}
                  style={styles.icon}
               />
            </TouchableOpacity>
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
      height: 56,
      borderRadius: 24,
      borderWidth: 2,
      borderColor: "#374151",
   },
   filled: {
      backgroundColor: "#ffffff",
   },
   icon: {
      marginHorizontal: 16,
      color: "#6b7280",
   },
   input: {
      flex: 1,
      height: "100%",
      paddingHorizontal: 16,
      color: "#374151",
      backgroundColor: "transparent",
   },
});
