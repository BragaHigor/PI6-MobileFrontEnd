import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { PostItem } from "@/src/components/post/PostItem";
import { PostPost } from "@/src/components/post/PostPost";
import { GeneralHeader } from "@/src/components/ui/GeneralHeader";
import { post } from "@/src/data/post";

export default function PostScreen() {
   return (
      <ScrollView contentContainerStyle={styles.container}>
         <GeneralHeader>
            <Text style={styles.headerText}>Comentar Post</Text>
         </GeneralHeader>
         <View style={styles.postContainer}>
            <PostItem post={post} />
            <View style={styles.postPostContainer}>
               <PostPost />
            </View>
            <PostItem post={post} hideComments />
         </View>
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: {
      flexGrow: 1,
   },
   headerText: {
      fontSize: 18,
      fontWeight: "500",
   },
   postContainer: {
      borderTopWidth: 2,
      borderColor: "#1f2937",
   },
   postPostContainer: {
      borderTopWidth: 8,
      borderBottomWidth: 8,
      borderColor: "#1f2937",
   },
});
