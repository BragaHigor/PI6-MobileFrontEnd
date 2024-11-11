import React from "react";
import { View } from "react-native";
import { TweetItem } from "../tweet/TweetItem";
import { tweet } from "@/src/data/tweet";

export const ProfileFeed = () => {
   return (
      <View>
         <TweetItem tweet={tweet} />
         <TweetItem tweet={tweet} />
         <TweetItem tweet={tweet} />
         <TweetItem tweet={tweet} />
      </View>
   );
};
