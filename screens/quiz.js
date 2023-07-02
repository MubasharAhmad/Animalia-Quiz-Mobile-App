import {
  View,
  Text,
  StatusBar,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";

const Quiz = () => {

  const navigation = useNavigation();

  const route = useRoute();
  const { levelData } = route.params;
  const [questions, setQuestions] = useState(levelData.questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  useEffect(() => {
    setQuestions(levelData.questions);
  }, [levelData]);
  return (
    <View style={styles.SafeArea}>
      <View style={styles.top}>
        <Text style={styles.levelLabel}>level {levelData.id}</Text>
      </View>
      {questions.map((question, index) => (
        <View
          key={index}
          style={currentQuestion === index ? { flex: 1 } : { display: "none" }}
        >
          <Text style={styles.question}>
            Q.{index + 1} {question.question}
          </Text>
          <View style={styles.options}>
            {question.options.map((option, i) => (
              <TouchableOpacity key={index.toString() + i.toString()}>
                <Text style={styles.option}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
      <View style={styles.bottom}>
        {/* Previous Button */}
        <TouchableOpacity
          style={styles.buttonSkip}
          onPress={() => {
            if (currentQuestion > 0) {
              setCurrentQuestion(currentQuestion - 1);
            }
          }}
        >
          <Text style={styles.buttonSkipText}>Previous</Text>
        </TouchableOpacity>

        {/* Next Button */}
        <TouchableOpacity
          style={
            currentQuestion !== questions.length - 1
              ? styles.buttonNext
              : { display: "none" }
          }
          onPress={() => {
            if (currentQuestion < questions.length - 1) {
              setCurrentQuestion(currentQuestion + 1);
            }
          }}
        >
          <Text style={styles.buttonNextText}>Next</Text>
        </TouchableOpacity>

        {/* Finish Button */}
        <TouchableOpacity
          style={
            currentQuestion === questions.length - 1
              ? styles.buttonFinish
              : { display: "none" }
          }
          onPress={() => {
            Alert.alert("Confirmation", "Are you sure to finish the quiz?", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => navigation.navigate("Result") },
            ]);
          }}
        >
          <Text style={styles.buttonNextText}>Finish</Text>
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
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 12,
  },
  levelLabel: {
    textAlign: "center",
    backgroundColor: "gray",
    color: "white",
    borderRadius: 99,
    fontSize: 16,
    paddingVertical: 2,
    paddingHorizontal: 16,
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
  buttonFinish: {
    backgroundColor: "#108540",
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
    paddingBottom: 16,
  },
  options: {
    flex: 1,
  },
  option: {
    backgroundColor: "#E8E8EC",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    fontSize: 20,
  },
});
