import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { RecommendationArea } from "@/src/components/ui/RecommendationArea";
import { SearchInput } from "@/src/components/nav/SearchInput";
import { TrendingArea } from "@/src/components/ui/TrendingArea";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeneralHeader } from "@/src/components/ui/GeneralHeader";

export default function SearchScreen() {
   return (
      <SafeAreaView style={styles.containerSafeArea}>
         <ScrollView>
            <GeneralHeader>
               <Text style={styles.headerText}>Pesquisar</Text>
            </GeneralHeader>
            <View style={styles.container}>
               <View style={styles.searchContainer}>
                  <SearchInput />
                  <TrendingArea />
                  <RecommendationArea />
               </View>
            </View>
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
      padding: 24,
      paddingTop: -15,
      flex: 1,
   },
   header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
   },
   closeButton: {
      justifyContent: "center",
      alignItems: "center",
      width: 48,
      height: 48,
      borderRadius: 24,
      borderWidth: 2,
      borderColor: "#1f2937",
   },
   icon: {
      color: "#ffffff",
   },
   searchContainer: {
      marginVertical: 24,
      gap: 15,
   },
});
