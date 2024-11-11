import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TweetItem } from "@/src/components/tweet/TweetItem";
import { TweetPost } from "@/src/components/tweet/TweetPost";
import { GeneralHeader } from "@/src/components/ui/GeneralHeader";
import { tweet } from "@/src/data/tweet";

export default function TweetScreen() {
   return (
      <ScrollView contentContainerStyle={styles.container}>
         <GeneralHeader>
            <Text style={styles.headerText}>Comentar Tweet</Text>
         </GeneralHeader>
         <View style={styles.tweetContainer}>
            <TweetItem tweet={tweet} />
            <View style={styles.tweetPostContainer}>
               <TweetPost />
            </View>
            <TweetItem tweet={tweet} hideComments />
            <TweetItem tweet={tweet} hideComments />
            <TweetItem tweet={tweet} hideComments />
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
   tweetContainer: {
      borderTopWidth: 2,
      borderColor: "#1f2937",
   },
   tweetPostContainer: {
      borderTopWidth: 8,
      borderBottomWidth: 8,
      borderColor: "#1f2937",
   },
});
