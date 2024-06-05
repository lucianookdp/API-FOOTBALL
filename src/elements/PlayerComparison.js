import React, { useState, useEffect } from "react";
import apiFootball from "../api/api";
import '../styles/PlayerComparison.css';

const leagueDetails = {
  "Premier League": { id: 39, season: 2023 },
  "La Liga": { id: 140, season: 2023 },
  "Bundesliga": { id: 78, season: 2023 },
  "Ligue 1": { id: 61, season: 2023 },
  "CONMEBOL Libertadores": { id: 13, season: 2024 },
  "Brasileirão Série A": { id: 71, season: 2023 }
};

const PlayerComparison = () => {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [selectedPlayer1, setSelectedPlayer1] = useState(null);
  const [selectedPlayer2, setSelectedPlayer2] = useState(null);
  const [league1, setLeague1] = useState("Premier League");
  const [league2, setLeague2] = useState("Bundesliga");
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [teams1, setTeams1] = useState([]);
  const [teams2, setTeams2] = useState([]);
  const [players1, setPlayers1] = useState([]);
  const [players2, setPlayers2] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async (league, setTeams) => {
      const { id, season } = leagueDetails[league];
      try {
        const response = await apiFootball.get("/teams", { params: { league: id, season: season } });
        setTeams(response.data.response);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchTeams(league1, setTeams1);
    fetchTeams(league2, setTeams2);
  }, [league1, league2]);

  const fetchPlayers = async (teamId, setPlayers) => {
    try {
      const response = await apiFootball.get("/players", { params: { team: teamId, season: 2023 } });
      setPlayers(response.data.response);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchPlayerDetails = async (id, setPlayer) => {
    try {
      const response = await apiFootball.get("/players", { params: { id: id, season: 2023 } });
      setPlayer(response.data.response[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCompare = () => {
    if (selectedPlayer1) fetchPlayerDetails(selectedPlayer1, setPlayer1);
    if (selectedPlayer2) fetchPlayerDetails(selectedPlayer2, setPlayer2);
  };

  const handlePlayerClick = (id, setSelectedPlayer, selectedPlayer) => {
    if (selectedPlayer === id) {
      setSelectedPlayer(null);
    } else {
      setSelectedPlayer(id);
    }
  };

  const handleReset = () => {
    setPlayer1(null);
    setPlayer2(null);
    setSelectedPlayer1(null);
    setSelectedPlayer2(null);
  };

  useEffect(() => {
    if (team1) fetchPlayers(team1, setPlayers1);
  }, [team1]);

  useEffect(() => {
    if (team2) fetchPlayers(team2, setPlayers2);
  }, [team2]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="player-comparison">
      <h2>Comparação de Jogadores</h2>
      <div className="player-inputs">
        <div className="league-selectors">
          <div>
            <label>Liga 1:</label>
            <select onChange={(e) => setLeague1(e.target.value)} value={league1}>
              {Object.keys(leagueDetails).map((key) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Liga 2:</label>
            <select onChange={(e) => setLeague2(e.target.value)} value={league2}>
              {Object.keys(leagueDetails).map((key) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="team-selectors">
          <div>
            <label>Time 1:</label>
            <select onChange={(e) => setTeam1(e.target.value)} value={team1}>
              <option value="">Selecione um time</option>
              {teams1.map((team) => (
                <option key={team.team.id} value={team.team.id}>{team.team.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Time 2:</label>
            <select onChange={(e) => setTeam2(e.target.value)} value={team2}>
              <option value="">Selecione um time</option>
              {teams2.map((team) => (
                <option key={team.team.id} value={team.team.id}>{team.team.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="button-container">
          <button onClick={handleCompare}>Comparar</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div className="comparison-results">
        {player1 && player2 && (
          <div className="players">
            <div className="player">
              <h3>{player1.player.name}</h3>
              <img src={player1.player.photo} alt={player1.player.name} />
              <p><strong>Idade:</strong> {player1.player.age}</p>
              <p><strong>Clube:</strong> {player1.statistics[0].team.name}</p>
              <img src={player1.statistics[0].team.logo} alt={player1.statistics[0].team.name} className="team-logo" />
              <p><strong>Nacionalidade:</strong> {player1.player.nationality}</p>
              <p><strong>Altura:</strong> {player1.player.height}</p>
              <p><strong>Peso:</strong> {player1.player.weight}</p>
              <p><strong>Partidas Jogadas:</strong> {player1.statistics[0].games.appearences || "N/A"}</p>
              <p><strong>Gols:</strong> {player1.statistics[0].goals.total || "N/A"}</p>
              <p><strong>Assistências:</strong> {player1.statistics[0].goals.assists || "N/A"}</p>
              <p><strong>Posição:</strong> {player1.statistics[0].games.position}</p>
            </div>
            <div className="player">
              <h3>{player2.player.name}</h3>
              <img src={player2.player.photo} alt={player2.player.name} />
              <p><strong>Idade:</strong> {player2.player.age}</p>
              <p><strong>Clube:</strong> {player2.statistics[0].team.name}</p>
              <img src={player2.statistics[0].team.logo} alt={player2.statistics[0].team.name} className="team-logo" />
              <p><strong>Nacionalidade:</strong> {player2.player.nationality}</p>
              <p><strong>Altura:</strong> {player2.player.height}</p>
              <p><strong>Peso:</strong> {player2.player.weight}</p>
              <p><strong>Partidas Jogadas:</strong> {player2.statistics[0].games.appearences || "N/A"}</p>
              <p><strong>Gols:</strong> {player2.statistics[0].goals.total || "N/A"}</p>
              <p><strong>Assistências:</strong> {player2.statistics[0].goals.assists || "N/A"}</p>
              <p><strong>Posição:</strong> {player2.statistics[0].games.position}</p>
            </div>
          </div>
        )}
      </div>
      <div className="player-lists">
        <div className="player-list">
          <h3>Jogadores na {league1}</h3>
          <ul>
            {players1.map((player) => (
              <li
                key={player.player.id}
                onClick={() => handlePlayerClick(player.player.id, setSelectedPlayer1, selectedPlayer1)}
                className={selectedPlayer1 === player.player.id ? "selected" : ""}
              >
                <img src={player.player.photo} alt={player.player.name} className="player-photo" />
                {player.player.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="player-list">
          <h3>Jogadores na {league2}</h3>
          <ul>
            {players2.map((player) => (
              <li
                key={player.player.id}
                onClick={() => handlePlayerClick(player.player.id, setSelectedPlayer2, selectedPlayer2)}
                className={selectedPlayer2 === player.player.id ? "selected" : ""}
              >
                <img src={player.player.photo} alt={player.player.name} className="player-photo" />
                {player.player.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlayerComparison;
