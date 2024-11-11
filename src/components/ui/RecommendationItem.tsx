import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { User } from "@/src/types/user";
import { Button } from "./Button";

type RecommendationItemProps = {
   user: User;
};

export const RecommendationItem = ({ user }: RecommendationItemProps) => {
   const [following, setFollowing] = useState(false);
   const router = useRouter();

   const handleFollowButton = () => {
      setFollowing(true);
   };

   const handleUserPress = () => {
      router.push(`/${user.slug}`);
   };

   return (
      <View style={styles.container}>
         <TouchableOpacity
            onPress={handleUserPress}
            style={styles.avatarContainer}
         >
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
         </TouchableOpacity>
         <TouchableOpacity
            onPress={handleUserPress}
            style={styles.infoContainer}
         >
            <Text style={styles.name} numberOfLines={1}>
               {user.name}
            </Text>
            <Text style={styles.slug} numberOfLines={1}>
               @{user.slug}
            </Text>
         </TouchableOpacity>
         <View style={styles.buttonContainer}>
            {!following && (
               <Button label="Seguir" onPress={handleFollowButton} size={3} />
            )}
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 15,
   },
   avatarContainer: {
      width: 40,
      height: 40,
      marginRight: 8,
      borderRadius: 20,
      overflow: "hidden",
   },
   avatar: {
      width: "100%",
      height: "100%",
   },
   infoContainer: {
      flex: 1,
      overflow: "hidden",
   },
   name: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#fff",
   },
   slug: {
      fontSize: 14,
      color: "#9ca3af",
   },
   buttonContainer: {
      paddingLeft: 8,
      width: 80,
   },
});
