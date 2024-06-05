import React, { useState, useEffect } from "react";
import apiFootball from "../api/api";

const RecentTransfers = () => {
  const [transfers, setTransfers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentTransfers = async () => {
      try {
        const response = await apiFootball.get("/transfers", { params: { league: 39, season: 2023 } });
        setTransfers(response.data.response);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchRecentTransfers();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Transferências Recentes</h2>
      <ul className="transfers-list">
        {transfers.map((transfer, index) => (
          <li key={index} className="transfer-item">
            <span><strong>{transfer.player.name}</strong></span>
            <span>de <strong>{transfer.transfers[0].teams.out.name}</strong></span>
            <span>para <strong>{transfer.transfers[0].teams.in.name}</strong></span>
            <span>por <strong>{transfer.transfers[0].type}</strong></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransfers;
