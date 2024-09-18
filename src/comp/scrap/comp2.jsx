
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MatchList = () => {
//   const [matches, setMatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMatches = async () => {
//       try {
//         const response = await axios.get('https://api.cricapi.com/v1/matches?apikey=4257c58f-3895-4e77-a809-fe2ba645e805&offset=0');
//         if (response.data && response.data.data) {
//           setMatches(response.data.data); // Ensure 'data' exists
//         } else {
//           setError('Unexpected API response structure');
//         }
//       } catch (error) {
//         setError('Error fetching data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMatches();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>Match List</h1>
//       {matches.length > 0 ? (
//         matches.map(match => (
//           <div key={match.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
//             <h2>{match.name}</h2>
//             <p><strong>Type:</strong> {match.matchType}</p>
//             <p><strong>Status:</strong> {match.status}</p>
//             <p><strong>Venue:</strong> {match.venue}</p>
//             <p><strong>Date:</strong> {match.date}</p>
//             <p><strong>DateTime (GMT):</strong> {match.dateTimeGMT}</p>
//             <div>
//               <h3>Teams:</h3>
//               {match.teamInfo.map(team => (
//                 <div key={team.shortname} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                   <img src={team.img} alt={team.name} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
//                   <span>{team.name} ({team.shortname})</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No matches available</p>
//       )}
//     </div>
//   );
// };

// export default MatchList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const MatchList = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMatches = () => {
      axios.get(`https://api.cricapi.com/v1/matches?apikey=4257c58f-3895-4e77-a809-fe2ba645e805&offset=0`)
        .then(response => {
          if (response.data && response.data.data) {
            const sortedMatches = response.data.data.sort((a, b) => {
              const dateA = new Date(a.date);
              const dateB = new Date(b.date);
              const today = new Date();
              // Compare the dates with the current date
              if (dateA < today && dateB >= today) return 1; // 'a' is in the past, 'b' is today or future
              if (dateA >= today && dateB < today) return -1; // 'a' is today or future, 'b' is in the past
              return dateA - dateB; // Otherwise, sort by date
            });
            setMatches(sortedMatches);
            console.log(matches);
          } else {
            setError('Unexpected API response structure');
          }
          setLoading(false);
        })
        .catch(error => {
          setError('Error fetching data');
          setLoading(false);
        });
    };

    fetchMatches();
  }, []);

if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  const handleMatchClick = (id) => {
    navigate(`/match/${id}`);
  };
  return (
    <div>
      <h1>Match List</h1>
      {(matches.length > 0) ? (
        matches.map(match => (
            
          <div key={match.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}
           onClick={() => handleMatchClick(match.id)}>
            <h2>{match.name}</h2>
            <p><strong>Type:</strong> {match.matchType}</p>
            <p><strong>Status:</strong> {match.status}</p>
            <p><strong>Venue:</strong> {match.venue}</p>
            <p><strong>Date:</strong> {match.date}</p>
            <p><strong>DateTime (GMT):</strong> {match.dateTimeGMT}</p>
            <div>
              <h3>Teams:</h3>
              {match.teamInfo && Array.isArray(match.teamInfo) ? (
                match.teamInfo.map(team => (
                  <div key={team.shortname} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <img src={team.img} alt={team.name} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                    <span>{team.name} ({team.shortname})</span>
                  </div>
                ))
              ) : (
                <p>Team information not available</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No matches available</p>
      )}
    </div>
  );
};

export default MatchList;