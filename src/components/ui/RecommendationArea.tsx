import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RecommendationItem } from "./RecommendationItem";
import { RecommendationItemSkeleton } from "./skeleton/RecommendationItemSkeleton";
import { user } from "@/src/data/user";

export const RecommendationArea = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Quem seguir</Text>
         <View style={styles.content}>
            <RecommendationItem user={user} />
            <RecommendationItem user={user} />
            <RecommendationItem user={user} />
            <RecommendationItemSkeleton />
            <RecommendationItemSkeleton />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#374151",
      borderRadius: 24,
   },
   title: {
      fontSize: 20,
      padding: 24,
      color: "#ffffff",
      fontWeight: "bold",
   },
   content: {
      flexDirection: "column",
      paddingHorizontal: 24,
      paddingBottom: 24,
      paddingTop: 0,
   },
   itemSpacing: {
      marginBottom: 16,
   },
});
