import { Stack } from "expo-router";
import { UserProvider } from "../context/UserContext";

export default function IndexLayout() {
   return (
      <UserProvider>
         <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(ui)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
         </Stack>
      </UserProvider>
   );
}
