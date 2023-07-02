import {
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import levels from "../data/levels";

const Levels = ({ navigation }) => {
  return (
    <View style={styles.SafeArea}>
      <Text style={styles.heading}>Choose Your Level</Text>
      <ScrollView style={styles.scrollView}>
        {levels.map((level, index) => {
          return (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Quiz", { levelData: level })}
              key={index}
            >
              <Text style={styles.buttonText}>Level {level.id}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Levels;

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 12,
    height: "100%",
  },
  heading: {
    marginVertical: 16,
    fontSize: 34,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#F1715A",
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  scrollView: {},
});
