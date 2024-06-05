import React, { useEffect } from 'react';

const StandingsWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.api-sports.io/2.0.3/widgets.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div id="wg-api-football-standings"
         data-host="v3.football.api-sports.io"
         data-key="7e7389d802mshb39b260b6a84259p15a7d5jsn048c05eb7509"
         data-league="39"
         data-season="2022"
         data-theme="dark"
         data-show-errors="true"
         data-show-logos="true">
    </div>
  );
};

export default StandingsWidget;
