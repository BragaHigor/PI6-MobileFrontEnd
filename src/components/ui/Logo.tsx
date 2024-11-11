import React from "react";
import { Image, View } from "react-native";

type LogoProps = {
   width: number;
   height: number;
};

export const Logo = ({ width, height }: LogoProps) => {
   return (
      <View>
         <Image
            source={require("../../assets/image/logo_app_autismo.png")}
            style={{ width: width, height: height }}
            resizeMode="contain"
         />
      </View>
   );
};
