import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  BackHandler,
} from "react-native";

const Result = () => {
  const route = useRoute();
  const { result } = route.params;
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Levels");
      return true;
    };

    const backHandler =
      Platform.OS === "android"
        ? BackHandler.addEventListener("hardwareBackPress", backAction)
        : null;

    return () => {
      if (Platform.OS === "android") {
        backHandler.remove();
      }
    };
  }, []);
  return (
    <View style={styles.SafeArea}>
      <View>
        <Text style={styles.heading}>Result - Level No. {result.level}</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={require("../assets/cat.png")}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <>
        <Text style={styles.resultInfo}>
          Correct Answers: {result.correctAnswers}
        </Text>
        <Text style={styles.resultInfo}>
          Total Questions: {result.totalQuestions}
        </Text>
        <Text style={styles.resultInfo}>
          Accuracy: {result.accuracy.toFixed(2)}%
        </Text>
        <View
          style={{
            position: "relative",
            width: "100%",
            height: 13,
            backgroundColor: "#D5D5D5",
            borderRadius: 99,
            marginVertical: 12,
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${result.accuracy}%`,
              height: 13,
              backgroundColor: "#108540",
              borderRadius: 99,
            }}
          ></View>
        </View>
      </>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Levels")}>
        <Text style={styles.buttonText}>Take Another Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 12,
  },
  heading: {
    marginVertical: 16,
    fontSize: 34,
    textAlign: "center",
    fontWeight: "bold",
  },
  resultInfo: {
    fontSize: 24,
    textAlign: "center",
  },
  banner: {
    width: 300,
    height: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
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
});
