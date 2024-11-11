import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

type TextareaProps = {
   placeholder: string;
   rows: number;
   value?: string;
   onChangeText?: (text: string) => void;
};

export const Textarea = ({
   placeholder,
   rows,
   value,
   onChangeText,
}: TextareaProps) => {
   return (
      <View style={styles.container}>
         <TextInput
            style={[styles.textarea, { height: 20 * rows }]}
            placeholder={placeholder}
            placeholderTextColor="#9ca3af"
            value={value}
            onChangeText={onChangeText}
            multiline={true}
            numberOfLines={rows}
            textAlignVertical="top"
         />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 24,
      borderWidth: 2,
      borderColor: "#374151",
   },
   textarea: {
      flex: 1,
      backgroundColor: "transparent",
      padding: 20,
      color: "#374151",
      fontSize: 16,
   },
});
