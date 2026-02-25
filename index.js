import express from "express";
import api from "./public/api.js";

const app = express();
app.use(express.json());

app.get("/api/character", (request, response) => {
    response.send(api.results)
});

app.get("/api/character/:id", (request, response) => {
    const idtodos = request.params.id.split(",");
    const character = idtodos.map(idindividual => 
        api.results[idindividual - 1]
    )
    response.send(character)
});

app.listen(5050);