import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { PostItem } from "../post/PostItem";
import api from "@/src/data/axiosConfig";
import { Post } from "@/src/types/post";

export const ProfileFeed = () => {
   const [posts, setPosts] = useState<Post[]>([]);
   useEffect(() => {
      const fetchPosts = async () => {
         try {
            const response = await api.get(`/user/${sessionStorage.getItem('userSlug')}/posts`);
            setPosts(response.data.posts);
         } catch (error) {
            console.error("Error fetching posts:", error);
         }
      };
   
      fetchPosts();
   }, []);
   return (
      <View>
         {posts.map((post) => (
            <PostItem key={post.id} post={post} />
         ))}
      </View>
   );
};
