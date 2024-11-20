import { Tabs } from "expo-router";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import {
   faGear,
   faMagnifyingGlass,
   faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function UiLayout() {
   return (
      <Tabs>
         <Tabs.Screen
            name="home/index"
            options={{
               headerShown: false,
               title: "Início",
               tabBarActiveTintColor: "#003f96c0",
               tabBarInactiveTintColor: "gray",
               tabBarIcon: ({ focused, color, size }) => {
                  if (focused) {
                     return (
                        <FontAwesomeIcon
                           icon={faHouse}
                           color={"#003f96c0"}
                           size={size}
                        />
                     );
                  }
                  return (
                     <FontAwesomeIcon
                        icon={faHouse}
                        color={color}
                        size={size}
                     />
                  );
               },
            }}
         />
         <Tabs.Screen
            name="search/index"
            options={{
               headerShown: false,
               title: "Pesquisa",
               tabBarActiveTintColor: "#003f96c0",
               tabBarInactiveTintColor: "gray",
               tabBarIcon: ({ focused, color, size }) => {
                  if (focused) {
                     return (
                        <FontAwesomeIcon
                           icon={faMagnifyingGlass}
                           color={"#003f96c0"}
                           size={size}
                        />
                     );
                  }
                  return (
                     <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        color={color}
                        size={size}
                     />
                  );
               },
            }}
         />
         <Tabs.Screen
            name="profile/index"
            options={{
               headerShown: false,
               title: "Meu Perfil",
               tabBarActiveTintColor: "#003f96c0",
               tabBarInactiveTintColor: "gray",
               tabBarIcon: ({ focused, color, size }) => {
                  if (focused) {
                     return (
                        <FontAwesomeIcon
                           icon={faUser}
                           color={"#003f96c0"}
                           size={size}
                        />
                     );
                  }
                  return (
                     <FontAwesomeIcon icon={faUser} color={color} size={size} />
                  );
               },
            }}
         />
         <Tabs.Screen
            name="profile/edit/index"
            options={{
               headerShown: false,
               title: "Editar Perfil",
               tabBarActiveTintColor: "#003f96c0",
               tabBarInactiveTintColor: "gray",
               tabBarIcon: ({ focused, color, size }) => {
                  if (focused) {
                     return (
                        <FontAwesomeIcon
                           icon={faPlus}
                           color={"#003f96c0"}
                           size={size}
                        />
                     );
                  }
                  return (
                     <FontAwesomeIcon icon={faPlus} color={color} size={size} />
                  );
               },
            }}
         />
         <Tabs.Screen
            name="settings/index"
            options={{
               headerShown: false,
               title: "Configurações",
               tabBarActiveTintColor: "#003f96c0",
               tabBarInactiveTintColor: "gray",
               tabBarIcon: ({ focused, color, size }) => {
                  if (focused) {
                     return (
                        <FontAwesomeIcon
                           icon={faGear}
                           color={"#003f96c0"}
                           size={size}
                        />
                     );
                  }
                  return (
                     <FontAwesomeIcon icon={faGear} color={color} size={size} />
                  );
               },
            }}
         />
         <Tabs.Screen
            name="post/[id]/index"
            options={{
               headerShown: false,
               tabBarButton: () => null,
            }}
         />
      </Tabs>
   );
}
