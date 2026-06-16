export default async function darQuestoes() {
  try {
    const response = await fetch(
      "https://api.enem.dev/v1/exams/2023/questions"
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar questões");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}