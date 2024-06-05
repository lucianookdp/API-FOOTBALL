import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiFootball from "../api/api";
import '../styles/MatchDetails.css';

const MatchDetails = () => {
  const { matchId } = useParams();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatchDetails = async () => {
      try {
        const response = await apiFootball.get("/fixtures", { params: { id: matchId } });
        setMatch(response.data.response[0]);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMatchDetails();
  }, [matchId]);

  if (loading) return <div>Carregando...</div>;
  if (error || !match) return <div>Erro ao carregar os detalhes da partida</div>;

  return (
    <div>
      <h2>Detalhes da Partida</h2>
      <p>{match.teams.home.name} vs {match.teams.away.name}</p>
      <p>Data: {new Date(match.fixture.date).toLocaleString()}</p>
      <p>Estádio: {match.fixture.venue.name}</p>
      <p>Resultado: {match.score.fulltime.home} - {match.score.fulltime.away}</p>
    </div>
  );
};

export default MatchDetails;
