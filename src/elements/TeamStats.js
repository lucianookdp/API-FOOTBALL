import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiFootball from "../api/api";
import '../styles/TeamStats.css';

const TeamStats = () => {
  const { teamId } = useParams();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamStats = async () => {
      try {
        const response = await apiFootball.get(`/teams/statistics`, { params: { team: teamId, season: 2023 } });
        setStats(response.data.response);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchTeamStats();
  }, [teamId]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="team-stats-container">
      <h2>Estatísticas do Time</h2>
      {stats && (
        <div className="team-stats">
          <p><strong>Posição:</strong> {stats.league.standings[0].rank}</p>
          <p><strong>Vitórias:</strong> {stats.league.standings[0].all.win}</p>
          <p><strong>Empates:</strong> {stats.league.standings[0].all.draw}</p>
          <p><strong>Derrotas:</strong> {stats.league.standings[0].all.lose}</p>
          <p><strong>Gols Marcados:</strong> {stats.league.standings[0].all.goals.for}</p>
          <p><strong>Gols Sofridos:</strong> {stats.league.standings[0].all.goals.against}</p>
        </div>
      )}
    </div>
  );
};

export default TeamStats;
