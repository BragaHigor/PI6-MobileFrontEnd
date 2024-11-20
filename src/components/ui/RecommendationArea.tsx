import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RecommendationItem } from "./RecommendationItem";
import { RecommendationItemSkeleton } from "./skeleton/RecommendationItemSkeleton";
import api from "@/src/data/axiosConfig";
import { User } from "@/src/types/user";

export const RecommendationArea = () => {
   const [users, setUsers] = useState<User[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const response = await api.get("/suggestions");
            setUsers(response.data);
         } catch (error) {
            console.error("Error fetching suggestions:", error);
         } finally {
            setLoading(false);
         }
      };

      fetchUsers();
   }, []);
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Quem seguir</Text>
         <View style={styles.content}>
            {Array.isArray(users) &&
               users.map((user) => (
                  <RecommendationItem key={user.slug} user={user} />
               ))}
            <RecommendationItemSkeleton />
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
