import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons/faHeartPulse";
import { faRetweet } from "@fortawesome/free-solid-svg-icons/faRetweet";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Post } from "@/src/types/post";
import { formatRelativeTime } from "@/src/utils/formatRelativeTime";

type PostItemProps = {
   post: Post;
   hideComments?: boolean;
};

export const PostItem = ({ post, hideComments }: PostItemProps) => {
   const [liked, setLiked] = useState(post.liked);
   const router = useRouter();

   const handleLikeButton = () => {
      setLiked(!liked);
   };

   const handleUserPress = () => {
      router.push(`/${post.user.slug}`);
   };

   const handlePostPress = () => {
      router.push(`/post/${post.id}`);
   };

   return (
      <View style={styles.container}>
         <TouchableOpacity onPress={handleUserPress}>
            <Image style={styles.avatar} source={{ uri: post.user.avatar }} />
         </TouchableOpacity>
         <View style={styles.content}>
            <View style={styles.header}>
               <TouchableOpacity onPress={handleUserPress}>
                  <Text style={styles.name}>{post.user.name}</Text>
               </TouchableOpacity>
               <Text style={styles.meta}>
                  @{post.user.slug}
               </Text>
            </View>
            <Text style={styles.body}>{post.body}</Text>
            {post.image && (
               <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{ uri: post.image }} />
               </View>
            )}
            <View style={styles.actions}>
               {!hideComments && (
                  <TouchableOpacity
                     style={styles.actionItem}
                     onPress={handlePostPress}
                  >
                     <FontAwesomeIcon
                        icon={faComment}
                        size={24}
                        style={styles.icon}
                     />
                     <Text style={styles.actionText}>{post.commentCount}</Text>
                  </TouchableOpacity>
               )}
               <TouchableOpacity style={styles.actionItem}>
                  <FontAwesomeIcon
                     icon={faRetweet}
                     size={24}
                     style={styles.icon}
                  />
                  <Text style={styles.actionText}>{post.retweetCount}</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.actionItem}
                  onPress={handleLikeButton}
               >
                  <FontAwesomeIcon
                     icon={liked ? faHeartPulse : faHeart}
                     size={24}
                     color={liked ? "#e0245e" : "#657786"}
                     style={styles.icon}
                  />
                  <Text style={styles.actionText}>{post.likeCount}</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      padding: 24,
      borderBottomWidth: 2,
      borderColor: "#1f2937",
   },
   avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
   },
   content: {
      flex: 1,
      marginLeft: 8,
   },
   header: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      marginBottom: 4,
   },
   name: {
      fontSize: 18,
      fontWeight: "500",
      marginRight: 12,
   },
   meta: {
      fontSize: 12,
      color: "#6b7280",
   },
   body: {
      paddingVertical: 16,
      fontSize: 18,
   },
   imageContainer: {
      width: "100%",
   },
   image: {
      width: "100%",
      height: undefined,
      aspectRatio: 1,
      borderRadius: 16,
   },
   actions: {
      flexDirection: "row",
      marginTop: 24,
      alignItems: "center",
   },
   actionItem: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
   },
   icon: {
      marginRight: 8,
   },
   actionText: {
      fontSize: 18,
      color: "#1f2937",
   },
   likedIcon: {
      color: "#f87171",
   },
});
