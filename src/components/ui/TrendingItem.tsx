import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

type TrendingItemProps = {
   label: string;
   count: number;
};

export const TrendingItem = ({ label, count }: TrendingItemProps) => {
   const router = useRouter();

   const handlePress = () => {
      router.push({
         pathname: "/search",
         params: { q: label },
      });
   };

   return (
      <TouchableOpacity onPress={handlePress} style={styles.container}>
         <Text style={styles.label}>{label}</Text>
         <Text style={styles.count}>{count} posts</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   container: {
      marginBottom: 16,
   },
   label: {
      fontSize: 16,
      color: "#ffffff",
   },
   count: {
      fontSize: 14,
      color: "#9ca3af",
   },
});
