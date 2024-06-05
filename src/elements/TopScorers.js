import React, { useState, useEffect } from "react";
import apiFootball from "../api/api";
import '../styles/TopScorers.css';

const leagueDetails = {
  "Premier League": { id: 39, season: 2023 },
  "La Liga": { id: 140, season: 2023 },
  "Bundesliga": { id: 78, season: 2023 },
  "Ligue 1": { id: 61, season: 2023 },
  "CONMEBOL Libertadores": { id: 13, season: 2024 },
  "Brasileirão Série A": { id: 71, season: 2023 }
};

const TopScorers = () => {
  const [topScorers, setTopScorers] = useState([]);
  const [league, setLeague] = useState("Premier League");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopScorers = async () => {
      const { id, season } = leagueDetails[league];
      const response = await apiFootball.get("/players/topscorers", { params: { league: id, season: season } });
      setTopScorers(response.data.response);
      setLoading(false);
    };

    fetchTopScorers();
  }, [league]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="top-scorers-container">
      <h2>Artilheiros</h2>
      <select onChange={(e) => setLeague(e.target.value)} value={league} className="league-select">
        {Object.keys(leagueDetails).map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      <ul className="top-scorers-list">
        {topScorers.map((scorer) => (
          <li key={scorer.player.id} className="top-scorer-item">
            <img src={scorer.player.photo} alt={scorer.player.name} className="player-photo" />
            <div className="player-info">
              <span className="player-name">{scorer.player.name}</span>
              <span className="player-goals">{scorer.statistics[0].goals.total} gols</span>
            </div>
            <img src={scorer.statistics[0].team.logo} alt={scorer.statistics[0].team.name} className="team-logo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopScorers;
