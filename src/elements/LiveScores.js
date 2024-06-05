import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiFootball from "../api/api";
import '../styles/LiveScores.css';

const LiveScores = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLiveScores = async () => {
      try {
        const response = await apiFootball.get("/fixtures", { params: { live: "all" } });
        setMatches(response.data.response);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchLiveScores();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="live-scores-container">
      <h2>Placar ao Vivo</h2>
      <ul className="live-scores-list">
        {matches.map(match => (
          <li key={match.fixture.id} className="match-item">
            <div className="team-info home">
              <img src={match.teams.home.logo} alt={match.teams.home.name} className="team-logo" />
              <span className="team-name">{match.teams.home.name}</span>
            </div>
            <div className="score-container">
              <span className="score">{match.goals.home} - {match.goals.away}</span>
            </div>
            <div className="team-info away">
              <span className="team-name">{match.teams.away.name}</span>
              <img src={match.teams.away.logo} alt={match.teams.away.name} className="team-logo" />
            </div>
            <Link to={`/live-match/${match.fixture.id}`} className="details-link">Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveScores;
