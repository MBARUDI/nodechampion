Champions League Hub
Descrição
Um app ao estilo Netflix, onde você pode centralizar e explorar diferentes jogos, momentos e destaques do Campeonato da Champions League, organizados por categorias.

Domínio
Conteúdo de vídeo da Champions League (jogos completos, melhores momentos, entrevistas, análises).

Features
Explorar Conteúdo da Champions League em Sessões de Categorias:

[Finais Memoráveis, Gols Inesquecíveis, Melhores Jogadas, Clássicos, Entrevistas Pós-Jogo, Análises Táticas, Momentos Históricos]

Filtrar Conteúdo por Time ou Temporada:

Encontre facilmente jogos e momentos específicos do seu time favorito ou de uma temporada marcante.

Como
Feature:
Explorar Conteúdo da Champions League em Sessões de Categorias

Como vou implementar:
GET: api/champions-content - Retorna uma lista de jogos/momentos da Champions League.

Response (Exemplo):

[
  {
    matchId: "match_final_2023_mci_int",
    title: "Final da Champions League 2023 - Manchester City vs Inter de Milão",
    teams: ["Manchester City", "Inter de Milão"],
    date: "10/06/2023",
    highlightsVideoId: "abc123xyz",
    thumbnail: "https://placehold.co/1280x720/000000/FFFFFF?text=Final+2023",
    link: "https://www.youtube.com/watch?v=abc123xyz",
    categories: ["Finais Memoráveis", "Grandes Jogos", "Temporada 2022/2023"]
  },
  {
    matchId: "match_semi_2022_rma_liv",
    title: "Semifinal Champions League 2022 - Real Madrid vs Liverpool",
    teams: ["Real Madrid", "Liverpool"],
    date: "04/05/2022",
    highlightsVideoId: "def456uvw",
    thumbnail: "https://placehold.co/1280x720/000000/FFFFFF?text=Semi+2022",
    link: "https://www.youtube.com/watch?v=def456uvw",
    categories: ["Clássicos", "Gols Inesquecíveis", "Temporada 2021/2022"]
  }
]

GET: api/champions-content?teamName={nomeDoTime} ou api/champions-content?season={temporada} - Retorna uma lista de jogos/momentos filtrados pelo nome do time ou pela temporada.