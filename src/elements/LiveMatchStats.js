import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiFootball from "../api/api";
import '../styles/LiveMatchStats.css';

const LiveMatchStats = () => {
  const { matchId } = useParams();
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatchStats = async () => {
      try {
        const response = await apiFootball.get("/fixtures/statistics", { params: { fixture: matchId } });
        setStats(response.data.response);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMatchStats();
  }, [matchId]);

  if (loading) return <div>Carregando...</div>;
  if (error || stats.length === 0) return <div>Sem informações sobre este jogo ao vivo.</div>;

  return (
    <div className="live-match-stats">
      <h2>Estatísticas da Partida</h2>
      <div className="stats-container">
        {stats.map((teamStats, index) => (
          <div key={index} className="team-stats">
            <h3>
              <img src={teamStats.team.logo} alt={teamStats.team.name} className="team-flag" />
              {teamStats.team.name}
            </h3>
            <ul>
              {teamStats.statistics.map((stat, i) => (
                <li key={i}><strong>{stat.type}:</strong> {stat.value}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveMatchStats;
