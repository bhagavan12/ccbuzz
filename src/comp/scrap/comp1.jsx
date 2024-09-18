import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MatchDetail = ({ matchId }) => {
  const [matchInfo, setMatchInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!matchId) return;

    const fetchMatchInfo = () => {
      axios.get(`https://api.cricapi.com/v1/match_info?apikey=4257c58f-3895-4e77-a809-fe2ba645e805&id=${matchId}`)
        .then(response => {
          if (response.data && response.data.data) {
            setMatchInfo(response.data.data);
          } else {
            setError('Unexpected API response structure');
          }
          setLoading(false);
        })
        .catch(error => {
          setError('Error fetching match information');
          setLoading(false);
        });
    };

    fetchMatchInfo();
  }, [matchId]);

  if (loading) return <p>Loading match details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {matchInfo && (
        <div>
          <h1>{matchInfo.name}</h1>
          <p><strong>Type:</strong> {matchInfo.matchType}</p>
          <p><strong>Status:</strong> {matchInfo.status}</p>
          <p><strong>Venue:</strong> {matchInfo.venue}</p>
          <p><strong>Date:</strong> {matchInfo.date}</p>
          <p><strong>DateTime (GMT):</strong> {matchInfo.dateTimeGMT}</p>

          <div>
            <h3>Teams:</h3>
            {matchInfo.teamInfo && Array.isArray(matchInfo.teamInfo) ? (
              matchInfo.teamInfo.map(team => (
                <div key={team.shortname} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <img src={team.img} alt={team.name} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                  <span>{team.name} ({team.shortname})</span>
                </div>
              ))
            ) : (
              <p>Team information not available</p>
            )}
          </div>

          <div>
            <h3>Score:</h3>
            {matchInfo.score && Array.isArray(matchInfo.score) ? (
              matchInfo.score.map((inning, index) => (
                <div key={index}>
                  <p><strong>{inning.inning}:</strong> {inning.r}/{inning.w} in {inning.o} overs</p>
                </div>
              ))
            ) : (
              <p>Score information not available</p>
            )}
          </div>

          <p><strong>Toss Winner:</strong> {matchInfo.tossWinner} chose to {matchInfo.tossChoice}</p>
          <p><strong>Match Winner:</strong> {matchInfo.matchWinner}</p>
        </div>
      )}
    </div>
  );
};

export default MatchDetail;