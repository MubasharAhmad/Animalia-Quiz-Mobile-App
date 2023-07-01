import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Title = () => {
  return (
    <View>
      <Text style={styles.title}>Animalia Quiz Game</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 16,
    },
});