import * as http from "http";
import { app } from "./app";

const server = http.createServer(app);

const port = process.env.PORT || 3333; // Adiciona a porta 3333 como padrão

server.listen(port, () => {
  // Mensagem temática!
  console.log(`🏆 Champions League API running on port ${port}!`);
});
