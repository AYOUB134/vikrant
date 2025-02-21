import React, { useState } from "react";

const TournamentWinner = () => {
  const groups = [
    {
      groupName: "Group A",
      teams: [
        { team: "India", back: [2.46, 2.48], lay: [2.52, 2.58] },
        { team: "Australia", back: [5.8, 6], lay: [6.4, 6.6] },
        { team: "England", back: [8.8, 9], lay: [9.2, 9.4] },
        { team: "South Africa", back: [8.8, 9], lay: [9.2, 10] },
      ],
    },
    {
      groupName: "Group B",
      teams: [
        { team: "Pakistan", back: [30, 32], lay: [36, 40] },
        { team: "New Zealand", back: [5.7, 5.8], lay: [6, 6.4] },
        { team: "Afghanistan", back: [25, 28], lay: [30, 32] },
        { team: "Bangladesh", back: [400, 410], lay: [540, 850] },
      ],
    },
  ];

  const [visibleGroups, setVisibleGroups] = useState([]);

  const toggleGroupVisibility = (groupName) => {
    if (visibleGroups.includes(groupName)) {
      setVisibleGroups(visibleGroups.filter((group) => group !== groupName));
    } else {
      setVisibleGroups([...visibleGroups, groupName]);
    }
  };

  return (
<div className="p-2 w-11/12 bg-gray-900 text-white" style={{width:"50rem"}}>
<h2 className="text-xl font-bold text-center bg-red-700 py-2">TOURNAMENT WINNER</h2>
      <div className="overflow-x-auto">
        {groups.map((group, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center bg-gray-800 p-2 cursor-pointer"
              onClick={() => toggleGroupVisibility(group.groupName)}
            >
              <h3 className="text-lg font-semibold">{group.groupName}</h3>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${
                  visibleGroups.includes(group.groupName) ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            {visibleGroups.includes(group.groupName) && (
              <table className="w-full border border-gray-700 mt-2">
                <thead>
                  <tr className="bg-gray-800 text-gray-300">
                    <th className="p-2">Team</th>
                    <th className="p-2">Back</th>
                    <th className="p-2">Lay</th>
                  </tr>
                </thead>
                <tbody>
                  {group.teams.map((team, teamIndex) => (
                    <tr
                      key={teamIndex}
                      className="border-b border-gray-700 text-center"
                    >
                      <td className="p-2">{team.team}</td>
                      <td className="p-2">
                        {team.back.map((odds, i) => (
                          <span
                            key={i}
                            className="bg-blue-500 p-1 m-1 rounded text-white"
                          >
                            {odds}
                          </span>
                        ))}
                      </td>
                      <td className="p-2">
                        {team.lay.map((odds, i) => (
                          <span
                            key={i}
                            className="bg-pink-500 p-1 m-1 rounded text-white"
                          >
                            {odds}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentWinner;