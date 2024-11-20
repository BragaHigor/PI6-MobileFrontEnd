import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TrendingItem } from "./TrendingItem";
import { TrendingItemSkeleton } from "./skeleton/TrendingItemSkeleton";
import api from "@/src/data/axiosConfig";
import { Trends } from "@/src/types/trends";

export const TrendingArea = () => {
   const [trends, setTrends] = useState<Trends[]>([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      const fetchPosts = async () => {
         try {
            const response = await api.get(`/trending`);
            setTrends(response.data.trends);
         } catch (error) {
            console.error("Error fetching trends:", error);
         } finally {
            setLoading(false);
         }
      };

      fetchPosts();
   }, []);
   return (
      <View style={styles.container}>
         <Text style={styles.title}>O que está acontecendo?</Text>
         <View style={styles.content}>
            <View style={styles.itemSpacing}>
               {trends.map((trend, index) => (
                  <TrendingItem
                     key={index}
                     label={trend.hashtag}
                     count={trend.counter}
                  />
               ))}
            </View>
            <View style={styles.itemSpacing}>
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
