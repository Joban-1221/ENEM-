import axios from "axios";
import fs from "fs";

const API_KEY = "AIzaSyDNqnXdAOux1XdANw5yJKeDwEwfiPHBVSc";

async function listarVideosPlaylist(url, materia, cor) {
    try {
        const playlistId = new URL(url).searchParams.get("list");

        let pageToken = "";
        let videos = [];

        while (true) {
            const response = await axios.get(
                "https://www.googleapis.com/youtube/v3/playlistItems",
                {
                    params: {
                        part: "snippet",
                        maxResults: 50,
                        playlistId,
                        key: API_KEY,
                        pageToken
                    }
                }
            );

            const items = response.data.items;

            videos.push(
                ...items.map(item => ({
                    id: item.snippet.resourceId.videoId,
                    titulo: item.snippet.title
                }))
            );

            pageToken = response.data.nextPageToken;

            if (!pageToken) break;
        }

        const resultado = {
            [materia]: {
                cor,
                aulas: videos
            }
        };

        fs.writeFileSync(
            `${materia}.json`,
            JSON.stringify(resultado, null, 2),
            "utf8"
        );

        console.log(
            `Arquivo ${materia}.json salvo com ${videos.length} vídeos.`
        );

        return resultado;

    } catch (erro) {
        console.error("Erro:", erro.response?.data || erro.message);
    }
}

listarVideosPlaylist(
    "https://www.youtube.com/playlist?list=PLNM2T4DNzmq6jRjF9XrFFqPdsAeHOiaid",
    "Filosofia",
    "rgb(222, 0, 196)"
);