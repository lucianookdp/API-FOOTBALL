// src/App.js
import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Home from "./components/Home";
import TeamsList from "./elements/TeamsList";
import TeamDetails from "./elements/TeamDetails";
import MatchDetails from "./elements/MatchDetails";
import TopScorers from "./elements/TopScorers";
import LiveScores from "./elements/LiveScores";
import UpcomingFixtures from "./elements/UpcomingFixtures";
import TeamStats from "./elements/TeamStats";
import PlayerDetails from "./elements/PlayerDetails";
import LiveMatchStats from "./elements/LiveMatchStats";
import PlayerComparison from "./elements/PlayerComparison";
import ThemeContext, { ThemeProvider } from './elements/ThemeContext';
import './styles/App.css';
import './styles/DarkTheme.css';

const App = () => {
  const [backVisible, setBackVisible] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme; // Adiciona a classe 'light' ou 'dark' ao corpo do documento
  }, [theme]);

  const handleRouteChange = (isBackVisible) => {
    setBackVisible(isBackVisible);
  };

  return (
    <div className={`App ${theme}`}>
      <Router>
        <AppBar position="static" className="AppBar">
          <Toolbar className="Toolbar">
            {backVisible && (
              <IconButton color="inherit" onClick={() => window.history.back()}>
                <ArrowBackIcon />
              </IconButton>
            )}
            <Typography variant="h6" component="div">
              <Link to="/" className={`MuiTypography-root ${theme}`}>RessabiadosFut</Link>
            </Typography>
            <div>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/teams">Times</Button>
              <Button color="inherit" component={Link} to="/top-scorers">Artilheiros</Button>
              <Button color="inherit" component={Link} to="/live-scores">Placar ao Vivo</Button>
              <Button color="inherit" component={Link} to="/upcoming-fixtures">Próximas Partidas</Button>
              <Button color="inherit" component={Link} to="/player-comparison">Comparação de Jogadores</Button>
              <Button color="inherit" onClick={toggleTheme}>Alternar Tema</Button>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={`MainContainer ${theme}`}>
          <Box sx={{ p: 2 }} className={`Box ${theme}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/teams" element={<TeamsList />} />
              <Route path="/teams/:teamId" element={<TeamDetails onNavigate={handleRouteChange} />} />
              <Route path="/match/:matchId" element={<MatchDetails />} />
              <Route path="/top-scorers" element={<TopScorers />} />
              <Route path="/live-scores" element={<LiveScores />} />
              <Route path="/upcoming-fixtures" element={<UpcomingFixtures />} />
              <Route path="/team-stats/:teamId" element={<TeamStats />} />
              <Route path="/player/:playerId" element={<PlayerDetails />} />
              <Route path="/live-match/:matchId" element={<LiveMatchStats />} />
              <Route path="/player-comparison" element={<PlayerComparison />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </div>
  );
};

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;
