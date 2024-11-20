import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { usePathname, useRouter } from "expo-router";
import { GeneralHeader } from "@/src/components/ui/GeneralHeader";
import { SearchInput } from "@/src/components/nav/SearchInput";
import { PostItem } from "@/src/components/post/PostItem";
import { post } from "@/src/data/post";

export default function SearchComponent() {
   const router = useRouter();
   const pathname = usePathname();
   const [searchQuery, setSearchQuery] = useState("");

   useEffect(() => {
      const getQuery = () => {
         const search = pathname.split("?")[1];
         const params = new URLSearchParams(search);
         return params.get("q") || "";
      };

      const query = getQuery();
      setSearchQuery(query);

      if (!query) {
         router.replace("/");
      }
   }, [pathname, router]);

   return (
      <View style={styles.container}>
         <GeneralHeader>
            <SearchInput defaultValue={searchQuery} />
         </GeneralHeader>
         <View style={styles.resultsContainer}>
            <PostItem post={post} />
            <PostItem post={post} />
            <PostItem post={post} />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   resultsContainer: {
      borderTopWidth: 2,
      borderColor: "#1f2937",
   },
});
