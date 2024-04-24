import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flex: 1,
            // flexDirection: "row",
            width: 100,
            height: 100,
            backgroundColor: "red",
            height: 100,
          }}
        >
          <View
            style={{
              flex: 2,
              borderWidth: 5,
              backgroundColor: "yellow",
              width: 100,
            }}
          >
            <Text>Heloo</Text>
          </View>
          <View style={{ flex: 2, backgroundColor: "red" }}>
            <Text>Heloo</Text>
          </View>
          <View style={{ flex: 2, backgroundColor: "green" }}>
            <Text>Heloo</Text>
          </View>
          <View style={{ backgroundColor: "yellow" }}>
            <Text>Heloo</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  view1: {
    display: 1,
    backgroundColor: "green",
    width: 100,
    height: 200,
  },
  box1: {
    display: 2,
    // width: 100,
    backgroundColor: "red",
  },
  box4: {},
});
