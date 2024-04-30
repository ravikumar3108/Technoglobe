import { View, Text , Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigate = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button 
      title="About"
      onPress={()=>{
        navigate.navigate("about")
      }}/>
    </View>
  );
};

export default Navbar;
