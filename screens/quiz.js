import {
  View,
  Text,
  StatusBar,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

const Quiz = () => {
  return (
    <View style={styles.SafeArea}>
      <View style={styles.top}>
        <Text style={styles.question}>
          Q. Which city is the capital of Pakistan.
        </Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text style={styles.option}>Option 01</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.option}>Option 02</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.option}>Option 03</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.option}>Option 04</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.buttonSkip} onPress={() => alert("Hello")}>
          <Text style={styles.buttonSkipText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNext}>
          <Text style={styles.buttonNextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 12,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonNext: {
    backgroundColor: "#F1715A",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonSkip: {
    backgroundColor: "#E8E8EC",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonNextText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  buttonSkipText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  question: {
    fontSize: 24,
    fontWeight: "bold",
  },
  options: {
    flex: 1,
  },
  option: {
    backgroundColor: "#E8E8EC",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    fontSize: 16,
  }
});
