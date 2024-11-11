import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";

export const TrendingItemSkeleton = () => {
   const pulseAnimation = useRef(new Animated.Value(0.3)).current;

   useEffect(() => {
      Animated.loop(
         Animated.sequence([
            Animated.timing(pulseAnimation, {
               toValue: 1,
               duration: 500,
               useNativeDriver: true,
            }),
            Animated.timing(pulseAnimation, {
               toValue: 0.3,
               duration: 500,
               useNativeDriver: true,
            }),
         ])
      ).start();
   }, [pulseAnimation]);

   return (
      <View style={styles.container}>
         <Animated.View
            style={[styles.line, styles.lineLong, { opacity: pulseAnimation }]}
         />
         <Animated.View
            style={[styles.line, styles.lineShort, { opacity: pulseAnimation }]}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: "column",
      marginTop: 15,
   },
   line: {
      height: 16,
      backgroundColor: "#4b5563",
      borderRadius: 4,
      marginBottom: 4,
   },
   lineLong: {
      width: "75%",
   },
   lineShort: {
      width: "25%",
   },
});
