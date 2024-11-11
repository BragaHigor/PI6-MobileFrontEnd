import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TrendingItem } from "./TrendingItem";
import { TrendingItemSkeleton } from "./skeleton/TrendingItemSkeleton";

export const TrendingArea = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>O que está acontecendo?</Text>
         <View style={styles.content}>
            <View style={styles.itemSpacing}>
               <TrendingItem label="#teste" count={1098} />
            </View>
            <View style={styles.itemSpacing}>
               <TrendingItem label="#teste" count={1098} />
            </View>
            <View style={styles.itemSpacing}>
               <TrendingItemSkeleton />
               <TrendingItemSkeleton />
               <TrendingItemSkeleton />
               <TrendingItemSkeleton />
            </View>
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
   itemSpacing: {},
});
