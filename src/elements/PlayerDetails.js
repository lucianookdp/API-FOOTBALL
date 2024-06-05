import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiFootball from "../api/api";
import '../styles/PlayerDetails.css';

const PlayerDetails = () => {
  const { playerId } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        const response = await apiFootball.get("/players", { params: { id: playerId, season: 2023, lang: 'pt' } });
        setPlayer(response.data.response[0]);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPlayerDetails();
  }, [playerId]);

  if (loading) return <div>Carregando...</div>;
  if (error || !player) return <div>Erro ao carregar os detalhes do jogador</div>;

  return (
    <div className="player-details">
      <h2>{player.player.name}</h2>
      <img src={player.player.photo} alt={player.player.name} className="player-photo" />
      <p><strong>Idade:</strong> {player.player.age}</p>
      <p><strong>Nacionalidade:</strong> {player.player.nationality}</p>
      <p><strong>Posição:</strong> {player.statistics[0].games.position}</p>
      <p><strong>Clube:</strong> {player.statistics[0].team.name}</p>
    </div>
  );
};

export default PlayerDetails;
