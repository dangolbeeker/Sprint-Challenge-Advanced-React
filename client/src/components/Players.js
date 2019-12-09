import React from 'react';

const DisplayPlayers = props => {
    //console.log(props);

    const formattedRank = rank => {
        return (rank +1)
    };

        return(<tr>
            <th scope="row">{formattedRank(props.data.id)}</th>
            <td>{props.data.name}</td>
            <td>{props.data.country}</td>
            <td>{props.data.searches}</td>
          </tr>)
    
};

export default DisplayPlayers; 