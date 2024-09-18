


//v2
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LiveP.css';

const Tabs = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live',
                    headers: {
                        'x-rapidapi-key': 'c542f26351msh1f5aeec6f691c7ep124b23jsnfd47354542ab',
                        'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
                    }
                };

                const response = await axios.request(options);
                console.log("Fetched Data: ", response.data.typeMatches);
                setMatches(response.data.typeMatches || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchMatches();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading matches: {error.message}</div>;
    }
    // const matches = [
    //             {
    //                 "matchType": "International",
    //                 "seriesMatches": [
    //                     {
    //                         "seriesAdWrapper": {
    //                             "seriesId": 6794,
    //                             "seriesName": "Australia tour of England, 2024",
    //                             "matches": [
    //                                 {
    //                                     "matchInfo": {
    //                                         "matchId": 76542,
    //                                         "seriesId": 6794,
    //                                         "seriesName": "Australia tour of England, 2024",
    //                                         "matchDesc": "3rd T20I",
    //                                         "matchFormat": "T20",
    //                                         "startDate": "1726407000000",
    //                                         "endDate": "1726419600000",
    //                                         "state": "Complete",
    //                                         "status": "Match abandoned due to rain",
    //                                         "team1": {
    //                                             "teamId": 9,
    //                                             "teamName": "England",
    //                                             "teamSName": "ENG",
    //                                             "imageId": 172123
    //                                         },
    //                                         "team2": {
    //                                             "teamId": 4,
    //                                             "teamName": "Australia",
    //                                             "teamSName": "AUS",
    //                                             "imageId": 172117
    //                                         },
    //                                         "venueInfo": {
    //                                             "ground": "Emirates Old Trafford",
    //                                             "city": "Manchester",
    //                                         }
    //                                     }
    //                                 },
    //                                 {
    //                                     "matchInfo": {
    //                                         "matchId": 76535,
    //                                         "seriesId": 6794,
    //                                         "seriesName": "Australia tour of England, 2024",
    //                                         "matchDesc": "2nd T20I",
    //                                         "matchFormat": "T20",
    //                                         "startDate": "1726248600000",
    //                                         "endDate": "1726261200000",
    //                                         "state": "Complete",
    //                                         "status": "England won by 3 wkts",
    //                                         "team1": {
    //                                             "teamId": 4,
    //                                             "teamName": "Australia",
    //                                             "teamSName": "AUS",
    //                                         },
    //                                         "team2": {
    //                                             "teamId": 9,
    //                                             "teamName": "England",
    //                                             "teamSName": "ENG",
    //                                         },
    //                                         "venueInfo": {
    //                                             "ground": "Sophia Gardens",
    //                                             "city": "Cardiff",
    //                                         }
    //                                     },
    //                                     "matchScore": {
    //                                         "team1Score": {
    //                                             "inngs1": {
    //                                                 "runs": 193,
    //                                                 "wickets": 6,
    //                                                 "overs": 19.6
    //                                             }
    //                                         },
    //                                         "team2Score": {
    //                                             "inngs1": {
    //                                                 "runs": 194,
    //                                                 "wickets": 7,
    //                                                 "overs": 18.6
    //                                             }
    //                                         }
    //                                     }
    //                                 },
    //                             ]
    //                         }
    //                     }
    //                 ]
    //             }
    //         ];
    return (
        <div className="container">
            <h1>CSS Tabs</h1>
            <h2>Transitioning Between Variable Heights</h2>

            <div className="demo-section">
                {/* Content section 1 */}
            </div>

            <div className="tab-wrap">
                <input type="radio" id="tab1" name="tabGroup1" className="tab"  />
                <label htmlFor="tab1">Live</label>

                <input type="radio" id="tab2" name="tabGroup1" className="tab" defaultChecked/>
                <label htmlFor="tab2">Recent</label>

                <input type="radio" id="tab3" name="tabGroup1" className="tab" />
                <label htmlFor="tab3">Upcoming</label>

                <div className="tab__content">
                    <h3>Live</h3>
                    <div className="">
                        <h1>Match Data</h1>
                        
                    </div>
                </div>

                <div className="tab__content">
                    <h3>Recent</h3>
                    <div className="">
                        <h1>Recent Match Data</h1>
                        {/* Display recent match data similar to live matches */}
                        <div className="matches-container">
                            {matches.length === 0 ? (
                                <div>No matches found.</div>
                            ) : (
                                matches.map((matchType, index) =>
                                    matchType.seriesMatches.map((seriesMatch, idx) =>
                                        seriesMatch.seriesAdWrapper?.matches.map((match) => (
                                            <div key={match.matchInfo.matchId} className="match-box">
                                                <h3>{matchType.matchType}</h3>
                                                <h4>{match.matchInfo.seriesName}</h4>
                                                <p>Date: {new Date(parseInt(match.matchInfo.startDate)).toLocaleDateString()}</p>
                                                <p>
                                                    Teams: {match.matchInfo.team1.teamName} vs {match.matchInfo.team2.teamName}
                                                </p>
                                                {match.matchScore && match.matchScore.team1Score && match.matchScore.team2Score ? (
                                                    <p>
                                                        Scores: {match.matchScore.team1Score.inngs1.runs} / {match.matchScore.team1Score.inngs1.wickets} -{' '}
                                                        {match.matchScore.team2Score.inngs1.runs} / {match.matchScore.team2Score.inngs1.wickets}
                                                    </p>
                                                ) : (
                                                    <p>No score available</p>
                                                )}
                                                <p>Venue: {match.matchInfo.venueInfo.ground}, {match.matchInfo.venueInfo.city}</p>
                                                <p>Status: {match.matchInfo.status}</p>
                                            </div>
                                        ))
                                    )
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className="tab__content">
                    <h3>Upcoming</h3>
                    <div className="container">
                        <h1>Upcoming Match Data</h1>
                        {/* Display upcoming match data similar to live matches */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
