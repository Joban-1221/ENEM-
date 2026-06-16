import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import darQuestoes from "@/services/darQuestoes";
import QuizQuestion from "@/components/QuizQuestao";

export default function BancoQuestoes() {
    const [questoes, setQuestoes] = useState([]);

    useEffect(() => {
        async function carregar() {
            const data = await darQuestoes();
            setQuestoes(data.questions);
        }

        carregar();
    }, []);

    console.log(questoes)

    return (
        <ScrollView style={styles.container}>
            {questoes.map((questao) => (
                <QuizQuestion question={questao} />
))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
    },
    card: {
        marginBottom: 16,
        padding: 12,
        borderRadius: 10,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    item: {
        fontSize: 14,
        marginBottom: 4,
    },
});