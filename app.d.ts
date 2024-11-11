import { RegisterOptions } from "expo-router";

declare global {
   namespace ExpoRouter {
      interface RootStackParamList {
         index: undefined;
         "/signin": undefined;
         "/signup": undefined;
         "/home/index": undefined;
         "/profile/index": undefined;
         "/search/index": undefined;
         "/tweet/[id]/index": { id: number };
         "/[slug]/index": { slug: string };
         "/[slug]/edit/index": { slug: string };
      }
   }
}

export {};
