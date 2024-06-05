import React, { useState, useEffect } from "react";
import apiFootball from "../api/api";
import "../styles/UpcomingFixtures.css";

const UpcomingFixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpcomingFixtures = async () => {
      try {
        const response = await apiFootball.get("/fixtures", { params: { next: 10 } });
        setFixtures(response.data.response);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchUpcomingFixtures();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="fixtures-container">
      <h2>Próximas Partidas</h2>
      <ul className="fixtures-list">
        {fixtures.map(fixture => (
          <li key={fixture.fixture.id} className="fixture-item">
            <div className="team-info">
              <img src={fixture.teams.home.logo} alt={fixture.teams.home.name} className="team-logo" />
              <span className="team-name">{fixture.teams.home.name}</span>
            </div>
            <div className="versus">vs</div>
            <div className="team-info">
              <img src={fixture.teams.away.logo} alt={fixture.teams.away.name} className="team-logo" />
              <span className="team-name">{fixture.teams.away.name}</span>
            </div>
            <span className="fixture-date">{new Date(fixture.fixture.date).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingFixtures;
