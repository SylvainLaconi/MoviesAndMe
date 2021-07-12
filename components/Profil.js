import React from "react";
import { View, Image, Text } from "react-native";

const Profil = () => {
  return (
    <View>
      <Image
        // style={StyleSheet.image}
        source={require("../assets/Identité 1 copie.png")}
      />
      <Text>Sylvain</Text>
    </View>
  );
};

export default Profil;

// Profil.styles = {
//   image: {
//     height: 300,
//     width: 300,
//   },
// };
