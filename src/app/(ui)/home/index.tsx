import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { HomeFeed } from "@/src/components/home/HomeFeed";
import { PostPost } from "@/src/components/post/PostPost";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeneralHeader } from "@/src/components/ui/GeneralHeader";

export default function HomeScreen() {
   return (
      <SafeAreaView style={styles.containerSafeArea}>
         <ScrollView contentContainerStyle={styles.container}>
            <GeneralHeader>
               <Text style={styles.headerText}>Página inicial</Text>
            </GeneralHeader>
            <PostPost />
            <HomeFeed />
         </ScrollView>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   containerSafeArea: {
      flex: 1,
   },
   headerText: {
      fontSize: 18,
      fontWeight: "500",
   },
   container: {
      flexGrow: 1,
   },
});
