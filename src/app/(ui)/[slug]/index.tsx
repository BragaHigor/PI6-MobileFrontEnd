import React from "react";
import {
   View,
   Text,
   Image,
   StyleSheet,
   TouchableOpacity,
   Linking,
   ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { GeneralHeader } from "@/src/components/ui/GeneralHeader";
import { user } from "@/src/data/user";
import { Button } from "@/src/components/ui/Button";
import { ProfileFeed } from "@/src/components/profile/ProfileFeed";
import { useRouter } from "expo-router";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfilePageScreen() {
   const router = useRouter();
   const isMe = true;

   return (
      <SafeAreaView style={styles.containerSafeArea}>
         <ScrollView>
            <GeneralHeader>
               <View>
                  <Text style={styles.headerName}>{user.name}</Text>
                  <Text style={styles.headerPostCount}>
                     {user.postCount} posts
                  </Text>
               </View>
            </GeneralHeader>
            <View style={styles.coverSection}>
               <ImageBackground
                  source={{ uri: user.cover }}
                  style={styles.coverImage}
                  resizeMode="cover"
               />
               <View style={styles.profileSection}>
                  <Image source={{ uri: user.avatar }} style={styles.avatar} />
                  <View style={styles.buttonContainer}>
                     {isMe ? (
                        <TouchableOpacity
                           onPress={() => router.push(`/${user.slug}/edit`)}
                        ></TouchableOpacity>
                     ) : (
                        <Button label="Seguir" size={2} />
                     )}
                  </View>
               </View>
               <View style={styles.profileInfo}>
                  <Text style={styles.name}>{user.name}</Text>
                  <Text style={styles.slug}>@{user.slug}</Text>
                  <Text style={styles.bio}>{user.bio}</Text>
                  {user.link && (
                     <View style={styles.linkContainer}>
                        <FontAwesomeIcon
                           icon={faLink}
                           style={styles.linkIcon}
                        />
                        <TouchableOpacity
                           onPress={() => Linking.openURL(user.link!)}
                        >
                           <Text style={styles.link}>{user.link}</Text>
                        </TouchableOpacity>
                     </View>
                  )}
                  <View style={styles.followInfo}>
                     <Text style={styles.followText}>
                        <Text style={styles.followCount}>99</Text> Seguindo
                     </Text>
                     <Text style={styles.followText}>
                        <Text style={styles.followCount}>99</Text> Seguidores
                     </Text>
                  </View>
               </View>
            </View>
            <ProfileFeed />
         </ScrollView>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   containerSafeArea: {
      flex: 1,
   },

   headerName: {
      fontSize: 18,
      fontWeight: "500",
   },
   headerPostCount: {
      fontSize: 12,
      color: "#6b7280",
   },
   coverSection: {
      borderBottomWidth: 2,
      borderColor: "#1f2937",
   },
   coverImage: {
      backgroundColor: "#6b7280",
      height: 112,
   },
   profileSection: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 24,
      marginTop: -48,
   },
   avatar: {
      width: 96,
      height: 96,
      borderRadius: 48,
   },
   buttonContainer: {
      width: 128,
   },
   profileInfo: {
      paddingHorizontal: 24,
      marginTop: 16,
   },
   name: {
      fontSize: 20,
      fontWeight: "bold",
   },
   slug: {
      fontSize: 16,
      color: "#6b7280",
   },
   bio: {
      fontSize: 16,
      color: "#6b7280",
      marginVertical: 8,
   },
   linkContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 8,
   },
   linkIcon: {
      color: "#9ca3af",
      marginRight: 8,
      fontSize: 20,
   },
   link: {
      color: "#60a5fa",
      textDecorationLine: "underline",
   },
   followInfo: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginVertical: 16,
   },
   followText: {
      fontSize: 16,
      color: "#6b7280",
   },
   followCount: {
      color: "#000000",
   },
});