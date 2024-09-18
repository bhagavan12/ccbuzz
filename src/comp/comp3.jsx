import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MatchDetails = () => {
  // const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const matchData = {
    "matchInfo": {
      "matchId": 105988,
      "matchDescription": "2nd Unofficial Test",
      "matchFormat": "TEST",
      "matchType": "domestic",
      "complete": false,
      "domestic": false,
      "matchStartTimestamp": 1726387200000,
      "matchCompleteTimestamp": 1726758000000,
      "dayNight": false,
      "year": 2024,
      "dayNumber": 3,
      "state": "inprogress",
      "team1": {
        "id": 268,
        "name": "South Africa A",
        "playerDetails": [
          {
            "id": 14308,
            "name": "Neil Brand",
            "fullName": "Neil Brand",
            "nickName": "Neil Brand",
            "captain": true,
            "role": "Batting Allrounder",
            "keeper": false,
            "substitute": false,
            "teamId": 268,
            "battingStyle": "LEFT",
            "bowlingStyle": "Left arm orthodox",
            "teamName": "RSAA",
            "faceImageId": 182026
          },
          {
            "id": 10687,
            "name": "Dithole",
            "fullName": "Tshepang Dithole",
            "nickName": "Dithole",
            "captain": false,
            "role": "Batsman",
            "keeper": false,
            "substitute": false,
            "teamId": 268,
            "battingStyle": "LEFT",
            "bowlingStyle": "Right Arm off break",
            "teamName": "RSAA",
            "faceImageId": 182026
          },
          {
            "id": 13318,
            "name": "Jean du Plessis",
            "fullName": "Jean du Plessis",
            "nickName": "Jean du Plessis",
            "captain": false,
            "role": "WK-Batsman",
            "keeper": false,
            "substitute": false,
            "teamId": 268,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm medium",
            "teamName": "RSAA",
            "faceImageId": 157709,
            "playingXIChange": "IN"
          },
          {
            "id": 12188,
            "name": "MJ Ackerman",
            "fullName": "Marques Ackerman",
            "nickName": "MJ Ackerman",
            "captain": false,
            "role": "Batsman",
            "keeper": false,
            "substitute": false,
            "teamId": 268,
            "battingStyle": "LEFT",
            "bowlingStyle": "Right Arm off break",
            "teamName": "RSAA",
            "faceImageId": 182026
          },
          {
            "id": 20538,
            "name": "Dewald Brevis",
            "fullName": "Dewald Brevis",
            "nickName": "Brevis",
            "captain": false,
            "role": "Batsman",
            "keeper": false,
            "substitute": false,
            "teamId": 268,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm leg break",
            "teamName": "RSAA",
            "faceImageId": 226302,
            "playingXIChange": "IN"
          },
          {
            "id": 17026,
            "name": "Mpongwana",
            "fullName": "Mihlali Mpongwana",
            "nickName": "Mpongwana",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": false,
            "teamId": 268,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm fast",
            "teamName": "RSAA",
            "faceImageId": 182026,
            "playingXIChange": "IN"
          },
          {
            "id": 11206,
            "name": "Rivaldo Moonsamy",
            "fullName": "Rivaldo Moonsamy",
            "nickName": "Rivaldo Moonsamy",
            "captain": false,
            "role": "Batsman",
            "keeper": true,
            "substitute": false,
            "teamId": 268,
            "battingStyle": "RIGHT",
            "bowlingStyle": "",
            "teamName": "RSAA",
            "faceImageId": 182026
          },
          {
            "id": 16433,
            "name": "Beyers Swanepoel",
            "fullName": "Beyers Swanepoel",
            "nickName": "Beyers Swanepoel",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": false,
            "teamId": 268,
            "battingStyle": "LEFT",
            "bowlingStyle": "Right Arm fast",
            "teamName": "RSAA",
            "faceImageId": 182026
          },
          {
            "id": 13069,
            "name": "Migael Pretorius",
            "fullName": "Migael Pretorius",
            "nickName": "Migael Pretorius",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "substitute": false,
            "teamId": 268,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm medium",
            "teamName": "RSAA",
            "faceImageId": 537837
          },
          {
            "id": 8530,
            "name": "Subrayen",
            "fullName": "Prenelan Subrayen",
            "nickName": "Subrayen",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "substitute": false,
            "teamId": 268,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm off break",
            "teamName": "RSAA",
            "faceImageId": 157817
          },
          {
            "id": 11208,
            "name": "Sipamla",
            "fullName": "Lutho Sipamla",
            "nickName": "Sipamla",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": false,
            "teamId": 268,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm fast medium",
            "teamName": "RSAA",
            "faceImageId": 182026,
            "playingXIChange": "IN"
          },
          {
            "id": 13089,
            "name": "Breetzke",
            "fullName": "Matthew Breetzke",
            "nickName": "Breetzke",
            "captain": false,
            "role": "WK-Batsman",
            "keeper": false,
            "substitute": true,
            "teamId": 268,
            "battingStyle": "RIGHT",
            "bowlingStyle": "",
            "teamName": "RSAA",
            "faceImageId": 537835,
            "playingXIChange": "OUT"
          },
          {
            "id": 13667,
            "name": "Qeshile",
            "fullName": "Sinethemba Qeshile",
            "nickName": "Qeshile",
            "captain": false,
            "role": "WK-Batsman",
            "keeper": false,
            "substitute": true,
            "teamId": 268,
            "battingStyle": "RIGHT",
            "bowlingStyle": "",
            "teamName": "RSAA",
            "faceImageId": 182026,
            "playingXIChange": "OUT"
          },
          {
            "id": 11902,
            "name": "Patrick Kruger",
            "fullName": "Patrick Kruger",
            "nickName": "Patrick Kruger",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "substitute": true,
            "teamId": 268,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm medium",
            "teamName": "RSAA",
            "faceImageId": 182026,
            "playingXIChange": "OUT"
          },
          {
            "id": 24546,
            "name": "Codi Yusuf",
            "fullName": "Codi Yusuf",
            "nickName": "Codi Yusuf",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "substitute": true,
            "teamId": 268,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm medium",
            "teamName": "RSAA",
            "faceImageId": 182026,
            "playingXIChange": "OUT"
          }
        ],
        "shortName": "RSAA"
      },
      "team2": {
        "id": 43,
        "name": "Sri Lanka A",
        "playerDetails": [
          {
            "id": 13884,
            "name": "Pasindu Sooriyabandara",
            "fullName": "Pasindu Sooriyabandara",
            "nickName": "Pasindu Sooriyabandara",
            "captain": true,
            "role": "Batsman",
            "keeper": false,
            "substitute": false,
            "teamId": 43,
            "battingStyle": "RIGHT",
            "bowlingStyle": "",
            "teamName": "SLA",
            "faceImageId": 182026
          },
          {
            "id": 15586,
            "name": "Lahiru Udara",
            "fullName": "Lahiru Udara",
            "nickName": "Lahiru Udara",
            "captain": false,
            "role": "WK-Batsman",
            "keeper": false,
            "substitute": false,
            "teamId": 43,
            "battingStyle": "RIGHT",
            "bowlingStyle": "",
            "teamName": "SLA",
            "faceImageId": 182026
          },
          {
            "id": 13187,
            "name": "Nuwanidu Fernando",
            "fullName": "Nuwanidu Fernando",
            "nickName": "Fernando",
            "captain": false,
            "role": "Batsman",
            "keeper": false,
            "substitute": false,
            "teamId": 43,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm off break",
            "teamName": "SLA",
            "faceImageId": 155852
          },
          {
            "id": 15081,
            "name": "Pawan Rathnayake",
            "fullName": "Pawan Rathnayake",
            "nickName": "Pawan Rathnayake",
            "captain": false,
            "role": "Batsman",
            "keeper": false,
            "substitute": false,
            "teamId": 43,
            "battingStyle": "RIGHT",
            "bowlingStyle": "",
            "teamName": "SLA",
            "faceImageId": 182026,
            "playingXIChange": "IN"
          },
          {
            "id": 13694,
            "name": "Janith Liyanage",
            "fullName": "Janith Liyanage",
            "nickName": "Janith Liyanage",
            "captain": false,
            "role": "Batting Allrounder",
            "keeper": false,
            "substitute": false,
            "teamId": 43,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm fast medium",
            "teamName": "SLA",
            "faceImageId": 182026
          },
          {
            "id": 13930,
            "name": "Sonal Dinusha",
            "fullName": "Sonal Dinusha",
            "nickName": "Dinusha",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "substitute": false,
            "teamId": 43,
            "battingStyle": "LEFT",
            "bowlingStyle": "Left arm orthodox",
            "teamName": "SLA",
            "faceImageId": 182026
          },
          {
            "id": 10937,
            "name": "Vishad Randika",
            "fullName": "Vishad Randika",
            "nickName": "Vishad Randika",
            "captain": false,
            "role": "WK-Batsman",
            "keeper": true,
            "substitute": false,
            "teamId": 43,
            "battingStyle": "RIGHT",
            "bowlingStyle": "",
            "teamName": "SLA",
            "faceImageId": 182026
          },
          {
            "id": 22656,
            "name": "Wanuja Sahan",
            "fullName": "Wanuja Sahan",
            "nickName": "Wanuja Sahan",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "substitute": false,
            "teamId": 43,
            "battingStyle": "LEFT",
            "bowlingStyle": "Left arm orthodox",
            "teamName": "SLA",
            "faceImageId": 182026,
            "playingXIChange": "IN"
          },
          {
            "id": 14574,
            "name": "Mohamed Shiraz",
            "fullName": "Mohamed Shiraz",
            "nickName": "Mohamed Shiraz",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": false,
            "teamId": 43,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm fast medium",
            "teamName": "SLA",
            "faceImageId": 182026,
            "playingXIChange": "IN"
          },
          {
            "id": 41309,
            "name": "Isitha Wijesundera",
            "fullName": "Isitha Wijesundera",
            "nickName": "Isitha Wijesundera",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": false,
            "teamId": 43,
            "battingStyle": "LEFT",
            "bowlingStyle": "Right Arm fast medium",
            "teamName": "SLA",
            "faceImageId": 182026
          },
          {
            "id": 46926,
            "name": "Eshan Malinga",
            "fullName": "Eshan Malinga",
            "nickName": "Eshan Malinga",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": false,
            "teamId": 43,
            "battingStyle": "LEFT",
            "bowlingStyle": "Right Arm fast medium",
            "teamName": "SLA",
            "faceImageId": 182026
          },
          {
            "id": 11545,
            "name": "Oshada Fernando",
            "fullName": "Oshada Fernando",
            "nickName": "Oshada Fernando",
            "captain": false,
            "role": "Batsman",
            "keeper": false,
            "substitute": true,
            "teamId": 43,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm leg break",
            "teamName": "SLA",
            "faceImageId": 181641,
            "playingXIChange": "OUT"
          },
          {
            "id": 21151,
            "name": "Chamika Gunasekara",
            "fullName": "Chamika Gunasekara",
            "nickName": "C Gunasekara",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 43,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm fast medium",
            "teamName": "SLA",
            "faceImageId": 182026,
            "playingXIChange": "OUT"
          },
          {
            "id": 13675,
            "name": "Nishan Peiris",
            "fullName": "Nishan Peiris",
            "nickName": "Nishan Peiris",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 43,
            "battingStyle": "LEFT",
            "bowlingStyle": "Right Arm off break",
            "teamName": "SLA",
            "faceImageId": 182026,
            "playingXIChange": "OUT"
          },
          {
            "id": 52757,
            "name": "Dinura Kalupahana",
            "fullName": "Dinura Kalupahana",
            "nickName": "Dinura Kalupahana",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "substitute": true,
            "teamId": 43,
            "battingStyle": "RIGHT",
            "bowlingStyle": "Right Arm medium",
            "teamName": "SLA",
            "faceImageId": 182026
          },
          {
            "id": 15424,
            "name": "Ahan Wickramasinghe",
            "fullName": "Ahan Wickramasinghe",
            "nickName": "Ahan Wickramasinghe",
            "captain": false,
            "role": "Batsman",
            "keeper": false,
            "substitute": true,
            "teamId": 43,
            "battingStyle": "RIGHT",
            "bowlingStyle": "",
            "teamName": "SLA",
            "faceImageId": 182026
          }
        ],
        "shortName": "SLA"
      },
      "series": {
        "id": 8820,
        "name": "Sri Lanka A tour of South Africa,2024",
        "seriesType": "",
        "startDate": 1724976000000,
        "endDate": 1726704000000,
        "seriesFolder": "",
        "odiSeriesResult": "",
        "t20SeriesResult": "",
        "testSeriesResult": "Series levelled 0-0"
      },
      "umpire1": {
        "id": 7665,
        "name": "Arno Jacobs",
        "country": "RSA"
      },
      "umpire2": {
        "id": 9767,
        "name": "Allahudien Paleker",
        "country": "RSA"
      },
      "umpire3": {},
      "referee": {
        "id": 7461,
        "name": "Zed Ndamane",
        "country": "RSA"
      },
      "tossResults": {
        "tossWinnerId": 43,
        "tossWinnerName": "Sri Lanka A",
        "decision": "Bowling"
      },
      "result": {
        "winningTeam": "",
        "winByRuns": false,
        "winByInnings": false
      },
      "venue": {
        "id": 135,
        "name": "Willowmoore Park",
        "city": "Benoni",
        "country": "South Africa",
        "timezone": "+02:00",
        "latitude": "55.430751",
        "longitude": "-4.634697"
      },
      "status": "Day 3: 2nd Session",
      "playersOfTheMatch": [],
      "playersOfTheSeries": [],
      "revisedTarget": {
        "reason": ""
      },
      "matchTeamInfo": [
        {
          "battingTeamId": 268,
          "battingTeamShortName": "RSAA",
          "bowlingTeamId": 43,
          "bowlingTeamShortName": "SLA"
        },
        {
          "battingTeamId": 43,
          "battingTeamShortName": "SLA",
          "bowlingTeamId": 268,
          "bowlingTeamShortName": "RSAA"
        },
        {
          "battingTeamId": 268,
          "battingTeamShortName": "RSAA",
          "bowlingTeamId": 43,
          "bowlingTeamShortName": "SLA"
        }
      ],
      "isMatchNotCovered": false,
      "HYSEnabled": 0,
      "livestreamEnabled": false,
      "isFantasyEnabled": false,
      "livestreamEnabledGeo": [],
      "alertType": "",
      "shortStatus": "Lead by 30",
      "matchImageId": 379130
    },
    "venueInfo": {
      "established": 1924,
      "capacity": "20,000",
      "knownAs": "Sahara Willowmoore Park",
      "ends": "Chalet End, Ekurhuleni End",
      "city": "Benoni",
      "country": "South Africa",
      "timezone": "+02:00",
      "homeTeam": "South Africa, Easterns",
      "floodlights": false,
      "curator": null,
      "profile": null,
      "imageUrl": "http://i.cricketcb.com/i/stats/fth/540x303/venue/images/135.jpg",
      "ground": "Willowmoore Park",
      "groundLength": 0.0,
      "groundWidth": 0.0,
      "otherSports": null
    },
    "broadcastInfo": []
  }

  // useEffect(() => {
  //   const fetchMatchData = async () => {
  //     const options = {
  //       method: 'GET',  
  //       url: 'https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/105988',
  //       headers: {
  //         'x-rapidapi-key': 'c542f26351msh1f5aeec6f691c7ep124b23jsnfd47354542ab', // Replace 'Your-API-Key' with your actual API key
  //         'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
  //       },
  //     };

  //     try { 
  //       const response = await axios.request(options);
  //       setMatchData(response. data);
  //       console.log(matchData);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err);
  //       setLoading(false);
  //     }
  //   };

  //   fetchMatchData();
  // }, []);

  if (loading) return <p>Loading match details...</p>;
  if (error) return <p>There was an error fetching the match data.</p>;

  return (
    <div>
      {matchData && (
        <>
          <h2>{matchData.matchInfo.matchDescription}</h2>
          <p>
            {matchData.matchInfo.team1.name} vs {matchData.matchInfo.team2.name}
          </p>
          <p>
            Venue: {matchData.matchInfo.venue.name}, {matchData.matchInfo.venue.city}
          </p>
          <p>Status: {matchData.matchInfo.status}</p>
          <p>Result: {matchData.matchInfo.result.winningTeam} won by {matchData.matchInfo.result.winningMargin} runs</p>

          <h3>Players of the Match</h3>
          {matchData.matchInfo.playersOfTheMatch.map((player, index) => (
            <p key={index}>{player.name}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default MatchDetails;
