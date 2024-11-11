import { Stack } from "expo-router";

export default function IndexLayout() {
   return (
      <Stack>
         <Stack.Screen name="signin" options={{ title: "Login" }} />
         <Stack.Screen name="signup" options={{ title: "Cadastre-se" }} />
      </Stack>
   );
}
