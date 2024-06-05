import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiFootball from "../api/api";
import '../styles/TeamsList.css';

const leagueDetails = {
  "Premier League": { id: 39, season: 2023 },
  "La Liga": { id: 140, season: 2023 },
  "Bundesliga": { id: 78, season: 2023 },
  "Ligue 1": { id: 61, season: 2023 },
  "CONMEBOL Libertadores": { id: 13, season: 2024 },
  "Brasileirão Série A": { id: 71, season: 2023 }
};

const TeamsList = () => {
  const [teams, setTeams] = useState([]);
  const [league, setLeague] = useState("Premier League");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      const { id, season } = leagueDetails[league];
      const response = await apiFootball.get("/teams", { params: { league: id, season: season } });
      setTeams(response.data.response);
      setLoading(false);
    };

    fetchTeams();
  }, [league]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="teams-list-container">
      <h2>Times de Futebol</h2>
      <select onChange={(e) => setLeague(e.target.value)} value={league}>
        {Object.keys(leagueDetails).map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      <ul className="teams-list">
        {teams.map((team) => (
          <li key={team.team.id} className="team-item">
            <Link to={`/teams/${team.team.id}`}>
              <img src={team.team.logo} alt={team.team.name} className="team-logo" />
              <span>{team.team.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamsList;
