import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { User } from "@/src/types/user";
import api from "@/src/data/axiosConfig";
const userData: User = {
   slug: "",
   name: "",
   avatar: "",
   cover: "",
   bio: "",
   link: "",
};
export const NavMyProfile = () => {
   const [user, setUserData] = useState(userData);

   useEffect(() => {
      const getUserData = async () => {
         try {
            const response = await api.get(
               `/user/${sessionStorage.getItem("userSlug")}`
            );
            const data = response.data.user;
            if (data) {
               setUserData(data);
            }
         } catch (error) {
            console.error("Failed to fetch user data", error);
         }
      };

      getUserData();
   }, []);

   return (
      <View style={styles.container}>
         <Link href={`/${user.slug}` as never} style={styles.avatarContainer}>
            <Image
               source={{ uri: user.avatar }}
               style={styles.avatar}
               accessibilityLabel={`Avatar de ${user.name}`}
            />
         </Link>
         <View style={styles.infoContainer}>
            <Link href={`/${user.slug}` as never} style={styles.nameContainer}>
               <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                  {user.name}
               </Text>
            </Link>
            <Text style={styles.slug} numberOfLines={1} ellipsizeMode="tail">
               @{user.slug}
            </Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
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
      resizeMode: "cover",
   },
   infoContainer: {
      flex: 1,
      overflow: "hidden",
   },
   nameContainer: {},
   name: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#000",
   },
   slug: {
      fontSize: 12,
      color: "gray",
   },
});
