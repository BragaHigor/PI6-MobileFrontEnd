import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useRouter, usePathname } from "expo-router";

type NavItemProps = {
   label: string;
   icon: IconDefinition;
   href: string;
   active?: boolean;
};

export const NavItem = ({ href, active, icon, label }: NavItemProps) => {
   const router = useRouter();
   const pathname = usePathname();

   const isMe = pathname === href || active;

   const handlePress = () => {
      router.push(href as never);
   };

   return (
      <TouchableOpacity
         onPress={handlePress}
         style={[
            styles.container,
            active || isMe ? styles.active : styles.inactive,
         ]}
      >
         <FontAwesomeIcon icon={icon} size={24} style={styles.icon} />
         <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 12,
   },
   active: {
      opacity: 0.95,
   },
   inactive: {
      opacity: 0.5,
   },
   icon: {
      marginRight: 24,
   },
   label: {
      fontSize: 18,
   },
});
