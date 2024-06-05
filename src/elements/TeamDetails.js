import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiFootball from "../api/api";
import '../styles/TeamDetails.css';

const TeamDetails = () => {
  const { teamId } = useParams();
  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTeamAndPlayers() {
      try {
        const teamResponse = await apiFootball.get(`/teams`, { params: { id: teamId } });
        setTeam(teamResponse.data.response[0].team);
        const playersResponse = await apiFootball.get(`/players`, { params: { team: teamId, season: 2023 } });
        setPlayers(playersResponse.data.response);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchTeamAndPlayers();
  }, [teamId]);

  if (loading) return <div>Carregando...</div>;
  if (error || !team) return <div>Erro ao carregar os detalhes do time</div>;

  return (
    <div className="team-details">
      <h2>{team.name || "Desconhecido"}</h2>
      <img src={team.logo || ""} alt={team.name || "Desconhecido"} className="team-logo" />
      <p>País: {team.country || "Desconhecido"}</p>
      <p>Fundado: {team.founded || "Desconhecido"}</p>

      <h3>Jogadores</h3>
      <ul>
        {players.map((player) => (
          <li key={player.player.id}>
            {player.player.name} - {player.statistics[0].games.position || "Desconhecido"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamDetails;
