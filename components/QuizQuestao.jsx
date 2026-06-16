import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";

export default function QuizQuestion({ question }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  function handleAnswer(letter) {
    if (answered) return;

    setSelected(letter);
    setAnswered(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{question.title}</Text>

      {question.context && (
        <Text style={styles.context}>
          {question.context.replace(/!\[.*?\]\(.*?\)/g, "")}
        </Text>
      )}

      {question.files?.length > 0 && (
        <Image
          source={{ uri: question.files[0] }}
          style={styles.image}
          resizeMode="contain"
        />
      )}

      <Text style={styles.statement}>
        {question.alternativesIntroduction}
      </Text>

      {question.alternatives.map((alt) => {
        const isSelected = selected === alt.letter;
        const isCorrect = alt.letter === question.correctAlternative;

        let style = styles.option;

        if (answered) {
          if (isCorrect) {
            style = [styles.option, styles.correct];
          } else if (isSelected) {
            style = [styles.option, styles.wrong];
          }
        }

        return (
          <Pressable
            key={alt.letter}
            style={style}
            onPress={() => handleAnswer(alt.letter)}
          >
            <Text style={styles.letter}>{alt.letter})</Text>

            <Text style={styles.optionText}>
              {alt.text}
            </Text>
          </Pressable>
        );
      })}

      {answered && (
        <Text
          style={[
            styles.result,
            selected === question.correctAlternative
              ? styles.success
              : styles.error,
          ]}
        >
          {selected === question.correctAlternative
            ? "✅ Resposta correta!"
            : `❌ Resposta incorreta. Gabarito: ${question.correctAlternative}`}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },

  context: {
    fontSize: 15,
    marginBottom: 12,
    lineHeight: 22,
  },

  image: {
    width: "100%",
    height: 250,
    marginBottom: 16,
  },

  statement: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },

  option: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },

  correct: {
    backgroundColor: "#d4edda",
    borderColor: "#28a745",
  },

  wrong: {
    backgroundColor: "#f8d7da",
    borderColor: "#dc3545",
  },

  letter: {
    fontWeight: "bold",
    marginRight: 10,
  },

  optionText: {
    flex: 1,
  },

  result: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "bold",
  },

  success: {
    color: "#28a745",
  },

  error: {
    color: "#dc3545",
  },
});