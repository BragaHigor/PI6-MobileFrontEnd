import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { NavItem } from "@/src/components/nav/NavItem";
import { NavLogout } from "@/src/components/nav/NavLogout";
import { GeneralHeader } from "@/src/components/ui/GeneralHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
   return (
      <SafeAreaView style={styles.containerSafeArea}>
         <ScrollView>
            <GeneralHeader>
               <Text style={styles.headerText}>Configurações</Text>
            </GeneralHeader>
            <View style={styles.containerOne}>
               <NavItem href="/home" icon={faHouse} label="Início" />
               <NavItem href="/profile" icon={faUser} label="Meu perfil" />
               <NavLogout />
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
   containerOne: {
      left: 0,
      right: 0,
      bottom: 0,
      paddingLeft: 24,
      marginVertical: 24,
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
   },
   navContainer: {},
});
